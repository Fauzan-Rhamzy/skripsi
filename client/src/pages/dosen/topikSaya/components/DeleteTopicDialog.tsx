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
import { Trash2 } from "lucide-react";

interface PickTopicDialogProps {
  topicTitle: string;
  // onConfirm: () => void;
}

export function DeleteTopicDialog({
  topicTitle,
  // onConfirm,
}: PickTopicDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 hover:cursor-pointer"
          variant="outline"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Hapus topik ini?
            <br />
            <span className="text-blue-600">{topicTitle}</span>?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan ini tidak dapat dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => console.log("Batal hapus topik")}
            className="hover:cursor-pointer"
          >
            Batal
          </AlertDialogCancel>
          <AlertDialogAction
            //onClick={onConfirm}
            className="bg-red-600 hover:bg-red-800 hover:cursor-pointer"
          >
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
