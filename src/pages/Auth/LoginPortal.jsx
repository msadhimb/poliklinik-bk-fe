import { FaUserAlt } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import Modals from "../../components/Modals";
import { useState } from "react";
import { Checkbox, Label, TextInput } from "flowbite-react";
import { HiLockClosed, HiMail } from "react-icons/hi";

const LoginPortal = () => {
  const [pasien, setPasien] = useState(false);
  return (
    <>
      <div className="min-h-screen relative">
        <div className="bg-[#1B4242] absolute top-0 h-[50%] w-full z-0" />
        <div className="flex items-center h-screen justify-center flex-col container mx-auto relative z-20">
          <h1 className="text-4xl font-bold text-white mb-[10rem]">
            {" "}
            Login Portal{" "}
          </h1>
          <div className="grid grid-cols-2 gap-8 w-full">
            {/* Login Admin */}
            <div className="flex flex-col justify-center items-start bg-white text-black p-5 rounded shadow-lg">
              <div className="bg-[#092635] p-4 rounded">
                <FaUserAlt size={25} color="white" />
              </div>
              <h1 className=" text-2xl font-bold mt-2">Login Sebagai Pasien</h1>
              <p className=" text-lg">
                Apabila Anda adalah admin, silahkan login disini.
              </p>
              <button
                className="bg-white text-[#1B4242] rounded-full py-2 mt-3 flex items-center"
                onClick={() => setPasien(true)}
              >
                Klik Link Berikut <MdOutlineArrowRightAlt className="ml-2" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-start bg-white text-black p-5 rounded shadow-lg">
              <div className="bg-[#092635] p-4 rounded">
                <FaUserAlt size={25} color="white" />
              </div>
              <h1 className=" text-2xl font-bold mt-2">Login Sebagai Dokter</h1>
              <p className=" text-lg">
                Apabila Anda adalah admin, silahkan login disini.
              </p>
              <Link className="bg-white text-[#1B4242] rounded-full py-2 mt-3 flex items-center">
                Klik Link Berikut <MdOutlineArrowRightAlt className="ml-2" />
              </Link>
            </div>
            <div className="flex flex-col justify-center items-start bg-white text-black p-5 rounded shadow-lg">
              <div className="bg-[#092635] p-4 rounded">
                <FaUserAlt size={25} color="white" />
              </div>
              <h1 className=" text-2xl font-bold mt-2">Login Sebagai Admin</h1>
              <p className=" text-lg">
                Apabila Anda adalah admin, silahkan login disini.
              </p>
              <Link className="bg-white text-[#1B4242] rounded-full py-2 mt-3 flex items-center">
                Klik Link Berikut <MdOutlineArrowRightAlt className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <Modals
          openModal={pasien}
          setOpenModal={setPasien}
          size="lg"
          title="Login Pasien"
          buttonClose={false}
          body={
            <>
              <form className="flex flex-col">
                <div className="w-full">
                  <TextInput
                    id="nama"
                    type="text"
                    icon={HiMail}
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="w-full my-3">
                  <TextInput
                    id="nama"
                    type="password"
                    icon={HiLockClosed}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="flex justify-end text-sm text-[#1B4242] hover:underline my-1">
                  <Link to="/forgot-password">Belum punya akun?</Link>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="accept" />
                    <Label htmlFor="accept" className="flex">
                      Remember Me
                    </Label>
                  </div>
                  <button className="bg-[#1B4242] text-white p-2 px-4 rounded-lg w-fit">
                    Login
                  </button>
                </div>
              </form>
            </>
          }
        />
      </div>
    </>
  );
};

export default LoginPortal;
