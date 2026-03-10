import { useState, useMemo } from "react";
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
  const ms = date.getMilliseconds().toString().padStart(3, "0");
  return `${time}.${ms}`; // Result: "14:30:15.000"
};

function QueueDialog({ topic }: { topic: Topic }) {
  const [sortBy, setSortBy] = useState<"time" | "ipk">("time");
  const sortedStudents = useMemo(() => {
    if (!topic.students) return [];
    const students = [...topic.students];

    if (sortBy === "ipk") {
      return students.sort((a, b) => b.ipk - a.ipk);
    }
    return students.sort(
      (a, b) =>
        new Date(a.applyDate).getTime() - new Date(b.applyDate).getTime(),
    );
  }, [topic.students, sortBy]);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-center py-1.5 bg-blue-200 text-blue-900 border-blue-900 font-black hover:cursor-pointer hover:bg-blue-300 transition-colors"
          >
            {`Antrean: ${topic.queueCount}`}
          </Button>
        </DialogTrigger>
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
              <span>Status:</span>
              <Badge variant="outline" className="ml-2">
                Dalam Antrean
              </Badge>
            </div>
            <div>
              <span>Pengambil:</span>
              <Badge variant="outline" className="ml-2">
                -
              </Badge>
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
                className="flex items-center justify-between p-4 border rounded-xl bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all border-slate-200"
              >
                {/* kotak perorang */}
                <div className="flex-1">
                  <div className="font-black text-slate-900 text-m leading-tight truncate max-w-[200px]">
                    {student.name}
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="h-4 px-1.5 text-m font-mono border-slate-200 text-slate-500 uppercase"
                      >
                        NPM: {student.npm}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                      <Clock className="h-3 w-3 text-blue-500" />
                      <span>{formatDateOnly(student.applyDate)}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-blue-600 font-black tabular-nums">
                        {formatTimeWithMs(student.applyDate)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-[10px] font-black uppercase text-slate-400 leading-none mb-1">
                      IPK
                    </div>
                    <div className="font-black text-sm text-blue-600">
                      {student.ipk}
                    </div>
                  </div>

                  <div className="flex gap-1.5 ml-2">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 font-bold h-9 hover:cursor-pointer"
                    >
                      <UserCheck className="mr-1.5 h-4 w-4" /> Assign
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 text-red-500 hover:text-red-600 hover:bg-red-50 hover:cursor-pointer"
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
