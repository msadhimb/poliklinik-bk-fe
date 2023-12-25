import { Table } from "flowbite-react";
import { useLocation } from "react-router-dom";
import Modals from "../../components/Modals";
import { useState } from "react";

const RiwayatPasien = () => {
  const pathName = useLocation().pathname;
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="container min-h-[90vh] m-5 my-[3rem]">
      <div className="flex justify-between">
        <h1 className="text-xl font-medium">Riwayat Pasien</h1>
        <h1>{pathName}</h1>
      </div>
      <div className="card bg-white p-5 mt-[3rem]">
        <div className="card-body">
          <div className="flex justify-between">
            <h1 className="text-xl font-medium">Daftar Riwayat Pasien</h1>
          </div>
          <div className="overflow-x-auto mt-4">
            <Table striped>
              <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Nama</Table.HeadCell>
                <Table.HeadCell width="30%">Alamat</Table.HeadCell>
                <Table.HeadCell>No. KTP</Table.HeadCell>
                <Table.HeadCell>No. HP</Table.HeadCell>
                <Table.HeadCell>No. RM</Table.HeadCell>
                <Table.HeadCell>Aksi</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>Eko</Table.Cell>
                  <Table.Cell>Jl. Sudirman</Table.Cell>
                  <Table.Cell>123456789</Table.Cell>
                  <Table.Cell>08123456789</Table.Cell>
                  <Table.Cell>202312-001</Table.Cell>
                  <Table.Cell>
                    <button
                      className="bg-[#1B4242]  p-2 rounded text-white mx-2"
                      onClick={() => setOpenModal(true)}
                    >
                      Detail Riwayat Periksa
                    </button>
                  </Table.Cell>
                  <Modals
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    size="xxl"
                    title={"Riwayat " + "Eko"}
                    body={
                      <div className="overflow-x-auto">
                        <Table striped>
                          <Table.Head>
                            <Table.HeadCell>No</Table.HeadCell>
                            <Table.HeadCell>Tanggal Periksa</Table.HeadCell>
                            <Table.HeadCell>Nama Pasien</Table.HeadCell>
                            <Table.HeadCell>Nama Dokter</Table.HeadCell>
                            <Table.HeadCell>Keluhan</Table.HeadCell>
                            <Table.HeadCell>Catatan</Table.HeadCell>
                            <Table.HeadCell>Obat</Table.HeadCell>
                            <Table.HeadCell>Biaya</Table.HeadCell>
                          </Table.Head>
                          <Table.Body className="divide-y">
                            <Table.Row>
                              <Table.Cell>1</Table.Cell>
                              <Table.Cell>12/12/2021</Table.Cell>
                              <Table.Cell>Eko</Table.Cell>
                              <Table.Cell>Dr. Andi</Table.Cell>
                              <Table.Cell>Pusinggggg</Table.Cell>
                              <Table.Cell>-</Table.Cell>
                              <Table.Cell>-</Table.Cell>
                              <Table.Cell>Rp. 100.000</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>2</Table.Cell>
                              <Table.Cell>13/12/2021</Table.Cell>
                              <Table.Cell>Eko</Table.Cell>
                              <Table.Cell>Dr. Anto</Table.Cell>
                              <Table.Cell>Terkaparrrr</Table.Cell>
                              <Table.Cell>-</Table.Cell>
                              <Table.Cell>-</Table.Cell>
                              <Table.Cell>Rp. 100.000</Table.Cell>
                            </Table.Row>
                          </Table.Body>
                        </Table>
                      </div>
                    }
                  />
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatPasien;
