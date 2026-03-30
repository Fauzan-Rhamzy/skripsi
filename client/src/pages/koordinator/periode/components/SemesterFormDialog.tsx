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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
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
  const [year, setYear] = useState("2025");
  const [term, setTerm] = useState("1");

  useEffect(() => {
    if (open && type === "edit" && initialData) {
      setFormData({ name: initialData.name, code: initialData.code });
    } else if (open && type === "add") {
      setFormData({ name: "", code: "" });
    }
  }, [open, type, initialData]);

  const handleAction = () => {
    const periode = `${year}${term}`;
    const formattedName = `Semester ${term === "1" ? "Ganjil" : "Genap"} ${year}/${parseInt(year) + 1}`;
    const customCode = parseInt(year) - 1966;
    // if (!formData.name || !formData.code) {
    //   alert("Semua field wajib diisi!");
    //   return;
    // }
    onSave({
      code: `${customCode}`,
      name: formattedName,
    });
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
            {type === "add" ? "Tambah Periode" : "Edit Periode"}
          </DialogTitle>
          <DialogDescription>
            Masukkan informasi semester baru di bawah ini.
          </DialogDescription>
        </DialogHeader>
        <div className="gap-4 py-4 flex">
          <div className="grid gap-2">
            {/* <Label htmlFor="name" className="font-bold">
              Nama Periode / Semester
            </Label> */}
            {/* <Input
              id="name"
              placeholder="Contoh: Semester Ganjil 2026/2027"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            /> */}
            <Label className="font-bold">Tahun Akademik</Label>
            <Select value={year} onValueChange={setYear}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            {/* <Label htmlFor="code" className="font-bold">
              Kode Semester
            </Label>
            <Input
              id="code"
              placeholder="Contoh: 61"
              value={formData.code}
              onChange={(e) =>
                setFormData({ ...formData, code: e.target.value })
              }
            /> */}
            <Label className="font-bold">Semester</Label>
            <Select value={term} onValueChange={setTerm}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Ganjil</SelectItem>
                <SelectItem value="2">Genap</SelectItem>
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

export default SemesterFormDialog;
