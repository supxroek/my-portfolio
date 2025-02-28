import { faPlay, faCube, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FCIBold } from "./fonts";
import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <main className="mx-auto my-10 max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Navbar */}
      <nav className="flex justify-between sticky top-10">
        <a href="/">
          <FontAwesomeIcon icon={faCube} className="w-6 h-6" />
        </a>

        <div className="flex space-x-4">
          <a>Portfolio</a>
          <a href="#">
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </a>
        </div>
      </nav>

      {/* ABOUT ME */}
      <main className="flex flex-col lg:flex-row h-screen justify-between">
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="font-semibold text-xl sm:text-2xl mb-2 text-[#FF0000]">
              Hi, my name is
            </h1>
            <h1 className="font-semibold text-3xl sm:text-4xl lg:text-7xl">Suparoek Manajit</h1>
            <h1 className="font-bold text-lg sm:text-xl lg:text-3xl my-6 text-[#aaaa] ">
              Software Developer
            </h1>

            <div className="flex ml-2 space-x-4">
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

            <div className="mt-8">
              <a href="/resume.pdf" target="_blank" className="animate-pulse">
                <span className="px-4 py-2 sm:px-5 sm:py-3 inline-flex border-1 items-center border-[#FF0000]  rounded-lg shadow-md transition duration-1000 bg-transparent hover:bg-[#FF0000]">
                  View Resume
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="w-6 h-6 animate-pulse ml-3"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end mt-10 lg:mt-0">
          <img
            src="/rocket2.png"
            className="rounded-lg shadow-lg w-32 sm:w-40 md:w-60 lg:w-80 h-auto"
          />
        </div>
      </main>

      {/* PASSION */}
      <main className="flex h-screen items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="inline-block">
          <h1
            className={`${FCIBold.className} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center max-w-6xl`}
          >
            I'm passionate about software development and aim to improve my
            skills. I create efficient applications that solve problems and meet
            user needs.
          </h1>
        </div>
      </main>

      {/* SKILLS */}
      <main className="grid grid-cols-1 lg:grid-cols-[80%_40%] h-screen justify-between px-2 sm:px-4 md:px-6 lg:px-8">
        <div>
          <h1 className="font-semibold text-sm mb-2 text-[#aaaa]">SKILLS</h1>
          <h1 className="font-semibold text-3xl text-[#FF0000]">My Skills</h1>
          <h1 className="font-bold text-xl sm:text-2xl mt-6 w-[80%]">
            I like to take responsibility to craft aesthetic user experience
            using modern frontend architecture.
          </h1>

          <h1 className="mt-10 text-[#aaaa]">Languages & Tools</h1>
          <div className="flex flex-wrap space-x-4 mt-2 p-2 items-center">
            <img src="/html.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img src="/css.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img src="/js.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img
              src="/nodejs.png"
              className="w-8 sm:w-10 h-8 sm:h-10 p-0.5 bg-gray-200 rounded-full"
            />
            <img src="/python.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img src="/c.png" className="w-10 sm:w-12 h-10 sm:h-12" />
            <img src="/c-plus.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img src="/c-sharp.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img src="/firebase.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img src="/dart.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img src="/java.png" className="w-8 sm:w-10 h-8 sm:h-10" />
          </div>

          <h1 className="mt-6 text-[#aaaa]">Frameworks & Libraries</h1>
          <div className="flex flex-wrap space-x-4 mt-2 p-2 items-center">
            <img src="/react.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img src="/tailwindcss.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img src="/vite.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img src="/nextjs.png" className="w-8 sm:w-10 h-8 sm:h-10" />
            <img src="/flutter.png" className="w-8 sm:w-10 h-8 sm:h-10" />
          </div>

          <div className="grid-cols-2 inline-grid">
            <div>
              <h1 className="mt-6 text-[#aaaa]">Databases</h1>
              <div className="flex flex-wrap space-x-4 mt-2 p-2 items-center">
                <img
                  src="/oracle.png"
                  className="w-8 sm:w-10 h-8 sm:h-10 p-0.5 bg-gray-200 rounded-full"
                />
                <img src="/postgresql.png" className="w-8 sm:w-10 h-8 sm:h-10" />
                <img src="/mongodb.png" className="w-8 sm:w-10 h-8 sm:h-10" />
              </div>
            </div>

            <div>
              <h1 className="mt-6 text-[#aaaa]">Others</h1>
              <div className="flex flex-wrap space-x-4 mt-2 p-2 items-center">
                <img src="/docker.png" className="w-8 sm:w-10 h-8 sm:h-10" />
                <img src="/git.png" className="w-8 sm:w-10 h-8 sm:h-10" />
                <img src="/figma.png" className="w-8 sm:w-10 h-8 sm:h-10" />
                <img src="/canva.png" className="w-8 sm:w-10 h-8 sm:h-10" />
                <img src="/microsoft-office.png" className="w-8 sm:w-10 h-8 sm:h-10" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center mt-10 lg:mt-0">
          <img
            src="/planet.png"
            className="rounded-lg shadow-lg w-32 sm:w-40 md:w-60 lg:w-100 h-auto"
          />
        </div>
      </main>

      {/* Attention */}
      <main className="flex h-screen items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="inline-block">
          <h1
            className={`${FCIBold.className} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center max-w-6xl`}
          >
            I have a strong obsession for attention to detail.
          </h1>
        </div>
      </main>

      {/* PROJECTS */}
      <main className="grid grid-cols-1 lg:grid-cols-[80%_40%] h-auto mb-[20%] justify-between px-2 sm:px-4 md:px-6 lg:px-8">
        <div>
          <h1 className="font-semibold text-sm mb-2 text-[#aaaa]">PROJECTS</h1>
          <h1 className="font-semibold text-3xl text-[#FF0000]">My Projects</h1>
          <h1 className="font-bold text-xl sm:text-2xl mt-6 w-[80%]">
            I have worked on several projects that have helped me to improve my
            skills and knowledge.
          </h1>

          <div className="flex flex-col space-y-4 mt-10">
            <div className="flex space-x-4 items-center">
              <img src="#" className="w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 rounded-lg" />
              <div>
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Project 1</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <img src="#" className="w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 rounded-lg" />
              <div>
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Project 2</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <img src="#" className="w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 rounded-lg" />
              <div>
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Project 3</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <img src="#" className="w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 rounded-lg" />
              <div>
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Project 4</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CONTACT */}
      <main className="flex flex-col lg:flex-row h-screen justify-between px-2 sm:px-4 md:px-6 lg:px-8">
        <div>
          <h1 className="font-semibold text-sm mb-2 text-[#aaaa]">CONTACT</h1>
          <h1 className="font-semibold text-3xl text-[#FF0000]">Contact Me</h1>
          <h1 className="font-bold text-xl sm:text-2xl mt-6 w-[80%]">
            I am open to new opportunities and collaborations. Feel free to
            contact me.
          </h1>
          <form className="mt-8 space-y-4 w-full lg:w-[50%]">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0000] focus:border-[#FF0000] sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0000] focus:border-[#FF0000] sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0000] focus:border-[#FF0000] sm:text-sm"
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
      </main>

      {/* Footer */}
      <footer className="flex flex-col mt-10 items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
        <p>&copy; 2023 Suparoek Manajit. All rights reserved.</p>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:text-amber-600 transition duration-300">
            Facebook
          </a>
          <a href="#" className="hover:text-amber-600 transition duration-300">
            Twitter
          </a>
          <a href="#" className="hover:text-amber-600 transition duration-300">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
