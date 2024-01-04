import { Dropdown } from "flowbite-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../config/Redux/Action/adminAction";
import { logoutDokter } from "../config/Redux/Action/dokterAction";
import { FaAngleDown } from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";

const NavbarDashboard = ({ isSidebarOpen, setSidebarOpen }) => {
  const { admin } = useSelector((state) => state.adminReducer);
  const { dokter } = useSelector((state) => state.dokterReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogoutAdmin = () => {
    dispatch(logoutAdmin(token, nav));
  };

  const handleLogoutDokter = () => {
    dispatch(logoutDokter(token, nav));
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 w-full h-[5rem] shadow-md">
      <div className="flex items-center">
        <GiHamburgerMenu
          size={20}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="cursor-pointer"
        />
        <Link to="/" className="ml-5 font-bold text-gray-800">
          Home
        </Link>
        <Link to="/" className="ml-3 font-bold text-gray-800">
          Contact
        </Link>
      </div>

      <div className="flex items-center">
        <Dropdown
          renderTrigger={() => (
            <div className="flex items-center cursor-pointer">
              <div className="flex flex-col justify-center items-end">
                <h3 className=" font-bold text-black">
                  {admin.username ? admin.username : dokter.username}
                </h3>
                <span className=" text-[12px] text-black">
                  {admin.role ? admin.role : dokter.role}
                </span>
              </div>
              <FaAngleDown className="text-black mr-2 ml-1" />
            </div>
          )}
          dismissOnClick={false}
          className="flex flex-col items-center py-3 px-5"
        >
          <button
            className="flex items-center bg-red-500 hover:bg-red-600 p-2 px-3 text-white rounded-md w-full"
            onClick={
              role === "admin"
                ? () => handleLogoutAdmin()
                : () => handleLogoutDokter()
            }
          >
            <HiLogout className="mr-2" />
            Logout
          </button>
        </Dropdown>

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
