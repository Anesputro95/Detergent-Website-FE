"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const ref = useRef<HTMLElement | null>(null);
    const isInView = useInView(ref, { once: true });
    const [isOpen, setIsOpen] = useState(false);
    const [isDropDown, setIsDropDown] = useState(false);
    const dropdownRef = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropDown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav ref={ref} className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-4 sm:px-6">
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="#Home" className="shrink-0">
                        <Image src="/logo-white.png" alt="Logo" width={140} height={56} className="drop-shadow-lg" />
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-sm font-medium text-[#505050] items-center">
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
                        <Link
                            href="https://wa.me/6285282882767?text=Hai%20kak!... "
                            className="relative inline-block group"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#505050] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 rounded-md text-black/90"
                    onClick={() => setIsOpen((s) => !s)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu (slides down) */}
            <div
                style={{backgroundColor: "#A5D4C6"}}
                className={`md:hidden transition-[max-height,opacity] duration-300 backdrop-blur-sm px-4 ${isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0 overflow-hidden"}`}
            >
                <ul className="flex flex-col gap-4 text-sm font-medium text-[#505050]">
                    <li><a href="#Home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#AboutUs" onClick={() => setIsOpen(false)}>About Us</a></li>
                    <li><a href="#Product" onClick={() => setIsOpen(false)}>Order</a></li>
                    <li>
                        <a href="#Partners" onClick={() => setIsOpen(false)}>Partners</a>
                    </li>
                    <li>
                        <Link href="https://wa.me/6285282882767?text=Hai%20kak!... " target="_blank" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
