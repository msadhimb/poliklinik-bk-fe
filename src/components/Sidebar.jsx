import SidebarItem from "./SidebarItems";
import { MdSpaceDashboard } from "react-icons/md";
import {
  FaHospital,
  FaNotesMedical,
  FaPills,
  FaStethoscope,
  FaUser,
  FaUserInjured,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import udinus from "../assets/logo/udinus.png";
import NavbarDashboard from "./NavbarDashboard";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { CiMedicalClipboard } from "react-icons/ci";
import { useEffect, useState } from "react";
import { getAdmin } from "../config/Redux/Action/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { getDokter } from "../config/Redux/Action/dokterAction";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

const Sidebars = () => {
  const pathName = useLocation().pathname;
  const { id } = useParams();
  const { admin, isLogin } = useSelector((state) => state.adminReducer);
  const { dokter, isLoginDokter } = useSelector((state) => state.dokterReducer);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (role === "admin") {
      if (!token || id === undefined) {
        dispatch(getAdmin(token));
        if (isLogin) {
          nav("/" + admin.id);
        }
      } else {
        dispatch(getAdmin(token));
      }
    }
  }, [dispatch, id, isLogin, nav, token, admin.id, role]);

  useEffect(() => {
    if (role === "dokter") {
      if (!token || id === undefined) {
        dispatch(getDokter(token));
        if (isLoginDokter) {
          nav("/" + dokter.id);
        }
      } else {
        dispatch(getDokter(token));
      }
    }
  }, [dispatch, id, isLoginDokter, nav, token, dokter.id, role]);

  useEffect(() => {
    if (!admin || !dokter) {
      window.location.href = "/login";
    }
  }, [admin, dokter]);

  return (
    <>
      <ToastContainer />
      <div className="flex h-screen">
        <motion.nav
          className={`sidebar bg-[#092635] w-fit p-2 h-screen`}
          initial={{ width: "auto" }}
          animate={isSidebarOpen ? { width: "auto" } : { width: 0, padding: 0 }}
        >
          <div className="flex flex-row items-center justify-start p-4">
            <img src={udinus} alt="udinus" className="w-10 h-10" />
            <h1 className="ml-3 text-white font-bold">Poliklinik BK</h1>
          </div>
          <hr className="border-[#5C8374]" />
          <ul className="flex flex-col p-2">
            {role === "admin" && (
              <>
                <SidebarItem
                  icons={<MdSpaceDashboard color="white" size={20} />}
                  text="Dashboard"
                  role="Admin"
                  to={"/admin/" + id}
                  className={pathName == "/admin/" + id ? "bg-[#5C8374]" : ""}
                />
                <SidebarItem
                  icons={<FaUserDoctor color="white" size={20} />}
                  text="Dokter"
                  role="Admin"
                  to={"/admin/doctors/" + id}
                  className={
                    pathName == "/admin/doctors/" + id ? "bg-[#5C8374]" : ""
                  }
                />
                <SidebarItem
                  icons={<FaUserInjured color="white" size={20} />}
                  text="Pasien"
                  role="Admin"
                  to={"/admin/pasien/" + id}
                  className={
                    pathName == "/admin/pasien/" + id ? "bg-[#5C8374]" : ""
                  }
                />
                <SidebarItem
                  icons={<FaHospital color="white" size={20} />}
                  text="Poli"
                  role="Admin"
                  to={"/admin/poli/" + id}
                  className={
                    pathName == "/admin/poli/" + id ? "bg-[#5C8374]" : ""
                  }
                />
                <SidebarItem
                  icons={<FaPills color="white" size={20} />}
                  text="Obat"
                  role="Admin"
                  to={"/admin/obat/" + id}
                  className={
                    pathName == "/admin/obat/" + id ? "bg-[#5C8374]" : ""
                  }
                />
              </>
            )}
            {role === "dokter" && (
              <>
                <SidebarItem
                  icons={<MdSpaceDashboard color="white" size={20} />}
                  text="Dashboard"
                  role="Dokter"
                  to={"/dokter/" + id}
                  className={pathName == "/dokter" ? "bg-[#5C8374]" : ""}
                />
                <SidebarItem
                  icons={<CiMedicalClipboard color="white" size={20} />}
                  text="Jadwal Periksa"
                  role="Dokter"
                  to={"/dokter/jadwal-periksa/" + id}
                  className={
                    pathName == "/dokter/jadwal-periksa" ? "bg-[#5C8374]" : ""
                  }
                />
                <SidebarItem
                  icons={<FaStethoscope color="white" size={20} />}
                  text="Memeriksa Pasien"
                  role="Dokter"
                  to={"/dokter/daftar-periksa/" + id}
                  className={
                    pathName == "/dokter/daftar-periksa" ? "bg-[#5C8374]" : ""
                  }
                />
                <SidebarItem
                  icons={<FaNotesMedical color="white" size={20} />}
                  text="Riwayat Pasien"
                  role="Dokter"
                  to={"/dokter/riwayat-pasien/" + id}
                  className={
                    pathName == "/dokter/riwayat-pasien" ? "bg-[#5C8374]" : ""
                  }
                />
                <SidebarItem
                  icons={<FaUser color="white" size={20} />}
                  text="Profil"
                  role="Dokter"
                  to={"/dokter/profile/" + id}
                  className={
                    pathName == "/dokter/profile" ? "bg-[#5C8374]" : ""
                  }
                />
              </>
            )}
          </ul>
        </motion.nav>
        <div className={`flex flex-col overflow-auto w-full`}>
          <NavbarDashboard
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setIsSidebarOpen}
          />
          <main className="bg-[#F0F4F8] overflow-y-auto max-h-[100vh] w-full">
            <Outlet context={[role]} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Sidebars;
