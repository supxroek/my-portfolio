import { faPlay, faCube, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FCIBold } from "./fonts";
import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <main className="mx-auto my-10 px-4">
      {/* Navbar */}
      <nav className="flex justify-between sticky top-10 ">
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

      {/* ABOUT ME */}
      <section className="grid h-screen mt-10">
        <div className="grid items-center">
          <div>
            <h1 className="font-semibold text-[#FF0000] text-sm">
              Hi, my name is
            </h1>
            <h1 className="font-semibold mt-2 text-4xl md:text-5xl lg:text-7xl">
              Suparoek Manajit
            </h1>
            <h1 className="font-bold my-6 text-[#aaaa] text-xl sm:text-2xl">
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
                <span className="px-4 py-2 inline-flex border-1 items-center border-[#FF0000]  rounded-lg shadow-md transition duration-700 bg-transparent hover:bg-[#FF0000]">
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

        <div className="flex items-center justify-center sm:justify-end">
          <img
            src="/rocket2.png"
            className="rounded-lg shadow-lg w-50 h-auto sm:w-80 md:w-96"
          />
        </div>
      </section>

      {/* PASSION */}
      <section className="flex h-screen items-center justify-center">
        <div className="inline-block">
          <h1
            className={`${FCIBold.className} text-center max-w-6xl font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
          >
            I'm passionate about software development and aim to improve my
            skills. I create efficient applications that solve problems and meet
            user needs.
          </h1>
        </div>
      </section>

      {/* SKILLS */}
      <section className="grid h-screen-auto">
        <div className="grid sm:grid-cols-[70%_30%] sm:max-w-full sm:justify-between">
          <div className="grid">
            <h1 className="font-semibold text-sm mb-2 text-[#aaaa]">SKILLS</h1>
            <h1 className="font-semibold text-2xl text-[#FF0000] sm:text-4xl">
              My Skills
            </h1>
            <h1 className="font-bold text-sm sm:text-xl mt-6">
              I like to take responsibility to craft aesthetic user experience
              using modern frontend architecture.
            </h1>

            <h1 className="mt-10 text-[#aaaa]">Languages & Tools</h1>
            <div className="flex flex-wrap space-x-2 mt-2 p-2 items-center">
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
            </div>

            <h1 className="mt-6 text-[#aaaa]">Frameworks & Libraries</h1>
            <div className="flex flex-wrap space-x-2 mt-2 p-2 items-center">
              <img src="/react.png" className="w-8" />
              <img src="/tailwindcss.png" className="w-8" />
              <img src="/vite.png" className="w-8" />
              <img src="/nextjs.png" className="w-8" />
              <img src="/flutter.png" className="w-8" />
            </div>

            <div className="sm:flex gap-x-4">
              <div>
                <h1 className="mt-6 text-[#aaaa]">Databases</h1>
                <div className="flex flex-wrap space-x-2 mt-2 p-2 items-center">
                  <img
                    src="/oracle.png"
                    className="w-8 p-0.5 bg-gray-200 rounded-full"
                  />
                  <img src="/postgresql.png" className="w-8" />
                  <img src="/mongodb.png" className="w-8" />
                </div>
              </div>

              <div>
                <h1 className="mt-6 text-[#aaaa]">Others</h1>
                <div className="flex flex-wrap space-x-2 mt-2 p-2 items-center">
                  <img src="/docker.png" className="w-8" />
                  <img src="/git.png" className="w-8" />
                  <img src="/figma.png" className="w-8" />
                  <img src="/canva.png" className="w-8" />
                  <img src="/microsoft-office.png" className="w-8" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-50 items-center justify-center sm:items-start sm:justify-start sm:mt-0">
            <img
              src="/planet.png"
              className="rounded-lg shadow-lg w-50 h-auto sm:w-80 lg:w-96"
            />
          </div>
        </div>
      </section>

      {/* Attention */}
      <section className="flex h-screen items-center justify-center">
        <div className="inline-block">
          <h1
            className={`${FCIBold.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl`}
          >
            I have a strong obsession for attention to detail.
          </h1>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="grid h-screen-auto mb-[60%]">
        <div>
          <h1 className="font-semibold text-sm mb-2 text-[#aaaa]">PROJECTS</h1>
          <h1 className="font-semibold text-2xl text-[#FF0000] sm:text-4xl">
            My Projects
          </h1>
          <h1 className="font-bold text-sm sm:text-xl mt-6">
            I have worked on several projects that have helped me to improve my
            skills and knowledge.
          </h1>

          <div className="grid space-y-8 mt-10">
            <div className="grid space-y-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-xl h-auto h-max-50 rounded-lg"
              />
              <div>
                <h1 className="font-bold text-lg sm:text-xl">Project 1</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="grid space-y-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-xl h-auto h-max-50 rounded-lg"
              />
              <div>
                <h1 className="font-bold text-lg sm:text-xl">Project 2</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="grid space-y-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-xl h-auto h-max-50 rounded-lg"
              />
              <div>
                <h1 className="font-bold text-lg sm:text-xl">Project 3</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="grid space-y-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-xl h-auto h-max-50 rounded-lg"
              />
              <div>
                <h1 className="font-bold text-lg sm:text-xl">Project 4</h1>
                <p className="text-[#aaaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
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
      <section className="gird h-screen-auto">
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
      </section>
    </main>
  );
}
