"use client";
import { Button } from "@/components/ui/button"
import AboutUs from "./AboutUs/page";

export default function Home() {
  return (
    <><main
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/BG.png")' }}
    >
      <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-8 text-center">
        <section className="space-y-4 sm:space-y-6 max-w-4xl">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-lato" style={{ color: "#505050" }}>
            Nature's Beauty Without Worry
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#505050] max-w-2xl font-poppins">
            Organic clean. No harsh stuff. Just pure, powerful washing.
          </p>
        </section>

        <Button
          className="rounded-3xl px-6 sm:px-6 py-4 sm:py-4 text-sm sm:text-base font-semibold transition cursor-pointer text-white"
          style={{ backgroundColor: '#DCA18B' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c98a75'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DCA18B'}
          aria-label="Buy our soap products"
        >
          Buy Our Product
        </Button>
      </div>
    </main>
    <AboutUs /></>
  );
}