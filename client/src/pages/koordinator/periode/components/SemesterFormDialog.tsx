import { useState, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit2 } from "lucide-react";

interface Semester {
  id: string;
  name: string;
  code: string;
  isActive: boolean;
}

interface Props {
  type: "add" | "edit";
  initialData?: Semester;
  onSave: (data: Partial<Semester>) => void;
}

function SemesterFormDialog({ type, initialData, onSave }: Props) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    code: initialData?.code || "",
  });

  useEffect(() => {
    if (open && type === "edit" && initialData) {
      setFormData({ name: initialData.name, code: initialData.code });
    } else if (open && type === "add") {
      setFormData({ name: "", code: "" });
    }
  }, [open, type, initialData]);

  const handleAction = () => {
    if (!formData.name || !formData.code) {
      alert("Semua field wajib diisi!");
      return;
    }
    onSave(formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {type === "add" ? (
          <Button className="bg-green-600 hover:bg-green-700 font-bold">
            <Plus className="mr-2 h-4 w-4" /> Tambah Periode Baru
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400"
          >
            <Edit2 className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-black text-2xl">
            {type === "add" ? "Tambah Periode" : "Edit Periode"}
          </DialogTitle>
          <DialogDescription>
            Masukkan informasi semester baru di bawah ini.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="font-bold">
              Nama Periode / Semester
            </Label>
            <Input
              id="name"
              placeholder="Contoh: Semester Ganjil 2026/2027"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="code" className="font-bold">
              Kode Semester
            </Label>
            <Input
              id="code"
              placeholder="Contoh: 61"
              value={formData.code}
              onChange={(e) =>
                setFormData({ ...formData, code: e.target.value })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Batal
          </Button>
          <Button className="bg-blue-600 font-bold px-8" onClick={handleAction}>
            {type === "add" ? "Simpan" : "Update"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SemesterFormDialog;
