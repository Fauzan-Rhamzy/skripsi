import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import TopicTableRow from "./components/TopicTableRow";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { topics } from "./mockData";

import { useEffect } from "react";

function DosenDashboardPage() {
  useEffect(() => {
    console.log("Ambil data semua topik yang aktif di semester ini");
    // const topics = mockTopics;
  }, []);

  return (
    <div className="p-8">
      <div className="mb-6">
        {/* <h1 className="text-3xl font-black tracking-tight text-slate-900">
          Semester Ganjil 2025/2026
        </h1> */}
        <Select defaultValue="ganjil-25-26">
          {/* <SelectTrigger className="h-auto border-20 border-blue-400 bg-blue-400 w-fit text-3xl font-black text-slate-900 "> */}
          <SelectTrigger
            className="flex h-auto w-fit max-w-[90vw] items-center gap-2 sm:gap-3 rounded-md border border-l-3 sm:border-l-5 border-blue-600 bg-white px-3
     sm:px-5 py-2 text-xl sm:text-2xl font-black text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:border-l-6 sm:hover:border-l-10"
          >
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
        <p className="text-muted-foreground mt-3">
          Daftar topik yang tersedia semester ini.
        </p>
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
              <TableHead className="w-25 font-bold text-slate-900 text-center border-r">
                Kode Dosen
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
              <TableHead className="w-20 font-bold text-slate-900 text-center">
                Antrean
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topics.map((topic) => (
              <TopicTableRow key={topic.id} topic={topic} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default DosenDashboardPage;
