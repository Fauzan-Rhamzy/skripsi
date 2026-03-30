import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PickTopicDialog } from "./PickTopicDialog.tsx";
import { TopicNotesDialog } from "@/components/TopicNotesDialog.tsx";

import type { Topic } from "../types.ts";
import { Link } from "react-router-dom";

const renderAction = (
  topic: Topic,
  onSelectTopic: (topic: Topic) => void,
  disabled: boolean,
) => {
  switch (topic.status) {
    case "available":
      return (
        <PickTopicDialog
          topicTitle={topic.title}
          onConfirm={() => onSelectTopic(topic)}
          disabled={disabled}
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
        <Badge className="w-full justify-center py-1.5 bg-blue-600 text-white shadow-md">
          Diambil
        </Badge>
      );
    case "taken":
      return (
        <Badge className="w-full bg-gray-200 text-gray-500 border border-gray-300">
          Tidak Tersedia
        </Badge>
      );
    default:
      return null;
  }
};

function TopicTableRow({
  topic,
  onSelectTopic,
  disabled,
}: {
  topic: Topic;
  onSelectTopic: (topic: Topic) => void;
  disabled: boolean;
}) {
  return (
    <>
      <TableRow key={topic.id}>
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
            to={`./topic/${topic.code}`}
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
          {renderAction(topic, onSelectTopic, disabled)}
        </TableCell>

        <TableCell className="text-center font-bold text-slate-700">
          {topic.queueCount}
        </TableCell>
      </TableRow>
    </>
  );
}

export default TopicTableRow;
