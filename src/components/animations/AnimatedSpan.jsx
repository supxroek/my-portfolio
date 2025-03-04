import { FCIBold } from "@/app/fonts";
import { motion } from "framer-motion";

const AnimatedSpan = ({ text, delay = 0 }) => (
  <motion.span
    className={`${FCIBold.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl cursor-pointer`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay }}
    viewport={{ once: true }}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ color: "#000" }}
        whileInView={{ color: "#FF0000" }}
        whileHover={{ color: "#000" }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
);

export default AnimatedSpan;
