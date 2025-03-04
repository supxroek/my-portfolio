import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, delay = 0 }) => (
  <>
    <motion.h1
      className="font-semibold text-sm mb-2 text-[#aaaa]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h1>
    <motion.h1
      className="font-semibold text-2xl text-[#FF0000] sm:text-4xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delay + 0.2 }}
      viewport={{ once: true }}
    >
      {subtitle}
    </motion.h1>
  </>
);

export default SectionTitle;
