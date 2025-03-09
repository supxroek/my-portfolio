"use client";

import { motion } from "framer-motion";
import { FCIBold } from "@/app/fonts";
import AnimatedSpan from "../../components/animations/AnimatedSpan";

function page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <motion.div
        className="inline-block space-x-4 justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="flex-wrap space-x-4 items-center justify-center">
          <span
            className={`${FCIBold.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl`}
          >
            I have a
          </span>

          <AnimatedSpan text="strong" _delay={0.5} _color={"#ff0000"} />

          <span
            className={`${FCIBold.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl`}
          >
            obsession for attention to detail.
          </span>
        </span>
      </motion.div>
    </section>
  );
}

export default page;
