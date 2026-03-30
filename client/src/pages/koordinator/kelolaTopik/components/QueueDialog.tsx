import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Topic, StudentInQueue } from "../types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Clock, Award, X, UserCheck } from "lucide-react";

const formatDateOnly = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatTimeWithMs = (dateString: string) => {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString("id-ID", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formatedTime = time.replaceAll(".", ":");
  const ms = date.getMilliseconds().toString().padStart(3, "0");
  return `${formatedTime}:${ms}`; // Result: "14:30:15.000"
};

function QueueDialog({
  topic,
  children,
}: {
  topic: Topic;
  children: React.ReactNode;
}) {
  const [localStudents, setLocalStudents] = useState<StudentInQueue[]>(
    topic.students || [],
  );

  const [taker, setTaker] = useState<StudentInQueue | null>(null);

  const handleAssign = (student: StudentInQueue) => {
    setTaker(student);
    setLocalStudents((prev) => prev.filter((s) => s.id !== student.id));
    // In a real app: topic.status = 'taken', winner = student.id
  };

  const handleRemove = (studentId: string) => {
    if (
      confirm("Apakah Anda yakin ingin menghapus mahasiswa ini dari antrean?")
    ) {
      setLocalStudents((prev) => prev.filter((s) => s.id !== studentId));
    }
  };

  const [sortBy, setSortBy] = useState<"time" | "ipk">("time");

  const students = [...localStudents];
  const sortedStudents =
    sortBy === "ipk"
      ? students.sort((a, b) => b.ipk - a.ipk)
      : students.sort(
          (a, b) =>
            new Date(a.applyDate).getTime() - new Date(b.applyDate).getTime(),
        );
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">
              Kelola Antrean
            </DialogTitle>
            <DialogDescription>
              {topic.title} ({topic.code})
            </DialogDescription>
          </DialogHeader>
          <div>
            <div>
              <span className="mr-2">Status:</span>
              {taker ? (
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  Sudah Diambil
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  Dalam Antrean
                </Badge>
              )}
            </div>
            <div>
              <span>Pengambil:</span>
              {taker ? (
                <span className="ml-2 font-black text-slate-900">
                  {taker.name} - {taker.npm}
                </span>
              ) : (
                <span className="ml-2 text-slate-900">-</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 mb-4">
            <span className="text-xs font-bold">URUTKAN:</span>
            <Button
              variant={sortBy === "time" ? "default" : "outline"}
              size="sm"
              className={
                sortBy === "time"
                  ? "h-8 text-xs font-bold hover:cursor-pointer bg-blue-500 hover:bg-blue-600"
                  : "h-8 text-xs font-bold hover:cursor-pointer"
              }
              onClick={() => setSortBy("time")}
            >
              <Clock className="mr-1.5 h-3.5 w-3.5" /> Waktu
            </Button>
            <Button
              variant={sortBy === "ipk" ? "default" : "outline"}
              size="sm"
              className={
                sortBy === "ipk"
                  ? "h-8 text-xs font-bold hover:cursor-pointer bg-blue-500 hover:bg-blue-600"
                  : "h-8 text-xs font-bold hover:cursor-pointer"
              }
              onClick={() => setSortBy("ipk")}
            >
              <Award className="mr-1.5 h-3.5 w-3.5" /> IPK
            </Button>
          </div>

          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            <p className="text-sm font-black">Antrean:</p>
            {sortedStudents.map((student) => (
              // kotak antrean
              <div
                key={student.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-xl bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all border-slate-200 gap-4"
              >
                {/* kotak perorang */}
                <div className="flex-1 min-w-0">
                  <div className="font-black text-slate-900 text-base leading-tight truncate">
                    {student.name}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2 items-center">
                    <Badge variant="outline" className="h-5 px-1.5 text-[11px]">
                      NPM: {student.npm}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 whitespace-nowrap">
                      <Clock className="h-3 w-3 text-blue-500" />
                      <span>{formatDateOnly(student.applyDate)}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-blue-600 font-black tabular-nums ml-1">
                        {formatTimeWithMs(student.applyDate)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 border-t sm:border-0 pt-3 sm:pt-0">
                  <div className="text-left sm:text-right shrink-0">
                    <div className="text-[10px] font-black uppercase text-slate-400 leading-none mb-1">
                      IPK
                    </div>
                    <div className="font-black text-sm text-blue-600">
                      {student.ipk}
                    </div>
                  </div>

                  <div className="flex gap-2 shrink-0">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 font-bold h-9 hover:cursor-pointer px-4"
                      onClick={() => handleAssign(student)}
                      disabled={!!taker}
                    >
                      <UserCheck className="mr-1.5 h-4 w-4" /> Assign
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => handleRemove(student.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default QueueDialog;
