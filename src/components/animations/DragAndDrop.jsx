import { motion } from "framer-motion";

const DragAndDrop = ({ children }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
      whileDrag={{ scale: 1.1 }}
    >
      {children}
    </motion.div>
  );
};

export default DragAndDrop;
