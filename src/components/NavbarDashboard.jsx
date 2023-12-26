import { Dropdown } from "flowbite-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../config/Redux/Action/adminAction";
import { logoutDokter } from "../config/Redux/Action/dokterAction";

const NavbarDashboard = () => {
  const { admin } = useSelector((state) => state.adminReducer);
  const { dokter } = useSelector((state) => state.dokterReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogoutAdmin = () => {
    dispatch(logoutAdmin(token, nav));
  };

  const handleLogoutDokter = () => {
    dispatch(logoutDokter(token, nav));
  };

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

      <Dropdown
        renderTrigger={() => (
          <div className="flex items-center">
            <div className="flex flex-col justify-center items-end mr-2">
              <h3 className=" font-bold text-black">
                {admin.username ? admin.username : dokter.username}
              </h3>
              <span className=" text-[12px] text-black">
                {admin.role ? admin.role : dokter.role}
              </span>
            </div>
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="user"
              className="w-10 h-10 rounded-full"
            />
          </div>
        )}
        dismissOnClick={false}
        className="bg-red-500"
      >
        <Dropdown.Item
          className="text-white hover:text-black"
          onClick={
            admin.role === "admin"
              ? () => handleLogoutAdmin()
              : () => handleLogoutDokter()
          }
        >
          Logout
        </Dropdown.Item>
      </Dropdown>
    </nav>
  );
};

export default NavbarDashboard;
