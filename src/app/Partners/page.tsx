"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
};

export default function PartnerPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-120px" });
    const [isSetNamaBisnis, setIsSetNamaBisnis] = useState("");
    const [isSetAlamat, setIsSetAlamat] = useState("");

    const handleSubmit = () => {
        const pesan = 'Halo House Essentials, saya tertarik untuk menjadi partner. Berikut detail bisnis saya:%0A%0ANama Bisnis: ' + (isSetNamaBisnis ? isSetNamaBisnis : '-') + '%0AAlamat: ' + (isSetAlamat ? isSetAlamat : '-') + '%0A%0ATerima kasih.';
        const nomorWhatsApp = '6285282882767';
        const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${pesan}`;
        window.open(urlWhatsApp, '_blank');
    }

    return (
        <main
            id="Partners"
            className="relative w-full min-h-screen bg-cover bg-center"
            style={{ backgroundImage: 'url("/BG-PARTNERS.png")' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

            <div className="relative flex items-center justify-center min-h-screen px-6 md:px-12 lg:pl-20 ">
                {/* LEFT SECTION */}
                <div
                    ref={ref}
                    className="flex flex-col justify-center items-center text-center gap-6 max-w-4xl"
                >
                    <motion.h1
                        variants={variants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.5 }}
                        className="text-white text-4xl md:text-5xl font-lato font-bold leading-normal drop-shadow-md"
                    >
                        Tertarik Menjadi Partner? <br />
                        Hubungi Kita Untuk Info Lebih Lanjut
                    </motion.h1>


                    {/* Inputs */}
                    <div className="w-full flex flex-col gap-4 mt-2 px-42">
                        <motion.div
                            variants={variants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            <Input
                                value={isSetNamaBisnis}
                                onChange={(e) => setIsSetNamaBisnis(e.target.value)}
                                className="rounded-full bg-white/30 backdrop-blur-md border-none py-3 px-5 placeholder:text-white/80 text-white shadow-md"
                                placeholder="Nama Bisnis Anda..."
                            />
                        </motion.div>

                        <motion.div
                            variants={variants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Input
                                value={isSetAlamat}
                                onChange={(e) => setIsSetAlamat(e.target.value)}
                                className="rounded-full bg-white/30 backdrop-blur-md border-none py-3 px-5 placeholder:text-white/80 text-white shadow-md"
                                placeholder="Alamat..."
                            />
                        </motion.div>
                    </div>

                    {/* Button */}
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.5, delay: 0.45 }}
                    >
                        <Button
                            onClick={handleSubmit}
                            className="cursor-pointer rounded-full px-8 py-4 text-white font-semibold shadow-xl transition-all duration-200 hover:scale-105"
                            style={{ backgroundColor: "#DCA18B" }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c98a75")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#DCA18B")}
                        >
                            Saya Tertarik!
                        </Button>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
