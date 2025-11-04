"use client";

import { motion } from "framer-motion";

export default function SectionDivider({
  gradient = "from-red-500 to-purple-500",
}) {
  return (
    <div className="relative w-full h-24 overflow-hidden my-16">
      {/* Animated gradient line */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Particle effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: 0,
              opacity: 0,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 50 - 25],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className={`w-20 h-20 rounded-full bg-gradient-to-r ${gradient} blur-xl`}
        />
      </motion.div>
    </div>
  );
}
