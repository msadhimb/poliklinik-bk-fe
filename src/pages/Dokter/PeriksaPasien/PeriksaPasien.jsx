import { useLocation, useOutletContext } from "react-router-dom";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import { useEffect } from "react";

const PeriksaPasien = () => {
  const pathName = useLocation().pathname;
  const [role] = useOutletContext();

  useEffect(() => {
    if (role !== "dokter") {
      window.location.href = "/";
    }
  }, [role]);
  return (
    <div className="container min-h-[90vh] m-5 my-[3rem]">
      <div className="flex justify-between">
        <h1 className="text-xl font-medium">Periksa Pasien</h1>
        <h1>{pathName}</h1>
      </div>
      <div className="card bg-white mt-5 rounded-t-md">
        <div className="header p-3 bg-[#1B4242] text-white rounded-t-md">
          <h2>Periksa Pasien</h2>
        </div>
        <div className="p-5">
          <form action="">
            <Input label="Nama Pasien" type="text" placeholder="Nama Pasien" />
            <Input
              label="Tanggal Periksa"
              type="datetime-local"
              placeholder="Tanggal Periksa"
            />
            <Input label="Catatan" type="text" placeholder="Catatan" />
            <TextArea label="Obat" placeholder="Obat" />
            <div className="flex justify-end mt-4">
              <button className="bg-[#5C8374] p-2 rounded text-white mx-2">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PeriksaPasien;
