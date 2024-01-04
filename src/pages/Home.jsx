import { Dropdown, Footer, Navbar } from "flowbite-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import udinus from "../assets/logo/udinus.png";
import {
  BsDribbble,
  BsFacebook,
  BsFillPersonLinesFill,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import SwiperCoverflow from "../components/SwiperCoverflow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAdmin, logoutAdmin } from "../config/Redux/Action/adminAction";
import { getDokter, logoutDokter } from "../config/Redux/Action/dokterAction";
import {
  addDaftarPoli,
  getJadwalPeriksa,
  getPasien,
  getPoli,
  logoutPasien,
} from "../config/Redux/Action";
import Modals from "../components/Modals";
import Input from "../components/Input";
import ReactSelect from "../components/ReactSelect";
import TextArea from "../components/TextArea";
import { FaAngleDown } from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import transition from "../transition";

const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { admin, isLogin } = useSelector((state) => state.adminReducer);
  const { dokter, isLoginDokter } = useSelector((state) => state.dokterReducer);
  const { pasien, isLoginPasien } = useSelector((state) => state.pasienReducer);
  const { poli } = useSelector((state) => state.poliReducer);
  const { jadwalPeriksa } = useSelector((state) => state.jadwalPeriksaReducer);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [daftarPoli, setDaftarPoli] = useState(false);
  const [poliOption, setPoliOption] = useState([]);
  const [selectedPoli, setSelectedPoli] = useState();
  const [jadwal, setJadwal] = useState([]);
  const [daftarPoliForm, setDaftarPoliForm] = useState({
    id_pasien: pasien.id,
    id_jadwal: "",
    keluhan: "",
  });

  const handleLogoutAdmin = () => {
    dispatch(logoutAdmin(token, nav));
  };

  const handleLogoutDokter = () => {
    dispatch(logoutDokter(token, nav));
  };

  const handleLogoutPasien = () => {
    dispatch(logoutPasien(token, nav));
  };

  const handleOpenDaftarPoli = () => {
    setDaftarPoli(true);
    dispatch(getPoli());
  };

  const handleCloseDaftarPoli = () => {
    setDaftarPoli(false);
  };

  const handleDaftarPoli = (e) => {
    e.preventDefault();
    dispatch(addDaftarPoli(daftarPoliForm));
    setDaftarPoli(false);
  };

  const dateFormat = (date) => {
    return date?.split(" ")[0];
  };

  const timeFormat = (time) => {
    const date = new Date(`1970-01-01T${time}`);

    if (isNaN(date)) {
      return "Invalid time";
    }

    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    if (role === "admin") {
      if (!token || id === undefined) {
        dispatch(getAdmin(token));
        if (isLogin && admin.id !== undefined) {
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
        if (isLoginDokter && dokter.id !== undefined) {
          nav("/" + dokter.id);
        }
      } else {
        dispatch(getDokter(token));
      }
    }
  }, [dispatch, id, isLoginDokter, nav, token, dokter.id, role]);

  useEffect(() => {
    if (role === "pasien") {
      if (!token || id === undefined) {
        dispatch(getPasien(token));
        if (isLoginPasien && pasien.id !== undefined) {
          nav("/" + pasien.id);
        }
      } else {
        dispatch(getPasien(token));
      }
    }
  }, [dispatch, id, isLoginPasien, nav, token, pasien.id, role]);

  useEffect(() => {
    if (poli) {
      const data = poli.map((item) => {
        return {
          value: item.id,
          label: item.nama_poli,
        };
      });
      setPoliOption(data);
    }
  }, [poli]);

  useEffect(() => {
    if (selectedPoli) {
      dispatch(getJadwalPeriksa());
    }
  }, [dispatch, selectedPoli]);

  useEffect(() => {
    if (jadwalPeriksa) {
      const currentDate = new Date();
      const data = jadwalPeriksa
        .map((item) => {
          const date = item.tanggal.split(" ")[0];
          const time = new Date(`${date}T${item.jam_mulai}`);
          if (
            item.dokter.poli.nama_poli === selectedPoli &&
            time >= currentDate
          ) {
            return {
              value: item.id,
              label: `Dr. ${item.dokter.nama}, ${item.hari}, ${dateFormat(
                item.tanggal
              )}, jam ${timeFormat(item.jam_mulai)} sampai ${timeFormat(
                item.jam_selesai
              )}`,
            };
          }
          // Jika kondisi tidak terpenuhi, kembalikan null atau objek kosong
          return null; // atau return {};
        })
        .filter((item) => item !== null); // Filter elemen yang bernilai null

      setJadwal(data);
    }
  }, [jadwalPeriksa, selectedPoli]);

  return (
    <>
      <ToastContainer />
      <Navbar rounded className="shadow-md py-5 bg-[#092635]">
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <img
            src={udinus}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Poliklinik BK
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="flex items-center">
          <Navbar.Link
            href="#"
            className="flex items-center h-full text-white  "
            as={Link}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            href="/dashboard"
            className="flex items-center h-full text-white"
          >
            About
          </Navbar.Link>
          {id && token ? (
            <>
              {role !== "pasien" && (
                <Link
                  to={role == "admin" ? `/admin/${id}` : `/dokter/${id}`}
                  className="flex items-center h-100 text-white"
                >
                  Dashboard
                </Link>
              )}
              <div className="flex items-center">
                <Dropdown
                  renderTrigger={() => (
                    <div className="flex items-center cursor-pointer">
                      <div className="flex flex-col justify-center items-end">
                        <h3 className=" font-bold text-white">
                          {admin.username
                            ? admin.username
                            : dokter.username
                            ? dokter.username
                            : pasien.username}
                        </h3>
                        <span className=" text-[12px] text-white">
                          {admin.role
                            ? admin.role
                            : dokter.role
                            ? dokter.role
                            : pasien.role}
                        </span>
                      </div>
                      <FaAngleDown className="text-white mr-2 ml-1" />
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
                        : role === "dokter"
                        ? () => handleLogoutDokter()
                        : () => handleLogoutPasien()
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
            </>
          ) : (
            <Link to={"/login"}>
              <button className="bg-[#9EC8B9] text-black p-2 px-3 rounded-lg">
                Login
              </button>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>

      <main className="container mx-auto">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-[2rem] lg:my-[5rem] mx-5 lg:mx-0 items-center">
          <div className="">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
              Your Trusted Polyclinic for Quality Healthcare
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mt-4">
              Delivering compassionate care for your well-being.
            </p>

            <p className="mt-4">
              {role === "pasien" ? (
                <button
                  className="bg-green-900 p-2 px-3 mt-4 text-white flex w-fit items-center rounded-md"
                  onClick={() => handleOpenDaftarPoli()}
                >
                  Daftar Poli
                  <MdOutlineArrowRightAlt color="white" className="ml-2" />
                </button>
              ) : role === "admin" || role === "dokter" ? (
                <Link
                  to={`/${role}/${role === "admin" ? admin.id : dokter.id}`}
                  className="bg-green-900 p-2 px-3 mt-4 text-white flex w-fit items-center rounded-md"
                >
                  Dashboard{" "}
                  <MdOutlineArrowRightAlt color="white" className="ml-2" />
                </Link>
              ) : (
                <Link
                  to={`/register`}
                  className="bg-green-900 p-2 px-3 mt-4 text-white flex w-fit items-center rounded-md"
                >
                  Register Now{" "}
                  <MdOutlineArrowRightAlt color="white" className="ml-2" />
                </Link>
              )}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.dimins.com/wp-content/uploads/2018/09/doctors-center-hospital-cover-web-min-1024x710.jpg"
              alt="hero"
            />
          </div>
          <Modals
            openModal={daftarPoli}
            setOpenModal={handleCloseDaftarPoli}
            title="Daftar Poli"
            buttonClose={false}
            body={
              <form className="mt-[-1.5rem]" onSubmit={handleDaftarPoli}>
                <Input
                  label="Nomor Rekam Medis"
                  type="text"
                  placeholder="Nomor Rekam Medis"
                  value={pasien.no_rm}
                  disabled={true}
                />
                <ReactSelect
                  data={poliOption}
                  title="Poli"
                  onChange={(e) => setSelectedPoli(e.label)}
                />
                <ReactSelect
                  data={jadwal}
                  title="Pilih Jadwal"
                  disabled={selectedPoli === "" ? true : false}
                  onChange={(e) =>
                    setDaftarPoliForm({ ...daftarPoliForm, id_jadwal: e.value })
                  }
                />
                <TextArea
                  label="Keluhan"
                  placeholder="Keluhan"
                  onChange={(e) =>
                    setDaftarPoliForm({
                      ...daftarPoliForm,
                      keluhan: e.target.value,
                    })
                  }
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-green-900 p-2 px-3 mt-4 text-white w-fit rounded-md text-sm"
                  >
                    Daftar Poli
                  </button>
                </div>
              </form>
            }
          />
        </section>

        {/* Services Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-[2rem] lg:my-[5rem] mx-5 lg:mx-0 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="card border p-5 rounded hover:shadow-lg">
              <div className="card-header my-2">
                <BsFillPersonLinesFill size={50} />
              </div>
              <div className="card-body">
                <h1 className="text-xl font-medium">Konsultasi Online</h1>
                <p className="mt-2">
                  Konsultasi dengan dokter secara online tanpa harus datang ke
                  poliklinik.
                </p>
              </div>
            </div>
            <div className="card border p-5 rounded hover:shadow-lg">
              <div className="card-header my-2">
                <BsFillPersonLinesFill size={50} />
              </div>
              <div className="card-body">
                <h1 className="text-xl font-medium">Konsultasi Online</h1>
                <p className="mt-2">
                  Konsultasi dengan dokter secara online tanpa harus datang ke
                  poliklinik.
                </p>
              </div>
            </div>
            <div className="card border p-5 rounded hover:shadow-lg">
              <div className="card-header my-2">
                <BsFillPersonLinesFill size={50} />
              </div>
              <div className="card-body">
                <h1 className="text-xl font-medium">Konsultasi Online</h1>
                <p className="mt-2">
                  Konsultasi dengan dokter secara online tanpa harus datang ke
                  poliklinik.
                </p>
              </div>
            </div>
            <div className="card border p-5 rounded hover:shadow-lg">
              <div className="card-header my-2">
                <BsFillPersonLinesFill size={50} />
              </div>
              <div className="card-body">
                <h1 className="text-xl font-medium">Konsultasi Online</h1>
                <p className="mt-2">
                  Konsultasi dengan dokter secara online tanpa harus datang ke
                  poliklinik.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
              Our Services
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mt-4">
              We provide a wide range of services to meet your needs.
            </p>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-[5rem]">
          <div className="text-center">
            <h1 className="text-4xl font-bold leading-tight text-gray-900">
              Patient Testimonal
            </h1>
            <p className="text-xl text-gray-700 mt-2">
              Testimoni dari pasien yang telah menggunakan layanan kami.
            </p>
            <div className="my-[8rem]">
              <SwiperCoverflow />
            </div>
          </div>
        </section>
      </main>

      <Footer container className="bg-[#092635] rounded-none">
        <div className="container mx-auto">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                src={udinus}
                alt="Udinus Logo"
                name="Udinus"
                className="h-[4rem] sm:h-[5rem] text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default transition(Home);
