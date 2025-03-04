"use client";

import SectionTitle from "../../components/animations/SectionTitle";
import SkillSection from "../../components/animations/SkillSection";
import { motion } from "framer-motion";

function page() {
  const languagesAndTools = [
    { src: "/html.png", className: "w-8" },
    { src: "/css.png", className: "w-8" },
    { src: "/js.png", className: "w-8" },
    { src: "/nodejs.png", className: "w-8 p-0.5 bg-gray-200 rounded-full" },
    { src: "/python.png", className: "w-8" },
    { src: "/c.png", className: "w-9" },
    { src: "/c-plus.png", className: "w-8" },
    { src: "/c-sharp.png", className: "w-8" },
    { src: "/firebase.png", className: "w-8" },
    { src: "/dart.png", className: "w-8" },
    { src: "/java.png", className: "w-8" },
  ];

  const frameworksAndLibraries = [
    { src: "/react.png", className: "w-8" },
    { src: "/tailwindcss.png", className: "w-8" },
    { src: "/vite.png", className: "w-8" },
    { src: "/nextjs.png", className: "w-8" },
    { src: "/flutter.png", className: "w-8" },
  ];

  const databases = [
    { src: "/oracle.png", className: "w-8 p-0.5 bg-gray-200 rounded-full" },
    { src: "/postgresql.png", className: "w-8" },
    { src: "/mongodb.png", className: "w-8" },
  ];

  const others = [
    { src: "/docker.png", className: "w-8" },
    { src: "/git.png", className: "w-8" },
    { src: "/figma.png", className: "w-8" },
    { src: "/canva.png", className: "w-8" },
    { src: "/microsoft-office.png", className: "w-8" },
  ];

  return (
    <section className="grid h-screen-auto sm:overflow-hidden">
      <div className="grid sm:grid-cols-[80%_40%] sm:justify-between">
        <div className="grid">
          <SectionTitle title="SKILLS" subtitle="My Skills" />
          <motion.h1
            className="font-bold text-sm sm:text-xl mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I like to take responsibility to craft aesthetic user experience
            using modern frontend architecture.
          </motion.h1>
          <SkillSection title="Languages & Tools" skills={languagesAndTools} />
          <SkillSection
            title="Frameworks & Libraries"
            skills={frameworksAndLibraries}
          />
          <div className="sm:flex gap-x-4">
            <SkillSection title="Databases" skills={databases} />
            <SkillSection title="Others" skills={others} />
          </div>
        </div>
        <motion.div
          className="flex mt-50 items-center justify-center sm:items-start sm:justify-start sm:mt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/planet.png"
            className="rounded-lg shadow-lg w-50 h-auto sm:w-80 lg:w-128"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default page;
