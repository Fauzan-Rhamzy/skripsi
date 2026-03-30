import { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { topics as mockTopics } from "../kelolaTopik/mockData";
import { ReviewerSelect } from "./components/ReviewerSelect.tsx";
import { Button } from "@/components/ui/button.tsx";
import type { Topic } from "../kelolaTopik/types.ts";

function AturReviewerPage() {
  const [topics, setTopics] = useState(mockTopics);
  const [topicsStudents, setTopicsStudents] = useState(mockTopics);

  const updateReviewerLecturer = (
    topicId: string,
    reviewerIndex: 1 | 2 | 3,
    lecturer: any,
  ) => {
    setTopics((prevTopics) =>
      prevTopics.map((t) => {
        if (t.id === topicId) {
          const updatedReviewers = t.reviewers
            ? [...t.reviewers]
            : ["", "", ""];
          updatedReviewers[reviewerIndex - 1] = lecturer.code;
          return { ...t, reviewers: updatedReviewers };
        }
        return t;
      }),
    );
  };

  const updateReviewerStudent = (
    topicId: string,
    reviewerIndex: 1 | 2 | 3,
    lecturer: any,
  ) => {
    setTopicsStudents((prevTopics) =>
      prevTopics.map((t) => {
        if (t.id === topicId) {
          const updatedReviewers = [...(t.reviewers || [])];
          updatedReviewers[reviewerIndex - 1] = lecturer.code;
          return { ...t, reviewers: updatedReviewers };
        }
        return t;
      }),
    );
  };

  const handleSave = (data: any) => {
    console.log("Saving all assigned reviewers:", data);
    alert("Semua Reviewer Berhasil Disimpan!");
  };

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

      {/* tabel topik dosen */}
      <div className="rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 border-b">
            <TableRow>
              <TableHead className="w-20 font-bold text-center border-r">
                Kode Topik
              </TableHead>
              <TableHead className="w-48 font-bold text-center border-r">
                Reviewer 1
              </TableHead>
              <TableHead className="w-48 font-bold text-center border-r">
                Reviewer 2
              </TableHead>
              <TableHead className="w-48 font-bold text-center">
                Reviewer 3
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topics.map((topic) => (
              <TableRow key={topic.id} className="hover:bg-slate-50">
                <TableCell className="text-center border-r">
                  {topic.code}
                </TableCell>

                {/* select reviewer */}
                <TableCell className="p-2 border-r">
                  <ReviewerSelect
                    placeholder="Pilih Reviewer 1"
                    onSelect={(lecturer) =>
                      updateReviewerLecturer(topic.id, 1, lecturer)
                    }
                  />
                </TableCell>
                <TableCell className="p-2 border-r">
                  <ReviewerSelect
                    placeholder="Pilih Reviewer 2"
                    onSelect={(lecturer) =>
                      updateReviewerLecturer(topic.id, 2, lecturer)
                    }
                  />
                </TableCell>
                <TableCell className="p-2">
                  <ReviewerSelect
                    placeholder="Pilih Reviewer 3"
                    onSelect={(lecturer) =>
                      updateReviewerLecturer(topic.id, 3, lecturer)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <div className="flex gap-2 mt-3">
          <Button variant="ghost" onClick={() => window.location.reload()}>
            Batal
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600 font-bold"
            onClick={() => {
              handleSave(topics);
            }}
          >
            Simpan Perubahan
          </Button>
        </div>
      </div>

      {/* header 2 */}
      <div className="mt-9 flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black text-slate-900 border-l-4 border-blue-600 pl-4">
          USULAN MAHASISWA
        </h2>
      </div>

      {/* tabel topik mahasiswa */}
      <div className="rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 border-b">
            <TableRow>
              <TableHead className="w-20 font-bold text-center border-r">
                Kode Topik
              </TableHead>
              <TableHead className="w-48 font-bold text-center border-r">
                Reviewer 1
              </TableHead>
              <TableHead className="w-48 font-bold text-center border-r">
                Reviewer 2
              </TableHead>
              <TableHead className="w-48 font-bold text-center">
                Reviewer 3
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topicsStudents.map((topic) => (
              <TableRow key={topic.id} className="hover:bg-slate-50">
                <TableCell className="text-center border-r">
                  {topic.code}
                </TableCell>

                {/* select reviewer */}
                <TableCell className="p-2 border-r">
                  <ReviewerSelect
                    placeholder="Pilih Reviewer 1"
                    onSelect={(lecturer) =>
                      updateReviewerStudent(topic.id, 1, lecturer)
                    }
                  />
                </TableCell>
                <TableCell className="p-2 border-r">
                  <ReviewerSelect
                    placeholder="Pilih Reviewer 2"
                    onSelect={(lecturer) =>
                      updateReviewerStudent(topic.id, 2, lecturer)
                    }
                  />
                </TableCell>
                <TableCell className="p-2">
                  <ReviewerSelect
                    placeholder="Pilih Reviewer 3"
                    onSelect={(lecturer) =>
                      updateReviewerStudent(topic.id, 3, lecturer)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <div className="flex gap-2 mt-3">
          <Button variant="ghost" onClick={() => window.location.reload()}>
            Batal
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600 font-bold"
            onClick={() => {
              handleSave(topicsStudents);
            }}
          >
            Simpan Perubahan
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AturReviewerPage;
