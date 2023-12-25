import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavbarDashboard = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 w-full h-[5rem] shadow-md">
      <div className="flex items-center">
        <GiHamburgerMenu size={20} />
        <Link to="/" className="ml-5 font-bold text-gray-800">
          Home
        </Link>
        <Link to="/" className="ml-3 font-bold text-gray-800">
          Contact
        </Link>
      </div>

      <div className="flex items-center">
        <h3 className="mr-5 font-bold text-gray-800">Admin</h3>
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default NavbarDashboard;
