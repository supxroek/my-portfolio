"use client";

import { motion } from "framer-motion";
import { FCIBold } from "@/app/fonts";
import AnimatedSpan from "../../components/animations/AnimatedSpan";

function page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <span className="flex-wrap space-x-4 items-center justify-center">
        <span
          className={`${FCIBold.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl`}
        >
          I have a
        </span>

        <AnimatedSpan text="strong" delay={0.5} />

        <span
          className={`${FCIBold.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl`}
        >
          obsession for attention to detail.
        </span>
      </span>
    </section>
  );
}

export default page;
