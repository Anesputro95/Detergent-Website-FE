"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function ProductPage() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <div ref={ref} id="Product" className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-8 lg:px-12 text-center">
            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <h1 className="font-bold font-lato text-3xl text-[#505050]">
                    Our Products
                </h1>
            </motion.div>

            {/* WRAPPER */}
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="relative w-full max-w-4xl h-auto aspect-video group cursor-pointer">
                <Link
                    href="https://shopee.co.id/housessentials.id"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>
                        {/* IMAGE */}
                        <Image
                            src="/BG-LINK.png"
                            alt="Product Image"
                            fill
                            className="object-contain transition-all duration-300 group-hover:brightness-75"
                        />
                    </div>

                    {/* OVERLAY TEXT */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-lato text-white">
                            FIND US ON SHOPEE
                        </div>
                        <div className="text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                            Click to shop now →
                        </div>
                    </div>
                </Link>
            </motion.div>

        </div>
    );
}
