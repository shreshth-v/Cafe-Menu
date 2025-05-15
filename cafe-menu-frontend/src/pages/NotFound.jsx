import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="bg-gray-950 min-h-screen flex flex-col justify-center items-center text-white font-sans">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded flex items-center gap-2"
      >
        <FaHome />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
