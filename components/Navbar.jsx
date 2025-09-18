"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/products" },
    { name: "Media", path: "/media" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-forest-800 shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-3xl font-bold text-white">Jain Group</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-white font-medium hover:text-sage-200 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Brochure Button */}
            <a
              href="/brochure.pdf"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-olive-400 text-forest-900 font-semibold hover:bg-olive-300 transition-all"
            >
              <Download size={18} />
              Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-forest-800 shadow-md w-full overflow-hidden">
          <div className="flex flex-col w-full px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block text-white hover:text-sage-200 font-medium px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/brochure.pdf"
              target="_blank"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-olive-400 text-forest-900 font-semibold rounded-xl hover:bg-olive-300 transition-all"
            >
              <Download size={18} />
              Brochure
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}