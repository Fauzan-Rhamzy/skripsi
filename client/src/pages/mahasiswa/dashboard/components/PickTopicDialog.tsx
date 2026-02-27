import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface PickTopicDialogProps {
  topicTitle: string;
  onConfirm: () => void;
}

export function PickTopicDialog({
  topicTitle,
  onConfirm,
}: PickTopicDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="w-full bg-green-600 hover:bg-green-800 hover:text-white font-bold border-2 transition-all hover:cursor-pointer text-white"
          variant="outline"
        >
          Ambil
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Apa kamu yakin ingin mengambil topik:
            <br />
            <span className="text-green-600">{topicTitle}</span>?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan ini akan mendaftarkan Anda ke dalam antrean topik tersebut.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => console.log("Batal ambil topik")}
            className="hover:cursor-pointer"
          >
            Tidak
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="hover:bg-green-700 text-white border-0 !bg-green-600 hover:cursor-pointer"
          >
            Ya, Ambil
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
