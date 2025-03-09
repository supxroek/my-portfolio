"use client";

import { motion } from "framer-motion";
import AnimatedSpan from "@/components/animations/AnimatedSpan";

function Page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <motion.div
        className="inline-block space-x-4 justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <AnimatedSpan
          text="I'm passionate about software development and aim to improve my skills. I create efficient applications that solve problems and meet user needs."
          _delay={0.2}
          _color={"#ffffff"}
        />
      </motion.div>
    </section>
  );
}

export default Page;
