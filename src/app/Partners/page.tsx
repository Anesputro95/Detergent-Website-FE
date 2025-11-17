"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import { useRef } from "react";

const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

export default function PartnerPage() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <main
            id="Partners"
            className="relative w-full min-h-screen bg-cover bg-center"
            style={{ backgroundImage: 'url("/BG-PARTNERS.png")' }}
        >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen gap-8 md:gap-0 md:pl-8 lg:pl-16">
                {/* LEFT SECTION */}
                <div ref={ref} className="flex flex-col justify-center items-start gap-6 px-6 md:px-12 lg:px-16 z-10 border-b-2 md:border-b-0 md:border-r-2 border-white/50 py-12 md:py-0">

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.4 }}
                    >
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-lato font-bold leading-snug">
                            Tertarik Menjadi Partner? <br />
                            Hubungi Kita Untuk Info <br />
                            Lebih Lanjut
                        </h1>
                    </motion.div>

                    <div className="gap-4 flex flex-col w-full max-w-sm md:max-w-md mt-4">
                        <motion.div
                            variants={variants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >

                            <Input
                                className="rounded-full bg-white/30 backdrop-blur-md border-none py-3 md:py-4 px-4 placeholder:text-white/80 text-white"
                                placeholder="Nama Bisnis Anda..."
                            />
                        </motion.div>


                        <motion.div
                            variants={variants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <Input
                                className="rounded-full bg-white/30 backdrop-blur-md border-none py-3 md:py-4 px-4 placeholder:text-white/80 text-white"
                                placeholder="Alamat..."
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        <Button
                            className="rounded-full px-6 md:px-8 py-3 md:py-4 text-white font-semibold shadow-lg transition cursor-pointer"
                            style={{ backgroundColor: '#DCA18B' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c98a75'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DCA18B'}
                        >
                            Saya Tertarik!
                        </Button>
                    </motion.div>
                </div>

                {/* RIGHT SECTION */}
                <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-12 lg:px-16 z-10 gap-4 md:gap-6 py-12 md:py-0">

                    {/* CARD 1 */}
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-4 w-full max-w-xl min-h-[100px] md:min-h-[110px] rounded-2xl px-6 md:px-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
                        style={{
                            background: "linear-gradient(90deg, rgba(255,252,244,1) 0%, rgba(255,252,244,0.70) 40%, rgba(255,252,244,0.0) 75%, rgba(255,252,244,0.0) 100%)"
                        }}
                    >
                        <Image src="/Icon2.png" alt="Harga terbaik icon" width={60} height={60} className="shrink-0" />
                        <h1 className="font-lato font-bold text-[#505050] text-sm md:text-base">
                            Mendapatkan harga terbaik <br /> apabila menjadi mitra
                        </h1>
                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex flex-row-reverse items-center gap-4 w-full max-w-xl min-h-[100px] md:min-h-[110px] rounded-2xl px-6 md:px-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-lg"
                        style={{
                            background: "linear-gradient(270deg, rgba(255,252,244,1) 0%, rgba(255,252,244,0.70) 40%, rgba(255,252,244,0.0) 75%, rgba(255,252,244,0.0) 100%)"
                        }}
                    >
                        <Image src="/Icon2.png" alt="Customer service icon" width={60} height={60} className="shrink-0" />
                        <h1 className="font-lato font-bold text-[#505050] text-sm md:text-base">
                            Customer service 24/7
                        </h1>
                    </motion.div>

                    {/* CARD 3 */}
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="flex items-center gap-4 w-full max-w-xl min-h-[100px] md:min-h-[110px] rounded-2xl px-6 md:px-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
                        style={{
                            background: "linear-gradient(90deg, rgba(255,252,244,1) 0%, rgba(255,252,244,0.70) 40%, rgba(255,252,244,0.0) 75%, rgba(255,252,244,0.0) 100%)"
                        }}
                    >
                        <Image src="/Icon2.png" alt="Benefit icon" width={60} height={60} className="shrink-0" />
                        <h1 className="font-lato font-bold text-[#505050] text-sm md:text-base">
                            Lorem ipsum dolor sit <br /> amet consectetur adipiscing elit
                        </h1>
                    </motion.div>

                    {/* CARD 4 */}
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        className="flex flex-row-reverse items-center gap-4 w-full max-w-xl min-h-[100px] md:min-h-[110px] rounded-2xl px-6 md:px-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-lg"
                        style={{
                            background: "linear-gradient(270deg, rgba(255,252,244,1) 0%, rgba(255,252,244,0.70) 40%, rgba(255,252,244,0.0) 75%, rgba(255,252,244,0.0) 100%)"
                        }}
                    >
                        <Image src="/Icon2.png" alt="Benefit icon" width={60} height={60} className="shrink-0" />
                        <h1 className="font-lato font-bold text-[#505050] text-sm md:text-base">
                            Lorem ipsum dolor sit <br /> amet consectetur adipiscing elit
                        </h1>
                    </motion.div>
                </div>
            </div>
        </main >
    )
}
