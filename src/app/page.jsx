import Navbar from "@/components/navbar/page";
import AboutMe from "@/sections/about-me/page";
import Passion from "@/sections/passion/page";
import Skills from "@/sections/skills/page";
import Attention from "@/sections/attention/page";
import Projects from "@/sections/projects/page";
import Contact from "@/sections/contact/page";
import Footer from "@/components/footer/page";

export default function Page() {
  return (
    <main className="mx-[8%] my-10 px-4 ">
      <Navbar />
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="passion">
        <Passion />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="attention">
        <Attention />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
