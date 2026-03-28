import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageSquare } from "lucide-react";

interface TopicNotesDialogProps {
  title: string;
  notes: string;
}

export function TopicNotesDialog({ title, notes }: TopicNotesDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm font-semibold text-blue-600 hover:underline flex items-center justify-center gap-1 cursor-pointer">
          Lihat Catatan
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            Catatan Dosen
          </DialogTitle>
        </DialogHeader>
        <p className=" leading-relaxed">
          {notes || "Tidak ada catatan tambahan."}
        </p>
      </DialogContent>
    </Dialog>
  );
}
