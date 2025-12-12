"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Download, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileProductsDropdown, setMobileProductsDropdown] = useState(false);
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);
  const pathname = usePathname();
  
  // Refs for dropdown containers
  const productsDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const productsButtonRef = useRef(null);
  const servicesButtonRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target) && 
          productsButtonRef.current && !productsButtonRef.current.contains(event.target)) {
        setProductsDropdown(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target) && 
          servicesButtonRef.current && !servicesButtonRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/products", hasDropdown: true },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Media", path: "/media" },
    
    { name: "Contact", path: "/contact" },
  ];

  const productSubsections = [
    { name: "Pulses and Protein", path: "/products/pulsesprotein" },
    { name: "Seeds and Grains", path: "/products/seedsgrains" },
    { name: "Cotton Bales and Cotton Seed", path: "/products/cottonbales" },
    { name: "Cotton Seed Oil Cake", path: "/products/cottonseedcake" },
  ];

  const servicesSubsections = [
    { name: "Sourcing and Supplying", path: "/services/sourcingsupplying" },
    { name: "Warehousing and Cold Storage Solutions", path: "/services/warehousing" },
  ];

  // 🎨 Updated Color Theme
  const primaryGreen = "#1B5E20"; // Darker Green (Navbar background)
  const accentGreen = "#DAF1DE";  // Pastel Green (Active / Logo / Buttons)
  const hoverGreen = "#4CAF50";   // Medium Green (Hover effects)
  const amberColor = "#FFB300";   // Amber/Yellow for highlights

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg" style={{ backgroundColor: primaryGreen }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-3xl font-bold" style={{ color: accentGreen }}>
                Jain Group
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Items */}
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    {/* Product Dropdown Button */}
                    {item.name === "Product" && (
                      <div className="relative" ref={productsButtonRef}>
                        <button
                          onMouseEnter={() => setProductsDropdown(true)}
                          className={`flex items-center gap-1 font-medium transition-colors px-3 py-2 rounded-md ${
                            pathname.startsWith("/products") 
                              ? 'font-semibold' 
                              : 'hover:bg-emerald-700'
                          }`}
                          style={{
                            color: pathname.startsWith("/products") ? amberColor : "white",
                            backgroundColor: pathname.startsWith("/products") ? 'rgba(255, 179, 0, 0.1)' : 'transparent'
                          }}
                        >
                          {item.name}
                          <ChevronDown size={16} className={`transition-transform ${productsDropdown ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Product Dropdown Menu */}
                        {productsDropdown && (
                          <div 
                            ref={productsDropdownRef}
                            onMouseEnter={() => setProductsDropdown(true)}
                            onMouseLeave={() => setProductsDropdown(false)}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-emerald-200 py-2 z-50"
                          >
                            {productSubsections.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.path}
                                className="block px-4 py-3 text-sm font-medium transition-colors hover:bg-emerald-50 border-b border-emerald-100 last:border-b-0"
                                style={{ color: primaryGreen }}
                                onClick={() => setProductsDropdown(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Services Dropdown Button */}
                    {item.name === "Services" && (
                      <div className="relative" ref={servicesButtonRef}>
                        <button
                          onMouseEnter={() => setServicesDropdown(true)}
                          className={`flex items-center gap-1 font-medium transition-colors px-3 py-2 rounded-md ${
                            pathname.startsWith("/services") 
                              ? 'font-semibold' 
                              : 'hover:bg-emerald-700'
                          }`}
                          style={{
                            color: pathname.startsWith("/services") ? amberColor : "white",
                            backgroundColor: pathname.startsWith("/services") ? 'rgba(255, 179, 0, 0.1)' : 'transparent'
                          }}
                        >
                          {item.name}
                          <ChevronDown size={16} className={`transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Services Dropdown Menu */}
                        {servicesDropdown && (
                          <div 
                            ref={servicesDropdownRef}
                            onMouseEnter={() => setServicesDropdown(true)}
                            onMouseLeave={() => setServicesDropdown(false)}
                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-emerald-200 py-2 z-50"
                          >
                            {servicesSubsections.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.path}
                                className="block px-4 py-3 text-sm font-medium transition-colors hover:bg-emerald-50 border-b border-emerald-100 last:border-b-0"
                                style={{ color: primaryGreen }}
                                onClick={() => setServicesDropdown(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`font-medium transition-colors px-3 py-2 rounded-md ${
                      pathname === item.path 
                        ? 'font-semibold' 
                        : 'hover:bg-emerald-700'
                    }`}
                    style={{
                      color: pathname === item.path ? amberColor : "white",
                      backgroundColor: pathname === item.path ? 'rgba(255, 179, 0, 0.1)' : 'transparent'
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Brochure Button - Moved to extreme right */}
            <a
              href="/brochure.pdf"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all border-2 ml-4"
              style={{ 
                backgroundColor: amberColor, 
                color: primaryGreen,
                borderColor: amberColor
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FFC107';
                e.target.style.borderColor = '#FFC107';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = amberColor;
                e.target.style.borderColor = amberColor;
              }}
            >
              <Download size={18} />
              Brochure
            </a>
          </div>

          {/* Mobile Menu Button and Brochure */}
<div className="md:hidden flex items-center gap-4">
  {/* Brochure Button - Visible on mobile with text */}
  <a
    href="/brochure.pdf"
    target="_blank"
    className="flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-sm"
    style={{ 
      backgroundColor: amberColor, 
      color: primaryGreen 
    }}
  >
    <Download size={16} />
    <span>Brochure</span> {/* Always visible */}
  </a>

  <button 
    onClick={toggleMenu} 
    style={{ color: accentGreen }}
    className="p-2 rounded-lg hover:bg-emerald-700 transition-colors"
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden shadow-lg w-full overflow-hidden" style={{ backgroundColor: primaryGreen }}>
          <div className="flex flex-col w-full px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="border-b border-emerald-600">
                    <button
                      onClick={() => {
                        if (item.name === "Product") setMobileProductsDropdown(!mobileProductsDropdown);
                        if (item.name === "Services") setMobileServicesDropdown(!mobileServicesDropdown);
                      }}
                      className={`flex items-center justify-between w-full font-medium px-3 py-3 rounded-md transition-colors ${
                        pathname.startsWith(`/${item.name.toLowerCase()}`) ? 'bg-emerald-700' : 'hover:bg-emerald-700'
                      }`}
                      style={{ color: "white" }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${
                          (item.name === "Product" && mobileProductsDropdown) || 
                          (item.name === "Services" && mobileServicesDropdown) 
                            ? 'rotate-180' 
                            : ''
                        }`} 
                      />
                    </button>

                    {/* Mobile Product Dropdown */}
                    {item.name === "Product" && mobileProductsDropdown && (
                      <div className="pl-4 pb-2 space-y-1">
                        {productSubsections.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-emerald-600 border-l-2 border-emerald-400 ml-2"
                            style={{ color: "white" }}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Mobile Services Dropdown */}
                    {item.name === "Services" && mobileServicesDropdown && (
                      <div className="pl-4 pb-2 space-y-1">
                        {servicesSubsections.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-emerald-600 border-l-2 border-emerald-400 ml-2"
                            style={{ color: "white" }}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`block font-medium px-3 py-3 rounded-md transition-colors border-b border-emerald-600 ${
                      pathname === item.path ? 'bg-emerald-700' : 'hover:bg-emerald-700'
                    }`}
                    style={{ color: "white" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}