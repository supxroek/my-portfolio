"use client";

import SectionTitle from "../../components/animations/SectionTitle";
import ProjectCard from "../../components/animations/ProjectCard";
import SectionDescription from "../../components/animations/SectionDescription";

function page() {
  const projects = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      delay: 0.6,
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      delay: 0.8,
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      delay: 1,
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      delay: 1.2,
    },
  ];

  return (
    <section className="grid grid-cols h-screen-auto mb-[60%]">
      <div>
        <SectionTitle title="PROJECTS" subtitle="My Projects" />
        <SectionDescription
          text="I have worked on several projects that have helped me to improve my skills and knowledge."
          delay={0.4}
        />
      </div>

      <div className="grid grid-cols-1 mt-10 gap-x-8 gap-y-20 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default page;
