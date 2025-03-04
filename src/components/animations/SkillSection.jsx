import { motion } from "framer-motion";

const SkillSection = ({ title, skills }) => (
  <>
    <motion.h1
      className="mt-6 text-[#aaaa]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h1>
    <motion.div
      className="flex flex-wrap space-x-2 mt-2 p-2 items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      viewport={{ once: true }}
    >
      {skills.map((skill, index) => (
        <img key={index} src={skill.src} className={skill.className} />
      ))}
    </motion.div>
  </>
);

export default SkillSection;
