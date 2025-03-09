import { FCIBold } from "@/app/fonts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSpan = ({ text, _delay, _color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.span
      ref={ref}
      className={`${FCIBold.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl cursor-pointer`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, _delay }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ color: "#333333" }}
          animate={isInView ? { color: `${_color}` } : { color: "#333333" }}
          transition={{ delay: i * `${_delay}` * 0.3, duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedSpan;
