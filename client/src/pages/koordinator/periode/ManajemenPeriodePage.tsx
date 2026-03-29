import { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  Save,
  CalendarRange,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SemesterFormDialog from "./components/SemesterFormDialog";
import DeleteDialog from "./components/DeleteDialog";

const initialSemesters = [
  { id: "1", name: "Semester Ganjil 2025/2026", code: "60", isActive: true },
  { id: "2", name: "Semester Genap 2024/2025", code: "59", isActive: false },
  { id: "3", name: "Semester Ganjil 2024/2025", code: "58", isActive: false },
];

const PHASES = [
  { id: "pengumpulan", label: "Pengumpulan Topik" },
  { id: "review1", label: "Review 1" },
  { id: "revisi", label: "Revisi" },
  { id: "review2", label: "Review 2" },
  { id: "final", label: "Finalisasi" },
  { id: "pengambilan", label: "Pengambilan Mahasiswa" },
];

function ManajemenPeriodePage() {
  const [semesters, setSemesters] = useState(initialSemesters);
  const [activePhase, setActivePhase] = useState("pengumpulan");

  const activeSemester = semesters.find((s) => s.isActive);

  const handleSetActive = (id: string) => {
    setSemesters((prev) =>
      prev.map((s) => ({
        ...s,
        isActive: s.id === id,
      })),
    );
  };

  const handleAddSemester = (data: any) => {
    const newSemester = {
      id: (semesters.length + 1).toString(),
      ...data,
      isActive: false,
    };
    setSemesters([...semesters, newSemester]);
  };

  const handleEditSemester = (id: string, data: any) => {
    setSemesters((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...data } : s)),
    );
  };

  const handleDeleteSemester = (id: string, name: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus "${name}"?`)) {
      setSemesters((prev) => prev.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="p-8 space-y-10">
      {/* header */}
      <div>
        <div className="flex flex-col md:flex-row   gap-3 mb-5">
          <h1 className="text-3xl font-black text-slate-900">
            {activeSemester?.name || "Belum Ada Semester Aktif"}
          </h1>
          {/* <Badge
            variant="outline"
            className="border border-blue-500 text-blue-600 text-sm py-0"
          >
            Periode Aktif
          </Badge> */}
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <Label className="mb-3 block text-xl font-bold">
            Tahap Pengelolaan Topik:
          </Label>
          <RadioGroup
            value={activePhase}
            onValueChange={setActivePhase}
            className="flex flex-wrap gap-4"
          >
            {PHASES.map((phase) => (
              <div key={phase.id} className="flex items-center space-x-2">
                <RadioGroupItem value={phase.id} id={phase.id} />
                <Label
                  htmlFor={phase.id}
                  className="text-sm cursor-pointer hover:text-blue-600"
                >
                  {phase.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* 2. MANAGEMENT SECTION */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          {/* <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <CalendarRange className="h-5 w-5 text-blue-600" />
            Riwayat Semester
          </h2> */}
          {/* <Button className="bg-green-600 hover:bg-green-700 font-bold">
            <Plus className="mr-2 h-4 w-4" /> Tambah Periode Baru
          </Button> */}
          <SemesterFormDialog type="add" onSave={handleAddSemester} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="font-bold border-r">
                  Nama Periode / Semester
                </TableHead>
                <TableHead className="w-32 font-bold text-center border-r">
                  Kode
                </TableHead>
                <TableHead className="w-40 font-bold text-center border-r">
                  Status
                </TableHead>
                <TableHead className="w-64 font-bold text-center">
                  Aksi
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {semesters.map((s) => (
                <TableRow
                  key={s.id}
                  className={s.isActive ? "bg-blue-50/30" : ""}
                >
                  <TableCell className="font-bold text-slate-700 border-r">
                    {s.name}
                  </TableCell>
                  <TableCell className="text-center font-mono border-r">
                    {s.code}
                  </TableCell>
                  <TableCell className="text-center border-r">
                    {s.isActive ? (
                      <Badge className="bg-green-500 hover:bg-green-500 font-bold">
                        AKTIF
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-slate-400 border-slate-200 font-bold"
                      >
                        TIDAK AKTIF
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      {!s.isActive && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 border-green-600 text-green-600 hover:bg-green-50 font-bold"
                          onClick={() => handleSetActive(s.id)}
                        >
                          <CheckCircle2 className="h-3 w-3 mr-1" /> Aktifkan
                        </Button>
                      )}
                      <SemesterFormDialog
                        type="edit"
                        initialData={s}
                        onSave={(data) => handleEditSemester(s.id, data)}
                      />

                      {/* <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-400 hover:text-red-600"
                        onClick={() => handleDeleteSemester(s.id, s.name)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button> */}
                      <DeleteDialog
                        semesterName={s.name}
                        onConfirm={() => handleDeleteSemester}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
export default ManajemenPeriodePage;
