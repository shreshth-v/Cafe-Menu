import { Link } from "react-router-dom";
import { MdDashboard, MdAddBox } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 flex justify-between items-center shadow-lg font-sans">
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className="text-white font-semibold text-lg flex items-center space-x-2 hover:text-blue-300"
        >
          <MdDashboard size={24} />
          <span>Menu Dashboard</span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          to="/add-item"
          className="text-white font-semibold text-lg flex items-center space-x-2 hover:text-blue-300"
        >
          <MdAddBox size={24} />
          <span>Add New Item</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
