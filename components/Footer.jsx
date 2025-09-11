export default function Footer() {
  const addresses = [
    {
      name: "Unit 1",
      address: "Vijayalakshmi Dall and Flour Mill, Yavatmal, Maharashtra",
      phone: "08644 – 223060",
    },
    {
      name: "Unit 2",
      address: "Vijayalakshmi Dall Mill, Yavatmal, Maharashtra",
      phone: "08644 – 239963",
    },
    {
      name: "Unit 3",
      address: "Vijayalakshmi Dall Mill, Yavatmal, Maharashtra",
      phone: "08644 – 239964",
    },
    {
      name: "Unit 4",
      address: "Vijayalakshmi Dall Mill, Yavatmal, Maharashtra",
      phone: "+91 9866239688",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Addresses */}
        <div className="space-y-4">
          <h2 className="font-bold text-lg mb-2">Our Units</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addresses.map((unit, idx) => (
              <div key={idx} className="text-sm">
                <p className="font-semibold">{unit.name}</p>
                <p>{unit.address}</p>
                <p>📞 {unit.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/media" className="hover:underline">Media</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* General Contact */}
        <div>
          <h2 className="font-bold text-lg mb-2">Contact</h2>
          <p className="text-sm mt-2">Yavatmal, Maharashtra</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ info@jaingroup.com</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Jain Group. All rights reserved.
      </div>
    </footer>
  );
}
