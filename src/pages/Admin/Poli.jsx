import TextArea from "../../components/TextArea";
import { useLocation } from "react-router-dom";
import { Table } from "flowbite-react";
import Input from "../../components/Input";

const Poli = () => {
  const pathName = useLocation().pathname;
  return (
    <>
      <div className="container min-h-[90vh] m-5 my-[3rem]">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium">Poli</h1>
          <h1>{pathName}</h1>
        </div>
        <form action="" className="mt-5">
          <Input label="Nama Poli" type="text" placeholder="Nama Poli" />
          <TextArea label="Keterangan" type="text" placeholder="Keterangan" />

          <div className="flex justify-end mt-4">
            <button className="bg-[#1B4242] p-2 rounded text-white mx-2">
              Tambah
            </button>
            <button className="bg-slate-500 p-2 rounded text-white">
              Reset Form
            </button>
          </div>
        </form>

        <div className="card bg-white p-5 mt-[3rem]">
          <div className="card-body">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium">Poli</h1>
            </div>
            <div className="overflow-x-auto mt-4">
              <Table striped>
                <Table.Head>
                  <Table.HeadCell>No</Table.HeadCell>
                  <Table.HeadCell>Nama Poli</Table.HeadCell>
                  <Table.HeadCell width="40%">Keterangan</Table.HeadCell>
                  <Table.HeadCell>Aksi</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>Umum</Table.Cell>
                    <Table.Cell>Poli Umum</Table.Cell>
                    <Table.Cell>
                      <button className="bg-[#5C8374] p-2 rounded text-white mx-2">
                        Edit
                      </button>
                      <button className="bg-red-500 p-2 rounded text-white mx-2">
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
    </>
  );
};

export default Poli;
