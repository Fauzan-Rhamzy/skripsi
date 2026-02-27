import { TableRow, TableCell } from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PickTopicDialog } from "./PickTopicDialog.tsx";

import type { TopicProps } from "../types.ts";

const handleConfirm = (id: string) => {
  console.log(`Ambil topik ${id}`);
};
const renderAction = (topic: TopicProps) => {
  switch (topic.status) {
    case "available":
      return (
        <PickTopicDialog
          topicTitle={topic.title}
          onConfirm={() => handleConfirm(topic.id)}
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

function TopicTableRow({ topic }: { topic: TopicProps }) {
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

        <TableCell className="p-3 border-r">{renderAction(topic)}</TableCell>

        <TableCell className="text-center font-bold text-slate-700">
          {topic.queueCount}
        </TableCell>
      </TableRow>
    </>
  );
}

export default TopicTableRow;
