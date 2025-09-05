export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="font-bold text-lg">Jain Group</h2>
          <p className="text-sm mt-2">
            Building trust since 1990. Food, Textiles & Agro Industries.
          </p>
        </div>
        <div>
          <h2 className="font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/media">Media</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Contact</h2>
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
