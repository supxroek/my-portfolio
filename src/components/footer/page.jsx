import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function page() {
  return (
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
  );
}
export default page