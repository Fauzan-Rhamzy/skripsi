import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, UserCheck } from "lucide-react";

import { DeleteTopicDialog } from "./DeleteTopicDialog.tsx";
import QueueDialog from "./QueueDialog.tsx";
import type { Topic } from "../types.ts";
import { Link } from "react-router-dom";
import TopicFormDialog from "./LecturerTopicFormDialog.tsx";
import { TopicNotesDialog } from "@/components/TopicNotesDialog.tsx";

const renderAction = (topic: Topic) => {
  const isTaken = topic.status === "taken";
  // switch (topic.status) {
  //   case "available":
  //     return (
  //       <Button
  //         variant="default"
  //         className="bg-green-600 hover:bg-green-700 text-white border-green-700 shadow-sm"
  //       >
  //         Tersedia
  //       </Button>
  //     );
  //   case "queued":
  //     return (
  //       <Button
  //         variant="outline"
  //         className="bg-blue-600 hover:bg-blue-700 text-white border-blue-700 shadow-sm"
  //         // onClick={()=>}
  //       >
  //         {`Antrean: ${topic.queueCount}`}
  //       </Button>
  //     );
  //   case "taken":
  //     return (
  //       <Button
  //         variant="outline"
  //         className="w-full justify-center py-1.5 bg-red-200 text-red-900 border-red-900 font-black"
  //       >
  //         Diambil
  //       </Button>
  //     );
  //   default:
  //     return null;
  // }
  return (
    <QueueDialog topic={topic}>
      <Button
        className={`w-full justify-center py-2 rounded-lg font-bold shadow-sm transition-all hover:cursor-pointer ${
          isTaken
            ? "bg-green-500 text-white hover:bg-green-700 hover:shadow-md" // taken
            : "bg-blue-500 text-white border-blue-700 hover:bg-blue-600 hover:shadow-md" // antrean
        }`}
      >
        <div className="flex items-center gap-2">
          {isTaken ? (
            // terpilih
            <span className="flex items-center gap-2">
              <UserCheck className="h-4 w-4" />
              Terpilih
            </span>
          ) : (
            // antrean
            <span className="flex items-center gap-2">
              Antrean
              <span className="bg-white text-blue-600 px-2 py-0.5 rounded-full text-[10px] font-black">
                {topic.queueCount}
              </span>
            </span>
          )}
        </div>
      </Button>
    </QueueDialog>
  );
};

function TopicTableRow({ topic }: { topic: Topic }) {
  return (
    <>
      <TableRow key={topic.id} className="hover:bg-slate-50">
        <TableCell className="font-medium text-center border-r">
          {topic.code}
        </TableCell>
        <TableCell className="font-medium border-r">{topic.title}</TableCell>

        <TableCell className="text-center border-r">
          <a
            href={`/topic/${topic.id}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-blue-600 hover:underline flex items-center justify-center gap-1"
          >
            Lihat Topik
          </a>
        </TableCell>

        <TableCell className="text-center border-r">
          {topic.hasNotes ? (
            <div className="flex items-center justify-center gap-1">
              <TopicNotesDialog title={topic.title} notes="contoh catatan" />
            </div>
          ) : (
            <span className="text-gray-300">-</span>
          )}
        </TableCell>

        <TableCell className="p-3 border-r">
          {/* {topic.status === "queued" ? (
            <QueueDialog topic={topic} />
          ) : ( */}
          {renderAction(topic)}
          {/* )} */}
        </TableCell>

        <TableCell className="text-center font-bold text-slate-700">
          <div className="flex items-center justify-center gap-1.5">
            <Button
              size="sm"
              className="h-7 border-black text-white bg-blue-500 hover:bg-blue-600 hover:text-white hover:cursor-pointer"
              asChild
            >
              <Link to="./reviews">Hasil Review</Link>
              {/* <Link to={./reviews/${topic.code}}> */}
            </Button>
            {/* <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 text-slate-500 hover:text-slate-900 hover:cursor-pointer"
            >
              <Edit2 className="h-4 w-4" />
            </Button> */}
            <TopicFormDialog type="editTopic" initialTopic={topic} />
            <DeleteTopicDialog topicTitle={topic.title} />
            {/* <Button
            variant="outline"
            size="icon"
            className="h-7 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 hover:cursor-pointer"
          >
            <Trash2 className="h-4 w-4" />
          </Button> */}
          </div>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TopicTableRow;
