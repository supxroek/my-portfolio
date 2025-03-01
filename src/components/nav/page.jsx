import { faBars, faCube } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function page() { // Ensure the component name is unique
  return (
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
  );
}
export default page;
