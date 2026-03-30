import { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import LecturerFormDialog from "./components/LecturerFormDialog";
import DeleteDialog from "./components/DeleteDialog";

const mockLecturers = [
  {
    id: "1",
    name: "Fauzan",
    email: "fauzan@email.com",
    code: "F",
    role: "koordinator",
  },
];

function UserManagementPage() {
  const [lecturers, setLecturers] = useState(mockLecturers);
  const handleAddLecturer = (data: any) => {
    setLecturers([...lecturers, { id: Date.now().toString(), ...data }]);
  };

  const handleEditLecturer = (id: string, data: any) => {
    setLecturers((prev) =>
      prev.map((l) => (l.id === id ? { ...l, ...data } : l)),
    );
  };

  const handleDeleteLecturer = (id: string) => {
    setLecturers((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <div className="p-8 space-y-2">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-slate-900">
          Manajemen User
        </h1>
        <p className="text-muted-foreground mt-1">Kelola data dosen.</p>
      </div>
      {/* <Button className="bg-green-600 hover:bg-green-700 font-bold">
        <UserPlus className="mr-2 h-4 w-4" /> Tambah User
      </Button> */}
      <LecturerFormDialog type="add" onSave={handleAddLecturer} />

      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-bold border-r pl-5">
                Nama Lengkap
              </TableHead>
              <TableHead className="w-48 font-bold text-center border-r">
                Kode Dosen
              </TableHead>
              <TableHead className="w-48 font-bold text-center border-r">
                Email
              </TableHead>
              <TableHead className="w-48 font-bold text-center border-r">
                Role
              </TableHead>
              <TableHead className="w-48 font-bold text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lecturers.map((lecturer) => (
              <TableRow>
                <TableCell className="border-r pl-5">{lecturer.name}</TableCell>
                <TableCell className="text-center  border-r">
                  {lecturer.code}
                </TableCell>
                <TableCell className="text-center  border-r">
                  {lecturer.email}
                </TableCell>
                <TableCell className="text-center  border-r">
                  {lecturer.role}
                </TableCell>
                <TableCell className="text-center">
                  <LecturerFormDialog
                    type="edit"
                    initialData={lecturer}
                    onSave={(data) => handleEditLecturer(lecturer.id, data)}
                  />

                  {/* <Button
                    className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 hover:cursor-pointer"
                    variant="outline"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button> */}
                  <DeleteDialog
                    name={lecturer.name}
                    onConfirm={() => handleDeleteLecturer(lecturer.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default UserManagementPage;
