import { useLocation, useNavigate, useParams } from "react-router-dom";
import Input from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useEffect, useState } from "react";
import {
  addJadwalPeriksa,
  getJadwalPeriksaById,
  updateJadwalPeriksa,
} from "../../../config/Redux/Action/jadwalPeriksaAction";
import ReactSelect from "../../../components/ReactSelect";

const KelolaJadwalPeriksa = () => {
  const pathName = useLocation().pathname;
  const { id, idJadwal } = useParams();
  const { dokter } = useSelector((state) => state.dokterReducer);
  const { jadwalPeriksaById } = useSelector(
    (state) => state.jadwalPeriksaReducer
  );
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [addForm, setAddForm] = useState({
    id_dokter: id,
    hari: "",
    jam_mulai: "",
    jam_selesai: "",
    tanggal: "",
    status_aktif: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJadwalPeriksa(addForm, nav));
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(updateJadwalPeriksa(idJadwal, addForm, nav));
  };

  const dateFormat = (date) => {
    return date?.split(" ")[0];
  };

  useEffect(() => {
    if (idJadwal !== undefined && idJadwal !== null) {
      // Lakukan sesuatu ketika idJadwal memiliki nilai yang valid
      dispatch(getJadwalPeriksaById(idJadwal));
    } else {
      // Jika idJadwal adalah null atau undefined, atur kembali addForm
      setAddForm({
        id_dokter: id,
        hari: "",
        jam_mulai: "",
        jam_selesai: "",
        tanggal: "",
        status_aktif: "",
      });
    }
  }, [dispatch, id, idJadwal]);

  useEffect(() => {
    if (jadwalPeriksaById && idJadwal !== undefined) {
      setAddForm({
        id_dokter: id,
        hari: jadwalPeriksaById.hari,
        jam_mulai: jadwalPeriksaById.jam_mulai,
        jam_selesai: jadwalPeriksaById.jam_selesai,
        tanggal: jadwalPeriksaById.tanggal,
        status_aktif: jadwalPeriksaById.status_aktif,
      });
    }
  }, [id, jadwalPeriksaById, idJadwal]);

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
          <form
            onSubmit={idJadwal !== undefined ? handleSubmitEdit : handleSubmit}
          >
            <Input
              label="Nama"
              type="text"
              placeholder="Nama Dokter"
              value={dokter.nama}
              disabled
            />
            <div className="my-3">
              <label className="text-black text-sm font-normal mb-5">
                Hari
              </label>
              <Select
                options={[
                  { value: "1", label: "Senin" },
                  { value: "2", label: "Selasa" },
                  { value: "3", label: "Rabu" },
                  { value: "4", label: "Kamis" },
                  { value: "5", label: "Jumat" },
                  { value: "6", label: "Sabtu" },
                  { value: "7", label: "Minggu" },
                ]}
                name="hari"
                onChange={(e) => setAddForm({ ...addForm, hari: e.label })}
                value={{ label: addForm.hari }}
              />
            </div>
            <Input
              label="Jam Mulai"
              type="time"
              placeholder="Jam Mulai"
              name="jam_mulai"
              value={addForm.jam_mulai}
              onChange={(e) =>
                setAddForm({ ...addForm, jam_mulai: e.target.value })
              }
            />
            <Input
              label="Jam Berakhir"
              type="time"
              placeholder="Jam Berakhir"
              name="jam_selesai"
              value={addForm.jam_selesai}
              onChange={(e) =>
                setAddForm({ ...addForm, jam_selesai: e.target.value })
              }
            />
            <Input
              label="Tanggal"
              type="date"
              placeholder="tanggal"
              name="tanggal"
              value={dateFormat(addForm.tanggal)}
              onChange={(e) =>
                setAddForm({ ...addForm, tanggal: e.target.value })
              }
            />
            <ReactSelect
              title="Status"
              value={{
                value: addForm.status_aktif,
                label: addForm.status_aktif === "Y" ? "Aktif" : "Tidak Aktif",
              }}
              onChange={(e) =>
                setAddForm({ ...addForm, status_aktif: e.value })
              }
              data={[
                { value: "Y", label: "Aktif" },
                { value: "N", label: "Tidak Aktif" },
              ]}
            />
            <div className="flex justify-end mt-4">
              <button
                className="bg-[#5C8374] p-2 rounded text-white mx-2"
                type="submit"
              >
                {idJadwal ? "Edit" : "Tambah"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KelolaJadwalPeriksa;
