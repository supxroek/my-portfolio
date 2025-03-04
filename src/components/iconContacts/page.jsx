import {
  faFacebook,
  faGithub,
  faInstagram,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function page() {
  return (
    <div className="flex mt-2 space-x-4 items-center">
      <a href="mailto:suparoek.sm@gmail.com" target="_blank">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="w-6 h-6 hover:text-[#FF0000]"
        />
      </a>

      <a href="https://github.com/supxroek" target="_blank">
        <FontAwesomeIcon
          icon={faGithub}
          className="w-6 h-6 hover:text-[#FF0000]"
        />
      </a>

      <a
        href="https://www.instagram.com/s.supxroek?igsh=czg3dXo1b3RkNjB5"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="w-6 h-6 hover:text-[#FF0000]"
        />
      </a>

      <a
        href="https://x.com/_supxroek?t=e1x0lGZKS2RsyLvsSYaqDA&s=09"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faXTwitter}
          className="w-6 h-6 hover:text-[#FF0000]"
        />
      </a>

      <a href="https://www.threads.net/@s.supxroek" target="_blank">
        <FontAwesomeIcon
          icon={faThreads}
          className="w-6 h-6 hover:text-[#FF0000]"
        />
      </a>
    </div>
  );
}

export default page;
