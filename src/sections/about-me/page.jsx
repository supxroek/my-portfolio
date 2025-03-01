import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function page() {
  return (
    <section className="grid h-screen mt-[10%]">
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
  );
}
export default page