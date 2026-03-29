import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { topics } from "../kelolaTopik/mockData";
import { studentTopics } from "../kelolaTopik/mockData";

const renderStatusBadge = (status: string, phaseLabel: string) => {
  let color = "bg-slate-500 hover:bg-slate-800 text-white";

  if (status === "ok") {
    color = "bg-green-500 text-white hover:bg-green-600";
  } else if (status === "minor") {
    color = "bg-yellow-500 text-white hover:bg-yellow-600";
  } else if (status === "major") {
    color = "bg-orange-500 text-white hover:bg-orange-800";
  } else if (status === "reject") {
    color = "bg-red-500 text-white hover:bg-red-800";
  }
  return (
    <Button
      className={`${color} h-6 px-2 font-black text-[10px] gap-1 shadow-sm hover:opacity-80 transition-all hover:cursor-pointer`}
      onClick={() => alert(`Showing details for ${phaseLabel}`)}
    >
      <span className="">{phaseLabel}:</span>
      {status.toUpperCase()}
    </Button>
  );
};

function MonitoringReviewPage() {
  return (
    <div className="p-8">
      <Select defaultValue="ganjil-25-26">
        <SelectTrigger className="flex h-auto w-fit max-w-[90vw] items-center gap-2 sm:gap-3 rounded-md border border-l-3 sm:border-l-5 border-blue-600 bg-white px-3 sm:px-5 py-2 text-xl sm:text-2xl font-black text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:border-l-6 sm:hover:border-l-10 hover:cursor-pointer">
          <SelectValue placeholder="Pilih Semester" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ganjil-25-26">
            Semester Ganjil 2025/2026
          </SelectItem>
          <SelectItem value="genap-24-25">Semester Genap 2024/2025</SelectItem>
          <SelectItem value="ganjil-24-25">
            Semester Ganjil 2024/2025
          </SelectItem>
        </SelectContent>
      </Select>

      {/* header 1 */}
      <div className="mt-9 flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black text-slate-900 border-l-4 border-blue-600 pl-4">
          TOPIK DOSEN
        </h2>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="w-1 font-bold text-center border-r">
                Kode Topik
              </TableHead>
              <TableHead className="w-1 font-bold text-center border-r">
                Reviewer 1
              </TableHead>
              <TableHead className="w-32 font-bold text-center border-r">
                Reviewer 2
              </TableHead>
              <TableHead className="w-32 font-bold text-center border-r">
                Reviewer 3
              </TableHead>
              <TableHead className="w-40 font-bold text-center">
                Hasil Akhir
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topics.map((topic) => (
              <TableRow key={topic.id} className="h-12">
                <TableCell className="text-center border-r py-2 px-1">
                  {topic.code}
                </TableCell>

                <TableCell className="text-center border-r py-2 px-1">
                  <div className="flex flex-col gap-2">
                    <span className="tracking-tighter">Dr. Banner</span>
                    <div className="flex justify-center gap-1">
                      {renderStatusBadge("minor", "R1")}
                      {renderStatusBadge("ok", "R2")}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center border-r py-2 px-1">
                  <div className="flex flex-col gap-2">
                    <span className="tracking-tighter">Dr. Bruce</span>
                    <div className="flex justify-center gap-1">
                      {renderStatusBadge("major", "R1")}
                      {renderStatusBadge("reject", "R2")}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center border-r py-2 px-1">
                  <div className="flex flex-col gap-2">
                    <span className="tracking-tighter">Dr. Alice</span>
                    <div className="flex justify-center gap-1">
                      {renderStatusBadge("ok", "R1")}
                      {renderStatusBadge("pending", "R2")}
                    </div>
                  </div>
                </TableCell>

                <TableCell className="text-center bg-slate-50/30">
                  <Badge
                    variant="outline"
                    className="font-black uppercase text-[10px] tracking-widest border-slate-300"
                  >
                    Menunggu
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* header 2 */}
      <div className="mt-9 flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black text-slate-900 border-l-4 border-blue-600 pl-4">
          USULAN MAHASISWA
        </h2>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="w-1 font-bold text-center border-r">
                Kode Topik
              </TableHead>
              <TableHead className="w-1 font-bold text-center border-r">
                Reviewer 1
              </TableHead>
              <TableHead className="w-32 font-bold text-center border-r">
                Reviewer 2
              </TableHead>
              <TableHead className="w-32 font-bold text-center border-r">
                Reviewer 3
              </TableHead>
              <TableHead className="w-40 font-bold text-center">
                Hasil Akhir
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentTopics.map((topic) => (
              <TableRow key={topic.id} className="h-12">
                <TableCell className="text-center border-r py-2 px-1">
                  {topic.code}
                </TableCell>

                <TableCell className="text-center border-r py-2 px-1">
                  <div className="flex flex-col gap-2">
                    <span className="tracking-tighter">Dr. Banner</span>
                    <div className="flex justify-center gap-1">
                      {renderStatusBadge("minor", "R1")}
                      {renderStatusBadge("ok", "R2")}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center border-r py-2 px-1">
                  <div className="flex flex-col gap-2">
                    <span className="tracking-tighter">Dr. Bruce</span>
                    <div className="flex justify-center gap-1">
                      {renderStatusBadge("major", "R1")}
                      {renderStatusBadge("reject", "R2")}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center border-r py-2 px-1">
                  <div className="flex flex-col gap-2">
                    <span className="tracking-tighter">Dr. Alice</span>
                    <div className="flex justify-center gap-1">
                      {renderStatusBadge("ok", "R1")}
                      {renderStatusBadge("pending", "R2")}
                    </div>
                  </div>
                </TableCell>

                <TableCell className="text-center bg-slate-50/30">
                  <Badge
                    variant="outline"
                    className="font-black uppercase text-[10px] tracking-widest border-slate-300"
                  >
                    Menunggu
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default MonitoringReviewPage;
