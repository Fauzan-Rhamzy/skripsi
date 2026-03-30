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
import { Edit2, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Lecturer {
  id: string;
  name: string;
  email: string;
  code: string;
  role: string;
}

interface Props {
  type: "add" | "edit";
  initialData?: Lecturer;
  onSave: (data: any) => void;
}

function LecturerFormDialog({ type, initialData, onSave }: Props) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    code: initialData?.code || "",
    role: initialData?.role || "lecturer",
  });

  useEffect(() => {
    if (open) {
      if (type === "edit" && initialData) {
        setFormData({ ...initialData });
      } else {
        setFormData({ name: "", email: "", code: "", role: "lecturer" });
      }
    }
  }, [open, type, initialData]);

  const handleAction = () => {
    onSave(formData);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {type === "add" ? (
          <Button className="bg-green-600 hover:bg-green-700 font-bold">
            <Plus className="mr-2 h-4 w-4" /> Tambah User
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 text-slate-500 hover:text-slate-900 hover:cursor-pointer"
          >
            <Edit2 className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-black text-2xl">
            {type === "add" ? "Tambah User Baru" : "Edit User"}
          </DialogTitle>
          <DialogDescription>
            Masukkan informasi dosen di bawah ini.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="font-bold">
              Nama Lengkap
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="code" className="font-bold">
              Kode Dosen
            </Label>
            <Input
              id="code"
              value={formData.code}
              onChange={(e) =>
                setFormData({ ...formData, code: e.target.value.toUpperCase() })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="font-bold">
              Email (Google)
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role" className="font-bold">
              Role
            </Label>
            <Select
              value={formData.role}
              onValueChange={(val) => setFormData({ ...formData, role: val })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lecturer">Dosen</SelectItem>
                <SelectItem value="coordinator">Koordinator</SelectItem>
              </SelectContent>
            </Select>
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

export default LecturerFormDialog;
