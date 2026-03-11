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
import { MinimalTiptapEditor } from "@/components/minimal-tiptap";
import type { Content } from "@tiptap/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

function AddTopicDialog() {
  const [contentType, setContentType] = useState("pdf");
  const [editorValue, setEditorValue] = useState<Content>(""); // State for the editor

  return (
    <>
      <Dialog
        onOpenChange={(open) => {
          if (open) {
            setEditorValue("");
            setContentType("pdf");
          }
        }}
      >
        <DialogTrigger asChild>
          <Button className="bg-green-600 font-bold">
            <Plus className="mr-2 h-5 w-5" /> Tambah Topik
          </Button>
        </DialogTrigger>
        <DialogContent
          className={`${contentType === "text" ? "sm:max-w-5xl sm:h-[90vh]" : "sm:max-w-2xl"} flex flex-col p-0 overflow-hidden transition-all duration-300`}
          showCloseButton={false}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <DialogHeader className="p-6 pb-4 border-b shrink-0">
            <DialogTitle className="text-2xl font-black text-slate-900">
              Tambah Topik Baru
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 min-h-0">
            {/* kode topik */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="sm:col-span-1">
                <Label className="font-bold">Kode Topik</Label>
                <Input placeholder="e.g. FR01" className="mt-1.5" />
              </div>

              {/* judul topik */}
              <div className="sm:col-span-3">
                <Label className="font-bold">Judul Topik</Label>
                <Input
                  placeholder="Masukkan judul lengkap topik..."
                  className="mt-1.5"
                />
              </div>
            </div>

            {/* catatan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* catatan untuk reviewer */}
              <div>
                <Label className="font-bold">Catatan untuk Reviewer</Label>
                <Textarea
                  placeholder="Pesan khusus untuk dosen reviewer..."
                  className="mt-1.5 h-24"
                />
              </div>
              {/* catatan untuk mahasiswa */}
              <div>
                <Label className="font-bold">Catatan untuk Mahasiswa</Label>
                <Textarea
                  placeholder="Prasyarat atau info tambahan..."
                  className="mt-1.5 h-24"
                />
              </div>
            </div>

            {/* checkbox */}
            <div className="flex items-center space-x-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <Checkbox id="revised" />
              <label
                htmlFor="revised"
                className="text-sm font-bold text-slate-700"
              >
                Topik ini sudah pernah diajukan
              </label>
            </div>

            {/* tipe konten */}
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

              {/* isi topik */}
              <div className="mt-4 border rounded-xl overflow-hidden shadow-sm bg-white">
                {contentType === "pdf" ? (
                  // pdf
                  <div className="py-12 flex flex-col items-center">
                    <FileUp className="h-8 w-8 text-slate-400 mb-2" />
                    <p className="text-xs text-slate-500">
                      Pilih file PDF deskripsi topik
                    </p>
                  </div>
                ) : (
                  // text editor
                  <div className="flex flex-col h-[500px]">
                    <MinimalTiptapEditor
                      value={editorValue}
                      onChange={setEditorValue}
                      className="flex-1 border-none shadow-none flex flex-col overflow-hidden"
                      editorContentClassName="p-5 prose-slate max-w-full overflow-y-auto flex-1 focus:outline-none"
                      output="html"
                      placeholder="Tulis deskripsi lengkap topik di sini..."
                      autofocus={true}
                      editable={true}
                      editorClassName="focus:outline-none"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <DialogFooter className="p-6 mt-0 gap-2 border-t bg-slate-50/50 shrink-0">
            {/* <DialogClose asChild>
              <Button variant="ghost" className="font-bold">
                Batal
              </Button>
            </DialogClose> */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" className="font-bold">
                  Batal
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Batalkan Penulisan?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Data yang Anda masukkan belum disimpan. Apakah Anda yakin
                    ingin keluar?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Lanjutkan Menulis</AlertDialogCancel>
                  <DialogClose asChild>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                      Ya, Batalkan
                    </AlertDialogAction>
                  </DialogClose>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

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
