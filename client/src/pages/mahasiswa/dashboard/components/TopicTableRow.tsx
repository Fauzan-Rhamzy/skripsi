import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PickTopicDialog } from "./PickTopicDialog";
import { TopicNotesDialog } from "@/components/TopicNotesDialog.tsx";

import type { Topic } from "../types.ts";
import { Link } from "react-router-dom";

const renderAction = (topic: Topic, onSelectTopic: (topic: Topic) => void) => {
  switch (topic.status) {
    case "available":
      return (
        <PickTopicDialog
          topicTitle={topic.title}
          onConfirm={() => onSelectTopic(topic)}
        />
        // <Button
        //   size="sm"
        //   className="w-full bg-green-600 hover:bg-green-800 font-bold border-2 transition-all hover:cursor-pointer"
        // >
        //   Ambil
        // </Button>
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

function TopicTableRow({
  topic,
  onSelectTopic,
}: {
  topic: Topic;
  onSelectTopic: (topic: Topic) => void;
}) {
  return (
    <>
      <TableRow key={topic.id} className="hover:bg-slate-50">
        <TableCell className="font-medium text-center border-r">
          {topic.code}
        </TableCell>
        <TableCell className="font-medium border-r">{topic.title}</TableCell>
        <TableCell className="text-center border-r">
          {topic.lecturerCode}
        </TableCell>

        <TableCell className="text-center border-r">
          {/* <a
            href="#"
            className="text-sm font-semibold text-blue-600 hover:underline flex items-center justify-center gap-1"
          >
            Lihat Topik
          </a> */}
          <Link
            to={`./topic/${topic.id}`}
            className="text-sm font-semibold text-blue-600 hover:underline flex items-center justify-center gap-1"
          >
            Lihat Topik
          </Link>
        </TableCell>

        <TableCell className="text-center border-r">
          {/* {topic.hasNotes ? (
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:underline flex items-center justify-center gap-1"
            >
              Lihat Catatan
            </a>
          ) : (
            <span className="text-gray-300">-</span>
          )} */}
          {topic.hasNotes ? (
            <div className="flex items-center justify-center gap-1">
              <TopicNotesDialog title={topic.title} notes="contoh catatan" />
            </div>
          ) : (
            <span className="text-gray-300">-</span>
          )}
        </TableCell>

        <TableCell className="p-3 border-r">
          {renderAction(topic, onSelectTopic)}
        </TableCell>

        <TableCell className="text-center font-bold text-slate-700">
          {topic.queueCount}
        </TableCell>
      </TableRow>
    </>
  );
}

export default TopicTableRow;
