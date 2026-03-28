import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

import { DeleteTopicDialog } from "./DeleteTopicDialog.tsx";
import QueueDialog from "./QueueDialog.tsx";
import StudentTopicFormDialog from "./StudentTopicFormDialog.tsx";
import type { Topic } from "../types.ts";
import { Link } from "react-router-dom";

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

        <TableCell className="p-3 border-r align-middle text-center">
          Nama mahasiswa
          <br />
          NPM
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
            <StudentTopicFormDialog type="editTopic" initialTopic={topic} />
            <DeleteTopicDialog topicTitle={topic.title} />
          </div>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TopicTableRow;
