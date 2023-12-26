import { Footer, Navbar } from "flowbite-react";
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
import { getAdmin } from "../config/Redux/Action/adminAction";
import { getDokter } from "../config/Redux/Action/dokterAction";

const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { admin, isLogin } = useSelector((state) => state.adminReducer);
  const { dokter, isLoginDokter } = useSelector((state) => state.dokterReducer);
  const token = localStorage.getItem("token");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (!token || id === undefined) {
      dispatch(getAdmin(token));
      if (isLogin) {
        nav("/" + admin.id);
      }
    } else {
      dispatch(getAdmin(token));
    }
  }, [dispatch, id, isLogin, nav, token, admin.id]);

  useEffect(() => {
    if (!token || id === undefined) {
      dispatch(getDokter(token));
      if (isLoginDokter) {
        nav("/" + dokter.id);
      }
    } else {
      dispatch(getDokter(token));
    }
  }, [dispatch, id, isLoginDokter, nav, token, dokter.id]);

  useEffect(() => {
    if (admin.role) {
      setRole(admin.role);
    } else if (dokter.role) {
      setRole(dokter.role);
    }
  }, [admin, dokter]);

  return (
    <>
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
              <Link
                to={role == "admin" ? `/admin/${id}` : `/dokter/${id}`}
                className="flex items-center h-100 text-white"
              >
                Dashboard
              </Link>
              <div className="flex items-center">
                <div className="flex flex-col justify-center items-end mr-2">
                  <h3 className=" font-bold text-white">
                    {admin.username ? admin.username : dokter.username}
                  </h3>
                  <span className=" text-[12px] text-white">
                    {admin.role ? admin.role : dokter.role}
                  </span>
                </div>
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
              <Link className="bg-green-900 p-2 mt-4 text-white flex w-fit items-center rounded">
                Register Now{" "}
                <MdOutlineArrowRightAlt color="white" className="ml-2" />
              </Link>
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.dimins.com/wp-content/uploads/2018/09/doctors-center-hospital-cover-web-min-1024x710.jpg"
              alt="hero"
            />
          </div>
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

export default Home;
