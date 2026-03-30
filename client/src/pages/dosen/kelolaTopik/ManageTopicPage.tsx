import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import LecturerTopicTableRow from "./components/LecturerTopicTableRow";
import StudentTopicTableRow from "./components/StudentTopicTableRow";

import LecturerTopicFormDialog from "./components/LecturerTopicFormDialog";
import StudentTopicFormDialog from "./components/StudentTopicFormDialog";
import { topics as mockData } from "./mockData";
import { studentTopics as mockStudentTopics } from "./mockData";

import { useEffect, useState } from "react";
function DosenTopikSayaPage() {
  const [topics, setTopics] = useState(mockData);
  const [studentTopics, setStudentTopics] = useState(mockStudentTopics);
  useEffect(() => {
    console.log("Ambil data semua topik yang dimiliki dosen di semester ini");
    // const topics = mockTopics;
  }, []);

  const handleAddLecturerTopic = (newTopicData: any) => {
    const newTopic = {
      id: Date.now().toString(),
      ...newTopicData,
      status: "available",
      queueCount: 0,
      hasNotes: !!newTopicData.studentNotes,
      lecturerCode: "FR",
    };
    console.log(newTopic);
    setTopics([newTopic, ...topics]);
  };

  const handleAddStudentTopic = (newTopicData: any) => {
    const newTopic = {
      id: Date.now().toString(),
      ...newTopicData,
      status: "taken",
      hasNotes: false,
      lecturerCode: "FR",
    };
    setStudentTopics([newTopic, ...studentTopics]);
  };

  const handleEditLecturerTopic = (id: string, updatedData: any) => {
    setTopics((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updatedData } : t)),
    );
  };

  const handleEditStudentTopic = (id: string, updatedData: any) => {
    setStudentTopics((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updatedData } : t)),
    );
  };

  const handleDeleteLecturerTopic = (id: string, updatedData: any) => {
    setTopics((prev) => prev.filter((t) => t.id !== id));
  };

  const handleDeleteStudentTopic = (id: string, updatedData: any) => {
    setTopics((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <Select defaultValue="ganjil-25-26">
          <SelectTrigger className="flex h-auto w-fit max-w-[90vw] items-center gap-2 sm:gap-3 rounded-md border border-l-3 sm:border-l-5 border-blue-600 bg-white px-3 sm:px-5 py-2 text-xl sm:text-2xl font-black text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:border-l-6 sm:hover:border-l-10 hover:cursor-pointer">
            <SelectValue placeholder="Pilih Semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ganjil-25-26">
              Semester Ganjil 2025/2026
            </SelectItem>
            <SelectItem value="genap-24-25">
              Semester Genap 2024/2025
            </SelectItem>
            <SelectItem value="ganjil-24-25">
              Semester Ganjil 2024/2025
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="mt-9 flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-slate-900 border-l-4 border-blue-600 pl-4">
            TOPIK SAYA
          </h2>
          {/* <Button className="h-9 px-6 bg-green-600 hover:bg-green-700 font-bold shadow-md hover:cursor-pointer">
            <Plus className="mr-2 h-5 w-5" />
            Tambah Topik
          </Button> */}
          <LecturerTopicFormDialog type="new" onSave={handleAddLecturerTopic} />
        </div>
      </div>

      <div className="rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-200">
            <TableRow>
              <TableHead className="w-25 font-bold text-slate-900 text-center border-r">
                Kode Topik
              </TableHead>
              <TableHead className="font-bold text-slate-900 border-r">
                Judul Topik
              </TableHead>
              <TableHead className="w-30 font-bold text-slate-900 text-center border-r">
                Topik
              </TableHead>
              <TableHead className="w-32.5 font-bold text-slate-900 text-center border-r">
                Catatan
              </TableHead>
              <TableHead className="w-40 font-bold text-slate-900 text-center border-r">
                Status
              </TableHead>
              <TableHead className="w-60 font-bold text-slate-900 text-center">
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topics.map((topic) => (
              <LecturerTopicTableRow
                key={topic.id}
                topic={topic}
                onSave={(data) => handleEditLecturerTopic(topic.id, data)}
              />
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mb-6 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-slate-900 border-l-4 border-blue-600 pl-4">
            USULAN MAHASISWA
          </h2>
          <StudentTopicFormDialog type="new" onSave={handleAddStudentTopic} />
        </div>
      </div>
      <div className="rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-200">
            <TableRow>
              <TableHead className="w-25 font-bold text-slate-900 text-center border-r">
                Kode Topik
              </TableHead>
              <TableHead className="font-bold text-slate-900 border-r">
                Judul Topik
              </TableHead>
              <TableHead className="w-30 font-bold text-slate-900 text-center border-r">
                Topik
              </TableHead>
              <TableHead className="w-40 font-bold text-slate-900 text-center border-r">
                Mahasiswa
              </TableHead>
              <TableHead className="w-60 font-bold text-slate-900 text-center">
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentTopics.map((topic) => (
              <StudentTopicTableRow
                key={topic.id}
                topic={topic}
                onSave={(data) => handleEditStudentTopic(topic.id, data)}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default DosenTopikSayaPage;
