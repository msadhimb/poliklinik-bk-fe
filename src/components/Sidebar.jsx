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
import { Outlet, useLocation } from "react-router-dom";
import { CiMedicalClipboard } from "react-icons/ci";

const Sidebars = () => {
  const pathName = useLocation().pathname;
  return (
    <>
      <div className="flex h-screen">
        <nav className="sidebar bg-[#092635] w-fit p-2 h-screen">
          <div className="flex flex-row items-center justify-start p-4">
            <img src={udinus} alt="udinus" className="w-10 h-10" />
            <h1 className="ml-3 text-white font-bold">Poliklinik BK</h1>
          </div>
          <hr className="border-[#5C8374]" />
          <ul className="flex flex-col p-2">
            {pathName.includes("admin") && (
              <>
                <SidebarItem
                  icons={<MdSpaceDashboard color="white" size={20} />}
                  text="Dashboard"
                  role="Admin"
                  to={"/admin"}
                />
                <SidebarItem
                  icons={<FaUserDoctor color="white" size={20} />}
                  text="Dokter"
                  role="Admin"
                  to={"/admin/doctors"}
                />
                <SidebarItem
                  icons={<FaUserInjured color="white" size={20} />}
                  text="Pasien"
                  role="Admin"
                  to={"/admin/pasien"}
                />
                <SidebarItem
                  icons={<FaHospital color="white" size={20} />}
                  text="Poli"
                  role="Admin"
                  to={"/admin/poli"}
                />
                <SidebarItem
                  icons={<FaPills color="white" size={20} />}
                  text="Obat"
                  role="Admin"
                  to={"/admin/obat"}
                />
              </>
            )}
            {pathName.includes("dokter") && (
              <>
                <SidebarItem
                  icons={<MdSpaceDashboard color="white" size={20} />}
                  text="Dashboard"
                  role="Dokter"
                  to={"/dokter"}
                />
                <SidebarItem
                  icons={<CiMedicalClipboard color="white" size={20} />}
                  text="Jadwal Periksa"
                  role="Dokter"
                  to={"/dokter/jadwal-periksa"}
                />
                <SidebarItem
                  icons={<FaStethoscope color="white" size={20} />}
                  text="Memeriksa Pasien"
                  role="Dokter"
                  to={"/dokter/daftar-periksa"}
                />
                <SidebarItem
                  icons={<FaNotesMedical color="white" size={20} />}
                  text="Riwayat Pasien"
                  role="Dokter"
                  to={"/dokter/riwayat-pasien"}
                />
                <SidebarItem
                  icons={<FaUser color="white" size={20} />}
                  text="Profil"
                  role="Dokter"
                  to={"/dokter/profile"}
                />
              </>
            )}
          </ul>
        </nav>
        <div className="flex flex-col w-full overflow-auto">
          <NavbarDashboard />
          <main className="bg-[#F0F4F8] overflow-y-auto max-h-[100vh]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Sidebars;
