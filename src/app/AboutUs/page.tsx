"use client"
import Image from 'next/image';
import AboutUs2 from '../AboutUs2/page';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutUs() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <main id='AboutUs' className="flex min-h-screen items-center justify-center px-4 sm:px-8 bg-[#f8f6f3]">
                <section className="w-full max-w-6xl mx-auto p-6">
                    <div className="rounded-lg p-8 gap-16 flex flex-col">
                        {/* Heading */}
                        <header ref={ref} className="text-center mb-8">
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.4 }}
                            >

                                <h2 className="font-bold font-lato text-2xl sm:text-3xl lg:text-4xl text-[#505050]">
                                    We Create Laundry Softergent
                                    <br />
                                    With Scent That Stays With You
                                </h2>
                            </motion.div>
                        </header>

                        {/* Grid 3 Kolom - Responsive */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-14">
                            {/* Card 1 */}
                            <motion.article
                                initial={{ y: 10, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="bg-[#FFFCF4] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-8 px-6 sm:px-8 flex flex-col gap-6"
                            >
                                <div className="w-24 h-24 rounded-md flex items-center justify-center">
                                    <Image
                                        src="/Icon.png"
                                        alt="Point 1 Icon"
                                        width={96}
                                        height={96}
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-semibold text-gray-800 text-lg">Cleans Deeply</h3>
                                    <p className="text-sm text-gray-500">Not just clean — our formula helps preserve fabric colors, keeping your clothes looking vibrant for longer</p>
                                </div>
                            </motion.article>

                            {/* Card 2 */}
                            <motion.article
                                initial={{ y: 10, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="bg-[#DCA18B] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-8 px-6 sm:px-8 flex flex-col gap-6">
                                <div className="w-24 h-24 rounded-md flex items-center justify-center">
                                    <Image
                                        src="/Icon.png"
                                        alt="Point 2 Icon"
                                        width={96}
                                        height={96}
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-semibold text-gray-800 text-lg">Softens Naturally</h3>
                                    <p className="text-sm text-gray-500">Enjoy soft, smooth laundry without the need for additional fabric softener. One wash, complete care</p>
                                </div>
                            </motion.article>

                            {/* Card 3 */}
                            <motion.article
                                initial={{ y: 10, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className="bg-[#FFFCF4] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-8 px-6 sm:px-8 flex flex-col gap-6">
                                <div className="w-24 h-24 rounded-md flex items-center justify-center">
                                    <Image
                                        src="/Icon.png"
                                        alt="Point 3 Icon"
                                        width={96}
                                        height={96}
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-semibold text-gray-800 text-lg">Delicately Fragranced</h3>
                                    <p className="text-sm text-gray-500">A gentle, non-overpowering scent that stays fresh without clashing with your personal perfume</p>
                                </div>
                            </motion.article>
                        </div>
                    </div>
                </section>
            </main>
            <AboutUs2 />
        </>
    )
}