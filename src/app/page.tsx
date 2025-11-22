"use client";
import { Button } from "@/components/ui/button"
import AboutUs from "./AboutUs/page";
import ProductPage from "./Product/page";
import PartnerPage from "./Partners/page";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <main
        id="Home"
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/BG-NEW.png")' }}
      >
        <div
          className="relative flex min-h-screen flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-8 text-center bg-black/20"
        >
          <section ref={ref} className="space-y-4 sm:space-y-6 max-w-4xl">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-8xl font-lato text-white">
                Equality in Quality
              </h1>
            </motion.div>

            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="mx-auto font-medium items-center justify-center text-sm sm:text-base lg:text-2xl text-white/70 drop-shadow-2xl max-w-2xl font-poppins">
                Everyone deserves a high quality product
              </p>
            </motion.div>
          </section>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Link
              href="https://shopee.co.id/housessentials.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="rounded-3xl px-6 sm:px-6 py-4 sm:py-4 text-sm sm:text-base font-semibold transition cursor-pointer text-white"
                style={{ backgroundColor: '#DCA18B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c98a75'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DCA18B'}
                aria-label="Buy our soap products"
              >
                Buy Our Product
              </Button>
            </Link>
          </motion.div>

        </div>
      </main>
      <AboutUs />
      <ProductPage />
      <PartnerPage />
    </>
  );
}