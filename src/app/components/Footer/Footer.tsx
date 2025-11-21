"use client"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div
                className="w-full h-[300px] py-10 flex flex-col items-center justify-center gap-8"
                style={{ backgroundColor: "#FFFCF4" }}
            >
                <h2 className="font-lato font-bold text-2xl" style={{ color: '#505050' }}>Contact Us For More Info!</h2>

                <div className="flex gap-14">
                    <Link
                        href="https://www.instagram.com/housessentials.id/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300"
                        aria-label="Instagram"
                    >
                        <Image
                            src="/Instagram.png"
                            alt="Instagram"
                            width={40}
                            height={40}
                            className="w-8 h-8 sm:w-10 sm:h-10"
                        />
                    </Link>

                    <Link
                        href="https://shopee.co.id/housessentials.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300"
                        aria-label="Instagram"
                    >
                        <Image
                            src="/Shopee.png"
                            alt="Shopee"
                            width={40}
                            height={40}
                            className="w-8 h-8 sm:w-10 sm:h-10"
                        />
                    </Link>
                </div>


                <ul className="flex gap-6 text-sm font-medium" style={{ color: '#505050' }}>
                    <li>
                        <a href="#Home" className="relative inline-block group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>

                    <li>
                        <a href="#AboutUs" className="relative inline-block group">
                            About Us
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>

                    <li>
                        <a href="#Product" className="relative inline-block group">
                            Order
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>

                    <li>
                        <a href="#Partners" className="relative inline-block group">
                            Partners
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>

                    <li>
                        <Link href="https://wa.me/6285282882767?text=Hai%20kak!%20%F0%9F%91%8B%20%20%0ASaya%20tertarik%20dengan%20produk%20sabun%20cuci%20bajunya.%20%20%0ABoleh%20minta%20info%20lengkap%20tentang%20varian,%20harga,%20dan%20promo%20yang%20tersedia?%20%F0%9F%98%8A%0A%0ATerima%20kasih!%0A" className="relative inline-block group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>


            </div>

            <div
                className="mx-auto flex items-center justify-center font-Raleway font-light h-8 text-sm"
                style={{ backgroundColor: "#A5D4C6", color: "#505050" }}
            >
                <p>Copyright © 2025 Houseessentials.id. All rights reserved.</p>
            </div>
        </div>
    )
}