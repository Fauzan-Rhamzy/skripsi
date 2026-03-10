import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

import { DeleteTopicDialog } from "./DeleteTopicDialog.tsx";
import QueueDialog from "./QueueDialog.tsx";
import type { Topic } from "../types.ts";
import { Link } from "react-router-dom";

const renderAction = (topic: Topic) => {
  switch (topic.status) {
    case "available":
      return (
        <Badge
          variant="outline"
          className="w-full justify-center py-1.5 bg-green-200 text-green-900 border-green-900 font-black"
        >
          Tersedia
        </Badge>
      );
    case "queued":
      return (
        <Badge
          variant="outline"
          className="w-full justify-center py-1.5 bg-blue-200 text-blue-900 border-blue-900 font-black hover:cursor-pointer hover:bg-blue-400"
          // onClick={()=>}
        >
          {`Antrean: ${topic.queueCount}`}
        </Badge>
      );
    case "taken":
      return (
        <Badge
          variant="outline"
          className="w-full justify-center py-1.5 bg-red-200 text-red-900 border-red-900 font-black"
        >
          Diambil
        </Badge>
      );
    default:
      return null;
  }
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
          {topic.status === "queued" ? (
            <QueueDialog topic={topic} />
          ) : (
            renderAction(topic)
          )}
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
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 text-slate-500 hover:text-slate-900 hover:cursor-pointer"
            >
              <Edit2 className="h-4 w-4" />
            </Button>
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
