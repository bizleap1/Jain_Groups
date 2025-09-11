import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";

export const metadata = {
  title: "Jain Group",
  description: "Official website of Jain Group - Food, Textiles & Agro Industries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        <Navbar />
        <main className="mt-16">{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
