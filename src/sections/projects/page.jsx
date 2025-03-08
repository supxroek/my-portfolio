"use client";

import SectionTitle from "../../components/animations/SectionTitle";
import ProjectCard from "../../components/animations/ProjectCard";
import SectionDescription from "../../components/animations/SectionDescription";

function page() {
  const projects = [
    {
      imgSrc: "/myProject-1.png",
      title: "Music player app",
      description:
        "Music player app built with Java Netbeans. It has a simple and user-friendly interface.",
      link_url: "https://github.com/supxroek/Java-Desktop-Application",
      delay: 0.6,
    },
    {
      imgSrc: "/myProject-3.png",
      title: "Book a meeting room",
      description:
        "A web application that allows users to book meeting rooms. It includes a database connection, API calls, a login system, a registration system, user management, and the ability to add, delete, and edit data. The front end is built with React, Tailwind CSS, and Daisy UI, while the back end utilizes Node.js, Express, and Nodemon.",
      link_url: "https://github.com/supxroek/Mini-Project",
      delay: 0.8,
    },
    {
      imgSrc: "/myProject-4.png",
      title: "To-do list",
      description: "A simple to-do list app built with React.",
      link_url: "https://github.com/supxroek/multi-container-app",
      delay: 1,
    },
    {
      imgSrc: "/myProject-2.png",
      title: "Packet Tracer and Hardware",
      description:
        "Network design on Cisco packet tracer program and hardware.",
      link_url: "https://github.com/supxroek/Packet-Tracer-and-Hardware",
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
