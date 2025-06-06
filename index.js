require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Enhanced Subscriber model
const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  subscribed: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

// Gmail transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Test email configuration
transporter.verify((error) => {
  if (error) {
    console.error("Email transporter error:", error);
  } else {
    console.log("Gmail transporter is ready");
  }
});

// Subscription route
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  // Basic validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address",
    });
  }

  try {
    // Check if email exists and is unsubscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      if (existingSubscriber.subscribed) {
        return res.status(409).json({
          success: false,
          message: "This email is already subscribed",
        });
      }
      // Resubscribe if previously unsubscribed
      existingSubscriber.subscribed = true;
      existingSubscriber.updatedAt = new Date();
      await existingSubscriber.save();
    } else {
      // Create new subscriber
      const newSubscriber = new Subscriber({ email });
      await newSubscriber.save();
    }

    // Send welcome email with unsubscribe link
    const unsubscribeToken = Buffer.from(email).toString("base64");
    const mailOptions = {
      from: `"Trofficient Team" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Welcome to Trofficient Waitlist!",
      html: `
      <div>
        <h1  style=' font-weight: 900 '>Welcome Aboard the <span style='color: #00cb07'>Trofficient</span> Waitlist!</h1><p>We're absolutely thrilled to have you join our growing community of savvy users who are about to revolutionize their experience. You're now first in line for something truly special!</p><h3 style="color: #00cb07; margin-top: 25px;">Here's What Makes Trofficient Different:</h3><p>🌟 <strong>Smart Routing That Saves You Time:</strong> We've developed intelligent algorithms that analyze real-time data to optimize every route. No more guessing games - just the most efficient path every time.</p><p>💳 <strong>Payment Freedom:</strong> Whether you prefer digital wallets, traditional cards, or even crypto, we've got you covered with more payment options than any other platform.</p><p>⏱ <strong>Wait Times? What Wait Times?</strong> Our predictive technology learns from user patterns to anticipate demand, meaning you'll spend less time waiting and more time doing what matters.</p><h3 style="color: #00cb07; margin-top: 25px;">Our Story</h3><p>Trofficient was born out of pure frustration - ours and yours. After one too many experiences of inefficient routes, limited payment options, and endless waits, we knew there had to be a better way. What started as a late-night "there's got to be a better solution" conversation between friends has grown into this platform we're so proud to share with you.</p><p>We're not just building another service - we're creating the experience we all wish existed. And you're now part of making that vision a reality!</p><p>Get ready to be the first to experience:</p> <ul> <li>🚀 Our lightning-fast beta launch</li> <li>🎁 Exclusive early-user perks</li> <li>📈 Priority access as we grow</li> 
          
          <p>You'll be the first to know when we launch in your area!</p>
          
          <p style="font-size: 12px; color: #888; margin-top: 30px;">
            <a href="https://${req.headers.host}/api/unsubscribe?token=${unsubscribeToken}" 
               style="color: #888; text-decoration: none;">
              Unsubscribe from future emails
            </a>
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    res.json({
      success: true,
      message: "Subscription successful! Please check your email.",
    });
  } catch (error) {
    console.error("Subscription error:", error);
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "This email is already subscribed",
      });
    }
    res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later.",
      stack: error.stack,
    });
  }
});

// Unsubscribe route
app.get("/api/unsubscribe", async (req, res) => {
  try {
    const token = req.query.token;
    const email = Buffer.from(token, "base64").toString("ascii");

    const subscriber = await Subscriber.findOne({ email });
    if (!subscriber) {
      return res.status(404).send("Subscriber not found");
    }

    subscriber.subscribed = false;
    subscriber.updatedAt = new Date();
    await subscriber.save();

    res.send(`
      <html>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
          <h1>You have been unsubscribed</h1>
          <p>You will no longer receive emails from us.</p>
          <p>If this was a mistake, you can <a href="https://${req.headers.host}">resubscribe here</a>.</p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error("Unsubscribe error:", error);
    res.status(500).send("An error occurred while processing your request");
  }
});

// Mass email route (protected with basic auth)
app.post("/api/send-mass-email", async (req, res) => {
  try {
    // Basic authorization check
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const credentials = Buffer.from(
      authHeader.split(" ")[1],
      "base64"
    ).toString();
    if (credentials !== `${process.env.ADMIN_USER}:${process.env.ADMIN_PASS}`) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { subject, htmlContent } = req.body;

    if (!subject || !htmlContent) {
      return res.status(400).json({
        success: false,
        message: "Subject and HTML content are required",
      });
    }

    // Get all subscribed users
    const subscribers = await Subscriber.find({ subscribed: true });

    // Send email to each subscriber
    for (const subscriber of subscribers) {
      const unsubscribeToken = Buffer.from(subscriber.email).toString("base64");
      const mailOptions = {
        from: `"Trofficient Team" <${process.env.GMAIL_USER}>`,
        to: subscriber.email,
        subject: subject,
        html: `
          ${htmlContent}
          <p style="font-size: 12px; color: #888; margin-top: 20px;">
            <a href="https://${req.headers.host}/api/unsubscribe?token=${unsubscribeToken}" 
               style="color: #888; text-decoration: none;">
              Unsubscribe from future emails
            </a>
          </p>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`Sent email to ${subscriber.email}`);
      } catch (error) {
        console.error(`Failed to send email to ${subscriber.email}:`, error);
      }
    }

    res.json({
      success: true,
      message: `Mass email sent to ${subscribers.length} subscribers`,
    });
  } catch (error) {
    console.error("Mass email error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while sending mass emails",
      stack: error.stack,
    });
  }
});

// Subscriber count endpoint
app.get("/api/subscriber-count", async (req, res) => {
  try {
    const count = await Subscriber.countDocuments({ subscribed: true });
    res.json({ success: true, count });
  } catch (error) {
    console.error("Subscriber count error:", error);
    res.status(500).json({
      success: false,
      message: "Error getting subscriber count",
      stack: error.stack,
    });
  }
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    service: "Trofficient Waitlist API",
    status: "running",
    endpoints: {
      subscribe: "POST /api/subscribe",
      unsubscribe: "GET /api/unsubscribe?token={token}",
      sendMassEmail: "POST /api/send-mass-email (admin only)",
      subscriberCount: "GET /api/subscriber-count",
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
