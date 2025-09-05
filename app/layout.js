import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Jain Group",
  description: "Official website of Jain Group - Food, Textiles & Agro Industries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        <Navbar />
        {/* Add top padding/margin equal to navbar height */}
        <main className="mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
