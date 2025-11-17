"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Navbar() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-26">

                <div ref={ref} className="absolute top-[80%]" />

                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >

                    <Link href="#Home" className="shrink-0">
                        <Image
                            src="/logo-white.png"
                            alt="Logo"
                            width={160}
                            height={80}
                            className="drop-shadow-lg"
                        />
                    </Link>
                </motion.div>

                {/* Menu Desktop */}
                <ul
                    className="hidden md:flex gap-6 text-sm font-medium"
                    style={{ color: "#505050" }}
                >
                    <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.2 }}
                    >
                        <a href="#Home" className="relative inline-block group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </motion.li>

                    <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        <a href="#AboutUs" className="relative inline-block group">
                            About Us
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </motion.li>

                    <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <a href="#Product" className="relative inline-block group">
                            Order
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </motion.li>

                    <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <a href="#Partners" className="relative inline-block group">
                            Partners
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </motion.li>

                    <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link href="https://wa.me/6285282882767?text=Hai%20kak!%20%F0%9F%91%8B%20%20%0ASaya%20tertarik%20dengan%20produk%20sabun%20cuci%20bajunya.%20%20%0ABoleh%20minta%20info%20lengkap%20tentang%20varian,%20harga,%20dan%20promo%20yang%20tersedia?%20%F0%9F%98%8A%0A%0ATerima%20kasih!%0A"
                            className="relative inline-block group"
                            target="_blank"
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </motion.li>
                </ul>
            </div>
        </nav>
    );
}
