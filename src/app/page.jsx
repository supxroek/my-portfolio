'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FCIBold } from "@/app/fonts";
import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCube, faEnvelope, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Page() {

  const [text, setText] = useState('');
  const [currentText, setCurrentText] = useState('Software Developer');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping && text.length < currentText.length) {
        setText((prevText) => prevText + currentText[text.length]);
      } else if (!isTyping && text.length > 0) {
        setText((prevText) => prevText.slice(0, -1));
      } else if (text.length === currentText.length && isTyping) {
        setTimeout(() => setIsTyping(false), 3000); // หยุดรอ 3 วินาที
      } else if (text.length === 0 && !isTyping) {
        setTimeout(() => {
          setIsTyping(true);
          setCurrentText(currentText === "Software Developer" ? "UI/UX Designer" : "Software Developer");
        }, 3000); // หยุดรอ 3 วินาที
      }
    }, 150); // ความเร็วในการพิมพ์ดีด (150ms ต่ออักษร)

    return () => clearInterval(typingInterval);
  }, [text, isTyping, currentText]);

    return (
      <main className="mx-[8%] my-10 px-4 ">
        {/* Navbar */}
        <nav className="flex justify-between items-center">
          <a href="/">
            <FontAwesomeIcon icon={faCube} className="w-6 h-6" />
          </a>

          <div className="flex space-x-4">
            <a>Portfolio</a>
            <a>
              <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            </a>
          </div>
        </nav>

        {/* About Me */}
        <section className="grid h-screen mt-[10%]">
          <div className="grid items-center">
            <div>
              <motion.h1
                className="font-semibold text-[#FF0000] text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi, my name is
              </motion.h1>

              <motion.h1
                className="font-semibold mt-2 text-4xl md:text-5xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Suparoek Manajit
              </motion.h1>
              <motion.h1
                className="font-bold my-6  text-xl sm:text-2xl relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {text}
                <span className="cursor-blink">|</span>{" "}
                {/* เพิ่ม cursor กระพริบ */}
              </motion.h1>

              <motion.div
                className="flex ml-2 space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[faEnvelope, faGithub, faFacebook, faInstagram].map(
                  (icon, index) => (
                    <a key={index} href="#" target="_blank">
                      <FontAwesomeIcon
                        icon={icon}
                        className="w-6 h-6 transition-transform transform hover:scale-110 hover:text-[#FF0000]"
                      />
                    </a>
                  )
                )}
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <a href="/resume.pdf" target="_blank">
                  <motion.span
                    className="px-4 py-2 inline-flex border border-[#FF0000] rounded-lg shadow-md bg-transparent hover:bg-[#FF0000] transition duration-700"
                    whileHover={{ scale: 1.1 }}
                  >
                    View Resume
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="w-6 h-6 ml-3 animate-pulse"
                    />
                  </motion.span>
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="flex items-center justify-center sm:justify-end"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/rocket2.png"
              className="rounded-lg shadow-lg w-50 h-auto sm:w-80 md:w-96"
            />
          </motion.div>
        </section>

        {/* Passion */}
        <section className="flex h-screen items-center justify-center">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1
              className={`${FCIBold.className} text-center max-w-6xl font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              I'm passionate about software development and aim to improve my
              skills. I create efficient applications that solve problems and
              meet user needs.
            </h1>
          </motion.div>
        </section>

        {/* Skills */}
        <section className="grid h-screen-auto sm:overflow-hidden">
          <div className="grid sm:grid-cols-[80%_40%] sm:justify-between">
            <div className="grid">
              <motion.h1
                className="font-semibold text-sm mb-2 text-[#aaaa]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                SKILLS
              </motion.h1>
              <motion.h1
                className="font-semibold text-2xl text-[#FF0000] sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                My Skills
              </motion.h1>
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

              <motion.h1
                className="mt-10 text-[#aaaa]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Languages & Tools
              </motion.h1>
              <motion.div
                className="flex flex-wrap space-x-2 mt-2 p-2 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <img src="/html.png" className="w-8" />
                <img src="/css.png" className="w-8" />
                <img src="/js.png" className="w-8" />
                <img
                  src="/nodejs.png"
                  className="w-8 p-0.5 bg-gray-200 rounded-full"
                />
                <img src="/python.png" className="w-8" />
                <img src="/c.png" className="w-9" />
                <img src="/c-plus.png" className="w-8" />
                <img src="/c-sharp.png" className="w-8" />
                <img src="/firebase.png" className="w-8" />
                <img src="/dart.png" className="w-8" />
                <img src="/java.png" className="w-8" />
              </motion.div>

              <motion.h1
                className="mt-6 text-[#aaaa]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                Frameworks & Libraries
              </motion.h1>
              <motion.div
                className="flex flex-wrap space-x-2 mt-2 p-2 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <img src="/react.png" className="w-8" />
                <img src="/tailwindcss.png" className="w-8" />
                <img src="/vite.png" className="w-8" />
                <img src="/nextjs.png" className="w-8" />
                <img src="/flutter.png" className="w-8" />
              </motion.div>

              <div className="sm:flex gap-x-4">
                <div>
                  <motion.h1
                    className="mt-6 text-[#aaaa]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    viewport={{ once: true }}
                  >
                    Databases
                  </motion.h1>
                  <motion.div
                    className="flex flex-wrap space-x-2 mt-2 p-2 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src="/oracle.png"
                      className="w-8 p-0.5 bg-gray-200 rounded-full"
                    />
                    <img src="/postgresql.png" className="w-8" />
                    <img src="/mongodb.png" className="w-8" />
                  </motion.div>
                </div>

                <div>
                  <motion.h1
                    className="mt-6 text-[#aaaa]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    viewport={{ once: true }}
                  >
                    Others
                  </motion.h1>
                  <motion.div
                    className="flex flex-wrap space-x-2 mt-2 p-2 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    viewport={{ once: true }}
                  >
                    <img src="/docker.png" className="w-8" />
                    <img src="/git.png" className="w-8" />
                    <img src="/figma.png" className="w-8" />
                    <img src="/canva.png" className="w-8" />
                    <img src="/microsoft-office.png" className="w-8" />
                  </motion.div>
                </div>
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

        {/* Attention */}
        <section className="flex h-screen items-center justify-center">
          <span className="flex-wrap space-x-4 items-center justify-center">
            <span
              className={`${FCIBold.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl`}
            >
              I have a
            </span>

            <motion.span
              className="flex-wrap space-x-4 items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {["strong"].map((text, index) => (
                <motion.span
                  key={index}
                  className={`${FCIBold.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl cursor-pointer`}
                  initial={{ color: "#000" }}
                  whileInView={{ color: "#FF0000" }}
                  whileHover={{ color: "#000" }}
                  transition={{ delay: index * 0.5, duration: 1 }}
                  viewport={{ once: true }}
                >
                  {text.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ color: "#000" }}
                      whileInView={{ color: "#FF0000" }}
                      whileHover={{ color: "#000" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </motion.span>
            <span
              className={`${FCIBold.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl`}
            >
              obsession for attention to detail.
            </span>
          </span>
        </section>

        {/* Projects */}
        <section className="grid grid-cols h-screen-auto mb-[60%]">
          <div>
            <motion.h1
              className="font-semibold text-sm mb-2 text-[#aaaa]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              PROJECTS
            </motion.h1>
            <motion.h1
              className="font-semibold text-2xl text-[#FF0000] sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              My Projects
            </motion.h1>
            <motion.h1
              className="font-bold text-sm sm:text-xl mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I have worked on several projects that have helped me to improve
              my skills and knowledge.
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 mt-10 gap-x-8 gap-y-20 sm:grid-cols-2">
            <motion.div
              className="space-y-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-xl h-auto h-max-50 aspect-3/2 rounded-lg"
              />
              <div>
                <h1 className="font-bold text-lg sm:text-xl">Project 1</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-xl h-auto h-max-50 aspect-3/2 rounded-lg"
              />
              <div>
                <h1 className="font-bold text-lg sm:text-xl">Project 2</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-xl h-auto h-max-50 aspect-3/2 rounded-lg"
              />
              <div>
                <h1 className="font-bold text-lg sm:text-xl">Project 3</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-xl h-auto h-max-50 aspect-3/2 rounded-lg"
              />
              <div>
                <h1 className="font-bold text-lg sm:text-xl">Project 4</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section className="grid h-screen">
          <div>
            <h1 className="font-semibold text-sm mb-2 text-[#aaaa]">CONTACT</h1>
            <h1 className="font-semibold text-2xl text-[#FF0000] sm:text-4xl">
              Contact Me
            </h1>
            <h1 className="font-bold text-sm sm:text-xl mt-6">
              I am open to new opportunities and collaborations. Feel free to
              contact me.
            </h1>

            <form className="mt-8 space-y-4 w-full sm:items-center sm:justify-center sm:px-[10%] md:px-[20%] lg:px-[35%]">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0000] focus:border-[#FF0000]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0000] focus:border-[#FF0000]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0000] focus:border-[#FF0000]"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#FF0000] hover:bg-[#e60000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF0000]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="gird h-screen-auto">
          <div>
            <p className="text-center">
              &copy; 2025 Suparoek Manajit. All rights reserved.
            </p>
          </div>
          <div className="flex mt-2 space-x-4 items-center justify-center">
            <a href="#" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-6 h-6 hover:text-[#FF0000]"
              />
            </a>

            <a href="#" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-6 h-6 hover:text-[#FF0000]"
              />
            </a>

            <a href="#" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-6 h-6 hover:text-[#FF0000]"
              />
            </a>

            <a href="#" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-6 hover:text-[#FF0000]"
              />
            </a>
          </div>
        </footer>
      </main>
    );
  }