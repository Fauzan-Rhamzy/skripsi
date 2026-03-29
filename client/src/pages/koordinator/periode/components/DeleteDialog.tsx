import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";

interface Props {
  semesterName: string;
  onConfirm: () => void;
}

function DeleteDialog({ semesterName, onConfirm }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-red-400 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-black text-2xl">
            Hapus Periode
          </DialogTitle>
          <DialogDescription>
            Apakah Anda yakin ingin menghapus <strong>{semesterName}</strong>?
            Tindakan ini tidak dapat dibatalkan.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {/* Close button could be a DialogClose here if needed */}
          <Button variant="ghost">Batal</Button>
          <Button
            className="bg-red-600 hover:bg-red-700 font-bold"
            onClick={onConfirm} // <--- Wire this up!
          >
            Ya, Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
