
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="text-xl font-bold">ASHBAH SAMI</div>

        
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-300 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-300 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-300 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
