import { Table } from "flowbite-react";
import { FaEdit, FaStethoscope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const DaftarPeriksa = () => {
  const pathName = useLocation().pathname;
  return (
    <div className="container min-h-[90vh] m-5 my-[3rem]">
      <div className="flex justify-between">
        <h1 className="text-xl font-medium">Periksa</h1>
        <h1>{pathName}</h1>
      </div>
      <div className="card bg-white p-5 mt-[3rem]">
        <div className="card-body">
          <div className="flex justify-between">
            <h1 className="text-xl font-medium">Daftar Periksa</h1>
          </div>
          <div className="overflow-x-auto mt-4">
            <Table striped>
              <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Nama Pasien</Table.HeadCell>
                <Table.HeadCell>Keluhan</Table.HeadCell>
                <Table.HeadCell>Aksi</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>Dr. Andi</Table.Cell>
                  <Table.Cell>Pusinggggg</Table.Cell>
                  <Table.Cell>
                    <button className="bg-[#5C8374] p-2 rounded text-white mx-2 flex items-center">
                      <FaEdit className="mr-2" /> Edit
                    </button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell>Dr. Anto</Table.Cell>
                  <Table.Cell>Terkaparrrr</Table.Cell>
                  <Table.Cell>
                    <Link
                      to="/dokter/daftar-periksa/periksa"
                      className="bg-[#1B4242] p-2 rounded text-white mx-2 flex items-center w-fit"
                    >
                      <FaStethoscope className="mr-2" /> Periksa
                    </Link>
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

export default DaftarPeriksa;
