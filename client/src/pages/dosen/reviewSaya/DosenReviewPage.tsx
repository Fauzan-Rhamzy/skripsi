import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { topics } from "./mockData";
import { useEffect, useState } from "react";
import { MinimalTiptapEditor } from "@/components/minimal-tiptap";
import type { Content } from "@tiptap/react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
import { useNavigate } from "react-router-dom";

const dummyJsonContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Implementasi AI pada Pertanian" }],
    },
    {
      type: "paragraph",
      content: [
        { type: "text", text: "Penelitian ini berfokus pada " },
        { type: "text", marks: [{ type: "bold" }], text: "Deep Learning" },
        { type: "text", text: " untuk klasifikasi hama padi secara otomatis." },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: "Akurasi tinggi" }],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: "Real-time processing" }],
            },
          ],
        },
      ],
    },
  ],
};

function DosenReviewPage() {
  const navigate = useNavigate();
  const [editorValue, setEditorValue] = useState<Content>("");
  const { topicCode, reviewPhase } = useParams();
  const topic = topics.find((t) => t.code === topicCode);

  const handleSave = () => {
    console.log("Saving JSON data:", editorValue);
    // 1. Send to API here
    // 2. navigate("/d/review");
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 h-[calc(100vh-64px)] overflow-hidden">
        <section className="flex flex-col h-full overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              asChild
            >
              <Link to="/d/review">
                <ArrowLeft strokeWidth={3} className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-black">
                Review: {topicCode || "FR01ACS"}
              </h1>
              <p className="text-m text-blue-600">Tahap 1{reviewPhase}</p>
            </div>
          </div>

          {/* isi */}
          <div className="flex-1 overflow-y-auto p-8 border rounded-2xl bg-white shadow-inner">
            <MinimalTiptapEditor
              //   value={topic?.descriptionJson}
              value={dummyJsonContent}
              editable={false}
              hideToolbar={true}
              className="border-none shadow-none"
              editorContentClassName="prose prose-slate max-w-none focus:outline-none"
            />
          </div>
        </section>

        <section className="flex flex-col h-full space-y-6 overflow-y-auto pr-2">
          {/* catatan dosen */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <span className="font-bold">Catatan Dosen Pengaju:</span>
            <p className="text-sm text-slate-700 mt-1">
              {/* {topic?.catatanReviewer || "Tidak ada catatan khusus."} */}
              {/* "Tidak ada catatan khusus." */}
              tidak ada
            </p>
          </div>

          {/* review */}
          <div>
            <Label className="font-bold">Catatan Detail</Label>
            <div className="mt-4">
              <MinimalTiptapEditor
                value={editorValue}
                onChange={setEditorValue}
                className="border border-slate-200 rounded-xl shadow-sm bg-white h-[400px] overflow-y-auto"
                editorContentClassName="p-5 prose-slate max-w-full overflow-y-auto min-h-[350px] focus:outline-none"
                output="json"
                placeholder="Tulis komentar"
                autofocus={true}
                editable={true}
                editorClassName="focus:outline-none"
              />
            </div>
          </div>

          {/* status review */}
          <div>
            <Label className="font-bold mb-2">Status Review</Label>
            <Select defaultValue="">
              <SelectTrigger className="">
                <SelectValue placeholder="Pilih Status Review" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ok" className="focus:bg-green-50">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span>OK</span>
                  </div>
                </SelectItem>
                <SelectItem value="minor" className="focus:bg-green-50">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    <span>Minor Improvement</span>
                  </div>
                </SelectItem>
                <SelectItem value="major" className="focus:bg-green-50">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <span>Major Improvement</span>
                  </div>
                </SelectItem>
                <SelectItem value="reject" className="focus:bg-green-50">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span>REJECT</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="flex gap-3 pt-4 border-t sticky bottom-0 bg-white pb-4">
              {/* <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="flex-1 font-bold">
                    Batal
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Batalkan Review?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Komentar yang Anda tulis belum disimpan. Apakah Anda yakin
                      ingin membatalkan?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Lanjutkan Menulis</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-600"
                      onClick={() => navigate("/d/review")}
                    >
                      Ya, Batalkan
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog> */}
              <Button
                className="flex-[2] bg-blue-600 font-bold"
                onClick={handleSave}
              >
                Simpan Review
              </Button>
            </div>
            {/* <Button className="w-full bg-blue-600 font-bold">
              Simpan Review
            </Button> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default DosenReviewPage;
