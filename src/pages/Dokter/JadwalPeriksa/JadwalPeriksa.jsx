import { Table } from "flowbite-react";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useLocation, useOutletContext } from "react-router-dom";

const JadwalPeriksa = () => {
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
        <h1 className="text-xl font-medium">Jadwal Periksa</h1>
        <h1>{pathName}</h1>
      </div>
      <div className="card bg-white p-5 mt-[3rem]">
        <div className="card-body">
          <div className="flex justify-between">
            <h1 className="text-xl font-medium">Daftar Jadwal Periksa</h1>
            <Link
              className="bg-[#1B4242] p-2 rounded text-white mx-2 flex items-center"
              to={"/dokter/jadwal-periksa/kelola-jadwal"}
            >
              <FaPlus className="mr-2" /> Tambah
            </Link>
          </div>
          <div className="overflow-x-auto mt-4">
            <Table striped>
              <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Nama Dokter</Table.HeadCell>
                <Table.HeadCell>Hari</Table.HeadCell>
                <Table.HeadCell>Jam Mulai</Table.HeadCell>
                <Table.HeadCell>Jam Selesai</Table.HeadCell>
                <Table.HeadCell>Aksi</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>Dr. Andi</Table.Cell>
                  <Table.Cell>Senin</Table.Cell>
                  <Table.Cell>08.00</Table.Cell>
                  <Table.Cell>10.00</Table.Cell>
                  <Table.Cell>
                    <button className="bg-[#5C8374] p-2 rounded text-white mx-2">
                      Edit
                    </button>
                    <button className="bg-red-500 p-2 rounded text-white">
                      Hapus
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalPeriksa;
