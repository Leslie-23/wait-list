"use client";

import type React from "react";

import { useState, useEffect, useCallback, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Bus,
  Info,
  Phone,
  Home,
  PiggyBank,
  Terminal,
  TrendingUp,
} from "lucide-react";
import type { JSX } from "@types/react";

interface NavLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
    icon: <Home size={18} className="text-green-500" />,
  },
  {
    name: "Routes",
    href: "/routes",
    icon: <Bus size={18} className="text-green-500" />,
  },
  {
    name: "About",
    href: "/about",
    icon: <Info size={18} className="text-green-500" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <Phone size={18} className="text-green-500" />,
  },
  {
    name: "Invest",
    href: "/investors",
    icon: <TrendingUp size={18} className="text-green-500" />,
  },

  {
    name: "Developers",
    href: "/developers",
    icon: <Terminal size={18} className="text-green-500" />,
  },
];

// Memoized Logo Component
const Logo = memo(() => (
  <Link
    to="/"
    className="flex items-center space-x-2 text-white font-bold text-xl z-50 group focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
    aria-label="Trofficient - Go to homepage"
  >
    <span className="font-[Macondo] group-hover:text-green-400 transition-colors duration-300">
      Trofficient
    </span>
    <motion.div
      animate={{
        x: [0, 650, 0],
      }}
      transition={{
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="group-hover:scale-110 transition-transform duration-300"
    >
      <Bus size={25} className="text-green-400" />
    </motion.div>
  </Link>
));

Logo.displayName = "Logo";

// Memoized Desktop Navigation
const DesktopNavigation = memo(() => {
  const location = useLocation();

  return (
    <nav
      className="hidden md:flex items-center space-x-8"
      role="navigation"
      aria-label="Main navigation"
    >
      {navLinks.map((link) => {
        const isActive = location.pathname === link.href;
        return (
          <Link
            key={link.name}
            to={link.href}
            className={`
              relative text-gray-200 hover:text-green-400 transition-all duration-300
              text-sm font-medium tracking-wide font-[Euclid-Circular-B]
              before:absolute before:bottom-0 before:left-0 before:h-0.5
              before:bg-green-400 before:transition-all before:duration-300
              hover:before:w-full focus:before:w-full
              focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-transparent
              rounded-sm px-2 py-1
              ${isActive ? "text-green-400 before:w-full" : "before:w-0"}
            `}
            aria-current={isActive ? "page" : undefined}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
});

DesktopNavigation.displayName = "DesktopNavigation";

// Memoized Mobile Menu Button
interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton = memo(({ isOpen, onClick }: MobileMenuButtonProps) => (
  <button
    className="md:hidden text-white z-50 p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400/50"
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
    type="button"
  >
    <motion.div
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </motion.div>
  </button>
));

MobileMenuButton.displayName = "MobileMenuButton";

// Memoized Mobile Menu
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = memo(({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/96 backdrop-blur-lg z-40"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          id="mobile-menu"
        >
          <div
            className="flex flex-col items-center justify-center h-full space-y-6 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.h2
              id="mobile-menu-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="sr-only"
            >
              Navigation Menu
            </motion.h2>

            <nav
              role="navigation"
              aria-label="Mobile navigation"
              className="w-full max-w-sm"
            >
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="w-full"
                  >
                    <Link
                      to={link.href}
                      className={`
                        text-white text-2xl sm:text-3xl flex items-center justify-center space-x-4
                        hover:text-green-400 transition-all duration-300 w-full py-4 px-8
                        rounded-xl hover:bg-white/5 active:scale-95 group
                        focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:bg-white/5
                        ${isActive ? "text-green-400 bg-white/5" : ""}
                      `}
                      onClick={onClose}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <motion.div
                        className="group-hover:scale-110 transition-transform duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.icon}
                      </motion.div>
                      <span className={`font-medium `}>{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-xs sm mt-8 text-center"
            >
              Tap on the <X size={18} className="inline text-green-500" /> icon
              to close
              <br />
              Top Right
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

MobileMenu.displayName = "MobileMenu";

// Main Navbar Component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    setScrolled(isScrolled);
  }, []);

  const toggleMenu = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Body overflow management
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Prevent scroll on mobile when menu is open
      const preventDefault = (e: TouchEvent) => e.preventDefault();
      document.addEventListener("touchmove", preventDefault, {
        passive: false,
      });

      return () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("touchmove", preventDefault);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Keyboard event handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [closeMenu]);

  return (
    <>
      <motion.nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${
            scrolled || isOpen
              ? "bg-black/90 backdrop-blur-md py-1 shadow-lg backdrop-opacity-50"
              : "bg-transparent py-3"
          }
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        role="banner"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 md:mx-4">
            <Logo />
            <DesktopNavigation />
            <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
}
