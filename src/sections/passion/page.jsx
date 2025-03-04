"use client";

import { motion } from "framer-motion";
import { FCIBold } from "@/app/fonts";

function page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <motion.div
        className="inline-block"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1
          className={`${FCIBold.className} text-center max-w-6xl font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
        >
          I'm passionate about software development and aim to improve my
          skills. I create efficient applications that solve problems and meet
          user needs.
        </h1>
      </motion.div>
    </section>
  );
}
export default page;
