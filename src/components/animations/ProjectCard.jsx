import { motion } from "framer-motion";

const ProjectCard = ({ imgSrc, title, description, delay }) => (
  <motion.div
    className="space-y-4 items-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
    viewport={{ once: true }}
  >
    <img src={imgSrc} className="w-xl h-auto h-max-50 aspect-3/2 rounded-lg" />
    <div>
      <h1 className="font-bold text-lg sm:text-xl">{title}</h1>
      <p className="text-[#aaaa]">{description}</p>
    </div>
  </motion.div>
);

export default ProjectCard;
