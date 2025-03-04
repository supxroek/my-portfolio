import { motion } from "framer-motion";

const MicroInteraction = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
};

export default MicroInteraction;
