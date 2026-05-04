import { useState, useEffect } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Mens", "Womens", "Accessories", "New Releases"];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled ? "bg-white text-black shadow-md py-4" : "bg-transparent text-white py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="text-2xl font-heading font-bold tracking-tighter uppercase cursor-pointer">
            Apex<span className="text-accent-500">.</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-semibold tracking-wide uppercase hover:text-accent-500 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button aria-label="Search" className="hover:text-accent-500 transition-colors">
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button aria-label="Account" className="hidden md:block hover:text-accent-500 transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button aria-label="Cart" className="relative hover:text-accent-500 transition-colors">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
              <span className="absolute -top-1 -right-2 bg-accent-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white text-black flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="text-2xl font-heading font-bold tracking-tighter uppercase">
                Apex<span className="text-accent-500">.</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col p-6 space-y-6 flex-grow">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-2xl font-heading font-bold uppercase tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="pt-6 border-t border-gray-100 flex items-center space-x-4">
                <User className="w-6 h-6" />
                <span className="font-semibold uppercase tracking-wide">Account</span>
              </div>
            </nav>
            <div className="p-6 bg-gray-50">
              <button className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 rounded hover:bg-neutral-800 transition-colors">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
