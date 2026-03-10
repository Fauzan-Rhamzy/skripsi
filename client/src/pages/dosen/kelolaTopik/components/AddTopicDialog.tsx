import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Plus, FileUp } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

function AddTopicDialog() {
  const [contentType, setContentType] = useState("pdf");

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-600 font-bold">
            <Plus className="mr-2 h-5 w-5" /> Tambah Topik
          </Button>
        </DialogTrigger>
        <DialogContent
          className={`${contentType === "text" ? "sm:max-w-[95vw] sm:h-[95vh]" : "sm:max-w-2xl"} transition-all duration-300`}
        >
          <DialogHeader className="pb-4 border-b">
            <DialogTitle className="text-2xl font-black text-slate-900">
              Tambah Topik Baru
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 pt-6">
            {/* KODE & JUDUL */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="sm:col-span-1">
                <Label className="font-bold">Kode Topik</Label>
                <Input placeholder="e.g. FR01" className="mt-1.5" />
              </div>
              <div className="sm:col-span-3">
                <Label className="font-bold">Judul Topik</Label>
                <Input
                  placeholder="Masukkan judul lengkap topik..."
                  className="mt-1.5"
                />
              </div>
            </div>

            {/* 2. CATATAN */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="font-bold">Catatan untuk Reviewer</Label>
                <Textarea
                  placeholder="Pesan khusus untuk dosen reviewer..."
                  className="mt-1.5 h-24"
                />
              </div>
              <div>
                <Label className="font-bold">Catatan untuk Mahasiswa</Label>
                <Textarea
                  placeholder="Prasyarat atau info tambahan..."
                  className="mt-1.5 h-24"
                />
              </div>
            </div>

            {/* 3. SETTINGS */}
            <div className="flex items-center space-x-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <Checkbox id="revised" />
              <label
                htmlFor="revised"
                className="text-sm font-bold text-slate-700"
              >
                Topik ini sudah direvisi dari semester sebelumnya
              </label>
            </div>

            {/* 4. CONTENT TYPE (RADIO) */}
            <div className="space-y-4 pt-4 border-t">
              <Label className="font-black text-slate-900">
                Konten Deskripsi Topik
              </Label>
              <RadioGroup
                defaultValue="pdf"
                className="flex gap-6 mt-2"
                onValueChange={(value) => setContentType(value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pdf" id="pdf" />
                  <Label htmlFor="pdf" className="font-bold">
                    Upload PDF
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="text" id="text" />
                  <Label htmlFor="text" className="font-bold">
                    Input Teks
                  </Label>
                </div>
              </RadioGroup>

              <div className="mt-4 p-4 border-2 border-dashed rounded-xl border-slate-200">
                {contentType === "pdf" ? (
                  <div className="flex flex-col items-center justify-center py-6">
                    <FileUp className="h-8 w-8 text-slate-400 mb-2" />
                    <p className="text-xs text-slate-500">
                      Pilih file PDF deskripsi topik
                    </p>
                  </div>
                ) : (
                  <Textarea
                    placeholder="Tuliskan deskripsi lengkap topik di sini..."
                    className="h-40 border-none shadow-none focus-visible:ring-0"
                  />
                )}
              </div>
            </div>
          </div>

          <DialogFooter className="mt-8 gap-2">
            <DialogClose asChild>
              <Button variant="ghost" className="font-bold">
                Batal
              </Button>
            </DialogClose>
            <Button className="bg-blue-600 hover:bg-blue-700 font-bold px-8">
              Simpan Topik
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddTopicDialog;
