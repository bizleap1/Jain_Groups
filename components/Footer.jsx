export default function Footer() {
  const addresses = [
    {
      name: "JAIN INDUSTRIES",
      address: "Yavatmal, Maharashtra",
      phone: "08644 – 223060",
    },
    {
      name: "JAIN FOOD PRODUCTS",
      address: "Yavatmal, Maharashtra",
      phone: "08644 – 239963",
    },
    {
      name: "JAIN COTTEX AND AGRO INDUSTRIES",
      address: "Yavatmal, Maharashtra",
      phone: "08644 – 239964",
    },
    {
      name: "MANORAMA INDUSTRIES",
      address: "Yavatmal, Maharashtra",
      phone: "+91 9866239688",
    },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Media", href: "/media" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: "F", label: "Facebook", href: "#" },
    { icon: "L", label: "LinkedIn", href: "#" },
    { icon: "T", label: "Twitter", href: "#" },
    { icon: "I", label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-gray-300 relative overflow-hidden">
      {/* Simplified background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,_#1f2937_12%,_transparent_12.5%,_transparent_87%,_#1f2937_87.5%,_#1f2937)] bg-[length:20px_20px] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                JAIN GROUP
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Leading manufacturers and producers with decades of excellence in industrial solutions and food products.
              </p>
            </div>
            
            
          </div>

          {/* Our Units */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold text-white border-l-4 border-amber-500 pl-3">
              Our Units
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {addresses.map((unit, idx) => (
                <div 
                  key={idx} 
                  className="group p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-800 hover:border-gray-700"
                >
                  <h4 className="font-bold text-white text-sm mb-2 group-hover:text-amber-300 transition-colors">
                    {unit.name}
                  </h4>
                  <div className="space-y-1 text-sm text-gray-400">
                    <p className="flex items-start">
                      <span className="mr-2 mt-1">📍</span>
                      <span>{unit.address}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">📞</span>
                      <span className="font-medium text-gray-300">{unit.phone}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-l-4 border-amber-500 pl-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-amber-300 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-800">
              <h3 className="text-lg font-semibold text-white">
                Get In Touch
              </h3>
              <div className="space-y-3 text-sm text-gray-400">
                <p className="flex items-start">
                  <span className="mr-3 mt-0.5 text-amber-400">📍</span>
                  <span>Yavatmal, Maharashtra</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-amber-400">📞</span>
                  <span className="font-medium text-gray-300">+91 98765 43210</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-amber-400">✉️</span>
                  <span className="font-medium text-gray-300">info@jaingroup.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Jain Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a href="" className="hover:text-amber-300 transition-colors">
                Privacy Policy
              </a>
              <a href="" className="hover:text-amber-300 transition-colors">
                Terms of Service
              </a>
              <a href="" className="hover:text-amber-300 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}