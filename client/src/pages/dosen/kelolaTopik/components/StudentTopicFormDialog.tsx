import { cn } from "@/lib/utils";
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
import { Plus, FileUp, Edit2, X, ChevronsUpDown, Check } from "lucide-react";
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface formTopic {
  code: string;
  title: string;
  reviewerNotes: string;
  studentNotes: string;
  // isRevised: boolean;
  assignedStudentId: string;
  type: "json" | "pdf";
}

import type { Topic } from "../types.ts";

interface Props {
  type: "new" | "edit";
  initialTopic?: Topic;
  onSave: (data: any) => void;
}

const students = [
  {
    name: "Sebastian",
    npm: "6182201078",
  },
  {
    name: "Cikal",
    npm: "6182201069",
  },
];

function TopicFormDialog({ type, initialTopic, onSave }: Props) {
  const [open, setOpen] = useState(false);
  const [contentType, setContentType] = useState("pdf");
  const [editorValue, setEditorValue] = useState<Content>(""); // state for the editor
  const [file, setFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    code: initialTopic?.code || "",
    title: initialTopic?.title || "",
    reviewerNotes: initialTopic?.reviewerNotes || "",
    studentNotes: initialTopic?.studentNotes || "",
    // isRevised: initialTopic?.isRevised || false,
    assignedStudentId: initialTopic?.assignedStudentId || "",
  });

  const [selectedStudent, setSelectedStudent] = useState<
    (typeof students)[number] | null
  >(students.find((s) => s.npm === initialTopic?.assignedStudentId) || null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    const completeTopicData = {
      ...formData,
      contentType,
      content:
        contentType === "text"
          ? editorValue
          : file
            ? file.name
            : "No PDF uploaded",
    };

    console.log("Saving complete topic JSON data:", completeTopicData);
    onSave(completeTopicData);
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (isOpen) {
            if (type === "edit" && initialTopic) {
              setFormData({
                code: initialTopic.code,
                title: initialTopic.title,
                reviewerNotes: initialTopic.reviewerNotes || "",
                studentNotes: initialTopic.studentNotes || "",
                // isRevised: initialTopic.isRevised || false,
                assignedStudentId: initialTopic.assignedStudentId || "",
              });
              // setContentType(initialTopic.type);
              // setEditorValue();
            } else {
              setFormData({
                code: "",
                title: "",
                reviewerNotes: "",
                studentNotes: "",
                // isRevised: false,
                assignedStudentId: "",
              });
              setEditorValue("");
              setContentType("pdf");
            }
          } else {
            setFile(null);
            setSelectedStudent(null);
          }
        }}
      >
        <DialogTrigger asChild>
          {type === "new" ? (
            <Button className="bg-green-600 hover:bg-green-700 font-bold">
              <Plus className="mr-2 h-5 w-5" /> Tambah Topik
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
        <DialogContent
          className={`${contentType === "text" ? "w-[95vw] h-[95vh] sm:max-w-5xl" : "w-[95vw] h-auto max-h-[95vh] sm:max-w-2xl"} flex flex-col p-0 overflow-hidden transition-all duration-300`}
          showCloseButton={false}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <DialogHeader className="p-6 pb-4 border-b shrink-0">
            <DialogTitle className="text-2xl font-black text-slate-900">
              {type === "new" ? "Tambah Topik Baru" : "Edit Topik"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 min-h-0">
            {/* kode topik */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="sm:col-span-1">
                <Label className="font-bold">Kode Topik</Label>
                <Input
                  id="code"
                  value={formData.code}
                  // onChange={handleChange}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      code: e.target.value.toUpperCase(),
                    });
                  }}
                  placeholder="e.g. FR01ACS"
                  className="mt-1.5"
                />
              </div>

              {/* judul topik */}
              <div className="sm:col-span-3">
                <Label className="font-bold">Judul Topik</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Masukkan judul lengkap topik..."
                  className="mt-1.5"
                />
              </div>
            </div>

            {/* catatan */}
            {/* catatan untuk reviewer */}
            <div>
              <Label className="font-bold">Catatan untuk Reviewer</Label>
              <Textarea
                id="reviewerNotes"
                value={formData.reviewerNotes}
                onChange={handleChange}
                placeholder="Pesan khusus untuk dosen reviewer..."
                className="mt-1.5 h-24"
              />
            </div>

            {/* checkbox */}
            {/* <label
              htmlFor="revised"
              className="text-sm font-bold text-slate-700"
            >
              <div className="flex items-center space-x-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Checkbox
                  id="revised"
                  checked={formData.isRevised}
                  onCheckedChange={(checked) => {
                    setFormData((prev) => ({ ...prev, isRevised: !!checked }));
                  }}
                  className="mr-3"
                />
                Topik ini sudah pernah diajukan
              </div>
            </label> */}

            {/* dropdown mahasiswa */}
            <div className="space-y-2">
              <Label className="font-bold">Mahasiswa Pengusul</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="w-full justify-between font-normal hover:bg-white"
                  >
                    {selectedStudent
                      ? `${selectedStudent.name} - ${selectedStudent.npm}`
                      : "Pilih Mahasiswa..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-[var(--radix-popover-trigger-width)] p-0"
                  align="start"
                >
                  <Command>
                    <CommandInput placeholder="Cari Nama atau NPM..." />
                    <CommandList className="max-h-[300px] overflow-y-auto">
                      <CommandEmpty>Mahasiswa tidak ditemukan.</CommandEmpty>
                      <CommandGroup>
                        {students.map((student) => (
                          <CommandItem
                            key={student.npm}
                            value={`${student.name} ${student.npm}`} // Search matches both name and npm
                            onSelect={() => {
                              setSelectedStudent(student);
                              setFormData((prev) => ({
                                ...prev,
                                assignedStudentId: student.npm,
                              }));
                            }}
                            className="cursor-pointer flex items-center justify-between py-3 px-4"
                          >
                            <div className="flex flex-col">
                              <span className="font-bold text-slate-900">
                                {student.name}
                              </span>
                              <span className="text-[10px] text-slate-500 font-mono">
                                {student.npm}
                              </span>
                            </div>
                            <Check
                              className={cn(
                                "ml-2 h-4 w-4 text-blue-600",
                                selectedStudent?.npm === student.npm
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* tipe konten */}
            <div className="space-y-4 pt-4">
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
                  <label htmlFor="pdf-upload">
                    {!file ? (
                      <div className="py-12 flex flex-col items-center">
                        <FileUp className="h-8 w-8 text-slate-400 mb-2" />
                        <p className="text-xs text-slate-500">
                          Pilih file PDF deskripsi topik
                        </p>
                        <input
                          type="file"
                          id="pdf-upload"
                          className="hidden"
                          accept=".pdf"
                          onChange={(e) => setFile(e.target.files?.[0] || null)}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center gap-4 p-4 w-full ">
                        <div className="bg-blue-50 p-2 rounded-lg ">
                          <FileUp className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-sm font-bold text-slate-900 "
                            title={file?.name}
                          >
                            {file?.name}
                          </p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase">
                            {(file?.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-400 hover:text-red-600"
                          onClick={() => setFile(null)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </label>
                ) : (
                  // text editor
                  <div className="flex flex-col h-[300px] sm:h-[500px]">
                    <MinimalTiptapEditor
                      value={editorValue}
                      onChange={setEditorValue}
                      className="flex-1 border-none shadow-none flex flex-col overflow-hidden"
                      editorContentClassName="p-5 prose-slate max-w-full overflow-y-auto flex-1 focus:outline-none"
                      output="json"
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
                    <AlertDialogAction
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => setOpen(false)}
                    >
                      Ya, Batalkan
                    </AlertDialogAction>
                  </DialogClose>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Button
              className="bg-blue-600 hover:bg-blue-700 font-bold px-8"
              onClick={handleSave}
            >
              Simpan Topik
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TopicFormDialog;
