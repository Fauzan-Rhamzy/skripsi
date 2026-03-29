import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { topics } from "./mockData";
import type { Topic } from "./types";
import { useEffect } from "react";
import { CheckCircle, Pencil } from "lucide-react";

const handleSelectTopic = (topic: Topic) => {
  console.log("Topik: ", topic);
};

export default function DosenReviewList() {
  useEffect(() => {
    console.log("Ambil data semua topik yang aktif di semester ini");
    // const topics = mockTopics;
  }, []);

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
                Review 1
              </TableHead>
              <TableHead className="w-32.5 font-bold text-slate-900 text-center border-r">
                Review 2
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

                <TableCell className="font-medium border-r">
                  {topic.lecturerCode}
                </TableCell>

                <TableCell className="text-center border-r">
                  {/* <Button asChild className="bg-green-500 hover:bg-green-600">
                    <Link
                      to="#"
                      className="text-sm font-semibold text-blue-600  flex items-center justify-center gap-1"
                    >
                      <CheckCircle />
                      Review 1
                    </Link>
                  </Button> */}
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 font-bold h-8"
                  >
                    <Link to={`/d/review/${topic.code}/1`}>
                      {/* <Link to={`/d/review/${topic.code}/1`}> */}
                      <CheckCircle className="h-4 w-4 mr-1" /> Review 1
                    </Link>
                  </Button>
                </TableCell>

                <TableCell className="text-center border-r">
                  <Button
                    asChild
                    className="bg-blue-500 hover:bg-blue-600 font-bold h-8"
                  >
                    <Link to={`/d/review/${topic.code}/2`}>
                      <Pencil className="h-4 w-4 mr-1" /> Review 2
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
