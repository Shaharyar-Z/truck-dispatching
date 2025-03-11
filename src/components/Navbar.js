import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all px-6 py-4 md:px-10 
        ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className=" cursor-pointer text-2xl font-extrabold text-blue-600">HORIZON SOLUTION LLC</Link>

        <div className="space-x-8 hidden md:flex">
          <ScrollLink to="services" smooth={true} duration={600} className="cursor-pointer text-slate-700 hover:text-blue-600 transition">
            Services
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={600} className="cursor-pointer text-slate-700 hover:text-blue-600 transition">
            Contact
          </ScrollLink>
        </div>
      </div>
    </motion.nav>
  );
}
