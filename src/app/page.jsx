// Code: Main page component
import Navbar from "../components/nav/page";
import AboutMe from "../sections/about-me/page";
import Passion from "../sections/passion/page";
import Skill from "../sections/skills/page"; 
import Attention from "../sections/attention/page";
import Project from "../sections/projects/page";
import Contact from "../sections/contact/page";
import Footer from "../components/footer/page";

export default function Page() {
  return (
    <main className="mx-[8%] my-10 px-4 ">
      <Navbar />
      <AboutMe />
      <Passion />
      <Skill />
      <Attention />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
