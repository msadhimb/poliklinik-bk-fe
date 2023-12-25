import { useLocation, useParams } from "react-router-dom";
import Input from "../../../components/Input";

const KelolaJadwalPeriksa = () => {
  const pathName = useLocation().pathname;
  const { id } = useParams();
  return (
    <div className="container min-h-[90vh] m-5 my-[3rem]">
      <div className="flex justify-between">
        <h1 className="text-xl font-medium">Jadwal Periksa</h1>
        <h1>{pathName}</h1>
      </div>
      <div className="card bg-white mt-5 rounded-t-md">
        <div className="header p-3 bg-[#1B4242] text-white rounded-t-md">
          <h2>{id ? "Edit" : "Tambah"} Jadwal Periksa</h2>
        </div>
        <div className="p-5">
          <form action="">
            <Input label="Nama" type="text" placeholder="Nama Dokter" />
            <Input label="Jam Mulai" type="time" placeholder="Jam Mulai" />
            <Input
              label="Jam Berakhir"
              type="time"
              placeholder="Jam Berakhir"
            />
            <div className="flex justify-end mt-4">
              <button className="bg-[#5C8374] p-2 rounded text-white mx-2">
                {id ? "Edit" : "Tambah"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KelolaJadwalPeriksa;
