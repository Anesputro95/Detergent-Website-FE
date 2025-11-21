"use client";
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function AboutUs2() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <main className="relative w-full bg-cover bg-center">
            {/* GRID UTAMA — berubah dari 1 kolom ke 2 kolom di layar md ke atas */}
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

                {/* BAGIAN KIRI — Gambar */}
                <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="relative w-full h-[300px] md:h-auto">
                    <Image
                        src="/BG-NEW-2.png"
                        alt="Laundry Product"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* BAGIAN KANAN — 4 kotak fitur */}
                <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr">
                    {/* Kotak 1 */}
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="flex flex-col justify-center p-14 bg-[#FFFCF4] gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-lato font-bold text-lg sm:text-xl md:text-2xl text-[#505050]">
                                Removes tough stains
                            </h1>
                        </div>
                    </motion.div>

                    {/* Kotak 2 */}
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="flex flex-col justify-center p-16 bg-[#A5D4C6] gap-6">
                        <div className="flex flex-col gap-2 pr-0 sm:pr-6">
                            <h1 className="font-lato font-bold text-lg sm:text-xl md:text-2xl text-[#505050]">
                               Soft and long-lasting fragrance
                            </h1>

                        </div>
                    </motion.div>

                    {/* Kotak 3 */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1 }}
                        className="flex flex-col justify-center p-14 bg-[#CBE2F0] gap-6">
                        <div className="flex flex-col gap-2 pr-0 sm:pr-6">
                            <h1 className="font-lato font-bold text-lg sm:text-xl md:text-2xl text-[#505050]">
                                Softens Fabric
                            </h1>
                        </div>
                    </motion.div>

                    {/* Kotak 4 */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1.2 }}
                        className="flex flex-col justify-center p-14 bg-[#FFFCF4] gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-lato font-bold text-lg sm:text-xl md:text-2xl text-[#505050]">
                                10 ml for 1 kg of aundry
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
