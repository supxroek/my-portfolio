import { motion } from "framer-motion";

const TypingText = ({ text }) => {
  return (
    <motion.h1
      className="font-bold my-6 text-xl sm:text-2xl relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      {text}
      <span className="cursor-blink">|</span>
    </motion.h1>
  );
};

export default TypingText;
