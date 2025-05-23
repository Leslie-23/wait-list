import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Bus, User, Info, Phone, Home } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const closeMenu = () => setIsOpen(false);
      document.body.addEventListener("click", closeMenu);
      return () => document.body.removeEventListener("click", closeMenu);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Routes", href: "/routes", icon: <Bus size={18} /> },
    { name: "About", href: "/about", icon: <Info size={18} /> },
    { name: "Contact", href: "/contact", icon: <Phone size={18} /> },
  ];

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? "navbar-glassmorphism py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-2 md:mx-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-white font-bold text-xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-[Macondo]">Trofficient</span>
            <motion.div
              animate={{
                x: [0, 650, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Bus size={30} className="text-green-400" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-green-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="glassmorphism-button-small px-4 py-2 rounded-full flex items-center space-x-2 text-white"
            >
              <User size={16} />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-xl flex items-center space-x-3 hover:text-green-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
          <Link
            href="/login"
            className="glassmorphism-button mt-4 px-8 py-3 rounded-full flex items-center space-x-2 text-white"
            onClick={() => setIsOpen(false)}
          >
            <User size={18} />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
