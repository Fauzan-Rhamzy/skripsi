import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const topics = [
  {
    id: "1",
    code: "FR01",
    title: "Implementasi Deep Learning pada Citra Medis",
    lecturerCode: "FR",
    hasNotes: true,
    status: "available",
    queueCount: 0,
  },
  {
    id: "2",
    code: "DR01",
    title: "Pengembangan Sistem IoT Berbasis LoRa",
    lecturerCode: "DR",
    hasNotes: false,
    status: "queued",
    queueCount: 3,
  },
  {
    id: "3",
    code: "DR02",
    title: "Analisis Sentimen Menggunakan NLP Transformer",
    lecturerCode: "DR",
    hasNotes: true,
    status: "selected",
    queueCount: 4,
  },
  {
    id: "4",
    code: "DR03",
    title: "Rancang Bangun Aplikasi E-Commerce Microservices",
    lecturerCode: "DR",
    hasNotes: false,
    status: "taken",
    queueCount: 5,
  },
];

export default function StudentDashboardPage() {
  const renderAction = (status: string) => {
    switch (status) {
      case "available":
        return (
          <Button
            size="sm"
            className="w-full bg-green-600 hover:bg-green-800 font-bold border-2 transition-all hover:cursor-pointer"
          >
            Ambil
          </Button>
        );
      case "queued":
        return (
          <Badge
            variant="outline"
            className="w-full justify-center py-1.5 bg-blue-50 text-blue-700 border-blue-200"
          >
            Dalam Antrean
          </Badge>
        );
      case "selected":
        return (
          <Badge className="w-full justify-center py-1.5 bg-blue-600 hover:bg-blue-700 text-white shadow-md">
            Terpilih
          </Badge>
        );
      case "taken":
        return (
          <Button
            disabled
            size="sm"
            variant="secondary"
            className="w-full bg-gray-200 text-gray-500 border border-gray-300"
          >
            Diambil
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">
          Semester Ganjil 2025/2026
        </h1>
        <p className="text-muted-foreground mt-1">
          Silakan pilih topik skripsi yang tersedia di bawah ini.
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
                Aksi
              </TableHead>
              <TableHead className="w-20 font-bold text-slate-900 text-center">
                Antrean
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topics.map((topic) => (
              <TableRow key={topic.id} className="hover:bg-slate-50">
                <TableCell className="font-medium text-center border-r">
                  {topic.code}
                </TableCell>
                <TableCell className="font-medium border-r">
                  {topic.title}
                </TableCell>
                <TableCell className="text-center border-r">
                  {topic.lecturerCode}
                </TableCell>

                <TableCell className="text-center border-r">
                  <a
                    href="#"
                    className="text-sm font-semibold text-blue-600 hover:underline flex items-center justify-center gap-1"
                  >
                    Lihat Topik
                  </a>
                </TableCell>

                <TableCell className="text-center border-r">
                  {topic.hasNotes ? (
                    <a
                      href="#"
                      className="text-sm font-semibold text-blue-600 hover:underline flex items-center justify-center gap-1"
                    >
                      Lihat Catatan
                    </a>
                  ) : (
                    <span className="text-gray-300">-</span>
                  )}
                </TableCell>

                <TableCell className="p-3 border-r">
                  {renderAction(topic.status)}
                </TableCell>

                <TableCell className="text-center font-bold text-slate-700">
                  {topic.queueCount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-center">Kode Topik</th>
              <th className="p-4 font-semibold ">Judul Topik</th>
              <th className="p-4 font-semibold text-center">Kode Dosen</th>
              <th className="p-4 font-semibold text-center">Topik</th>
              <th className="p-4 font-semibold text-center">Catatan</th>
              <th className="p-4 font-semibold text-center">Aksi</th>
              <th className="p-4 font-semibold text-center">Antrean</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((topic) => (
              <tr
                key={topic.kode_topik}
                className="border-b last:border-0 hover:bg-slate-50"
              >
                <td className="p-4 font-mono text-center">
                  {topic.kode_topik}
                </td>
                <td className="p-4">{topic.judul}</td>
                <td className="p-4 font-mono text-center">
                  {topic.kode_dosen}
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:underline hover:cursor-pointer font-medium">
                    Lihat Topik
                  </button>
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:underline hover:cursor-pointer font-medium">
                    Detail
                  </button>
                </td>
                <td className="p-4 text-center ">
                  <Button
                    className="hover:underline hover:cursor-pointer"
                    disabled={topic.status === "diambil"}
                    variant={topic.status !== "diambil" ? "success" : "ghost"}
                  >
                    Ambil
                  </Button>
                </td>
                <td className="p-4 text-center">{topic.antrean}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}
