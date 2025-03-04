import { motion } from "framer-motion";

const SectionDescription = ({ text, delay = 0 }) => (
  <motion.h1
    className="font-bold text-sm sm:text-xl mt-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
    viewport={{ once: true }}
  >
    {text}
  </motion.h1>
);

export default SectionDescription;
