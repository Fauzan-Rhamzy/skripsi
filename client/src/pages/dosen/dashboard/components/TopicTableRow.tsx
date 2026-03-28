import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type { Topic } from "../types.ts";
import { TopicNotesDialog } from "@/components/TopicNotesDialog.tsx";

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
          className="w-full justify-center py-1.5 bg-blue-200 text-blue-900 border-blue-900 font-black"
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
          {topic.lecturerCode}
        </TableCell>

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

        <TableCell className="p-3 border-r">{renderAction(topic)}</TableCell>

        <TableCell className="text-center font-bold text-slate-700">
          {topic.queueCount}
        </TableCell>
      </TableRow>
    </>
  );
}

export default TopicTableRow;
