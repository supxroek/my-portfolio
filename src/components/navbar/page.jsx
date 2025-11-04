"use client";

import {
  faBars,
  faCube,
  faDiagramProject,
  faHandPeace,
  faHeart,
  faMapPin,
  faMeteor,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center sticky top-6 z-[100] backdrop-blur-xl bg-white/5 px-6 py-4 rounded-full border border-white/20 shadow-2xl mx-auto max-w-4xl">
        <a
          href="/"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FontAwesomeIcon
            icon={faCube}
            className="w-6 h-6 text-[#FF0000] drop-shadow-glow"
          />
        </a>

        <div className="flex space-x-6 items-center">
          <a
            onClick={() => scrollToSection("portfolio")}
            className="hover:text-[#FF0000] transition-all duration-300 cursor-pointer font-medium hidden md:block"
          >
            Portfolio
          </a>
          <button
            onClick={toggleMenu}
            className="hover:scale-110 transition-transform duration-300 cursor-pointer p-2 hover:bg-white/10 rounded-full"
          >
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="w-5 h-5"
            />
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-gradient-to-br from-black/30 via-gray-900/20 to-black/30 backdrop-blur-2xl transition-all duration-700 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } z-[9999]`}
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 relative px-8">
          <button
            onClick={toggleMenu}
            className="absolute top-10 right-10 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:rotate-90 hover:scale-110"
          >
            <FontAwesomeIcon icon={faTimes} className="w-7 h-7 text-white/90" />
          </button>

          <a
            onClick={() => scrollToSection("aboutme")}
            className="group flex items-center gap-5 px-10 py-5 text-white text-2xl transition-all duration-300 hover:cursor-pointer rounded-3xl hover:bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/20 min-w-[320px] hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <FontAwesomeIcon
              icon={faMeteor}
              className="w-7 h-7 text-blue-400 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
            />
            <span className="font-semibold tracking-wide group-hover:translate-x-3 transition-transform duration-300">
              About Me
            </span>
          </a>

          <a
            onClick={() => scrollToSection("passion")}
            className="group flex items-center gap-5 px-10 py-5 text-white text-2xl transition-all duration-300 hover:cursor-pointer rounded-3xl hover:bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/20 min-w-[320px] hover:shadow-2xl hover:shadow-pink-500/20"
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="w-7 h-7 text-pink-400 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
            />
            <span className="font-semibold tracking-wide group-hover:translate-x-3 transition-transform duration-300">
              Passion
            </span>
          </a>

          <a
            onClick={() => scrollToSection("skills")}
            className="group flex items-center gap-5 px-10 py-5 text-white text-2xl transition-all duration-300 hover:cursor-pointer rounded-3xl hover:bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/20 min-w-[320px] hover:shadow-2xl hover:shadow-yellow-500/20"
          >
            <FontAwesomeIcon
              icon={faStar}
              className="w-7 h-7 text-yellow-400 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
            />
            <span className="font-semibold tracking-wide group-hover:translate-x-3 transition-transform duration-300">
              Skills
            </span>
          </a>

          <a
            onClick={() => scrollToSection("attention")}
            className="group flex items-center gap-5 px-10 py-5 text-white text-2xl transition-all duration-300 hover:cursor-pointer rounded-3xl hover:bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/20 min-w-[320px] hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <FontAwesomeIcon
              icon={faHandPeace}
              className="w-7 h-7 text-purple-400 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
            />
            <span className="font-semibold tracking-wide group-hover:translate-x-3 transition-transform duration-300">
              Attention
            </span>
          </a>

          <a
            onClick={() => scrollToSection("projects")}
            className="group flex items-center gap-5 px-10 py-5 text-white text-2xl transition-all duration-300 hover:cursor-pointer rounded-3xl hover:bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/20 min-w-[320px] hover:shadow-2xl hover:shadow-green-500/20"
          >
            <FontAwesomeIcon
              icon={faDiagramProject}
              className="w-7 h-7 text-green-400 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
            />
            <span className="font-semibold tracking-wide group-hover:translate-x-3 transition-transform duration-300">
              Projects
            </span>
          </a>

          <a
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-5 px-10 py-5 text-white text-2xl transition-all duration-300 hover:cursor-pointer rounded-3xl hover:bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/20 min-w-[320px] hover:shadow-2xl hover:shadow-red-500/20"
          >
            <FontAwesomeIcon
              icon={faMapPin}
              className="w-7 h-7 text-red-400 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
            />
            <span className="font-semibold tracking-wide group-hover:translate-x-3 transition-transform duration-300">
              Contact
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default page;
