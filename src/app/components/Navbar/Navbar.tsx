import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-26">

                <Link href="/" className="shrink-0">
                    <Image src="/logo-white.png" alt="Logo" width={160} height={80}  className="drop-shadow-lg"/>
                </Link>

                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-6 text-sm font-medium" style={{ color: '#505050' }}>
                    <li>
                        <Link href="/" className="relative inline-block group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/AboutUs" className="relative inline-block group">
                            About Us
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Product" className="relative inline-block group">
                            Order
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Partners" className="relative inline-block group">
                            Partners
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="relative inline-block group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu */}
            </div>
        </nav>
    )
}