import { useState, useEffect } from "react";
import { FileUp, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StudentUploadDPSPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [extractedIPK, setExtractedIPK] = useState<number | null>(null);

  useEffect(() => {
    const savedIPK = "2.5";
    if (savedIPK) {
      setExtractedIPK(parseFloat(savedIPK));
    }
  }, []);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setExtractedIPK(3.75);
      setFile(null);
    }, 2000);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto shrink-0">
      <div className="mb-8">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">
          Upload DPS
        </h1>
        <p className="text-muted-foreground mt-2">
          Unggah file PDF Daftar Perkembangan Studi (DPS) Anda untuk memperbarui
          data IPK di sistem.
        </p>
      </div>
      {extractedIPK && (
        <Card className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg mb-5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-m font-semibold text-green-900">
                IPK Anda saat ini tercatat sebagai{" "}
                <strong>{extractedIPK}</strong>
              </p>
              {/* <p className="text-xs text-green-700">
                IPK Anda saat ini tercatat sebagai{" "}
                <strong>{extractedIPK}</strong>
              </p> */}
            </div>
          </div>
          {/* <Button
            variant="ghost"
            size="sm"
            className="text-green-700 hover:text-green-800 hover:bg-green-100"
            onClick={() => {
              setExtractedIPK(null);
              setFile(null);
            }}
          >
            Selesai
          </Button> */}
        </Card>
      )}
      <div className="grid gap-6">
        {/* instruksi */}
        {/* <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3">
          <AlertCircle className="h-5 w-5 text-blue-600 shrink-0" />
          <div className="text-sm text-blue-800">
            <p className="font-semibold">Cara mendapatkan file DPS:</p>
            <ul className="list-disc ml-4 mt-1 space-y-1">
              <li>Login ke Student Portal UNPAR.</li>
              <li>
                Buka menu "Laporan Akademik" {">"} "Dokumen Perolehan SKS".
              </li>
              <li>Simpan (Print to PDF) halaman tersebut.</li>
            </ul>
          </div>
        </div> */}

        {/* upload file */}
        <Card className=" shadow-none">
          <CardContent className="flex flex-col items-center justify-center p-1">
            {!file ? (
              <>
                <div>
                  <FileUp className="h-8 w-8 text-slate-400" />
                </div>
                <div className="text-center"></div>
                <input
                  type="file"
                  className="hidden"
                  id="file-upload"
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                <Button variant="outline" className="mt-6" asChild>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    Pilih File
                  </label>
                </Button>
              </>
            ) : (
              <div className="w-full max-w-sm">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 mb-6 w-80 overflow-hidden mx-auto">
                  <FileText className="h-10 w-10 text-blue-600 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    {/* <p className="text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p> */}
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    className="flex-1"
                    onClick={() => setFile(null)}
                    disabled={isUploading}
                  >
                    Batal
                  </Button>
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={handleUpload}
                    disabled={isUploading}
                  >
                    {isUploading ? "Memproses..." : "Upload"}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* penjelasan */}
        {/* <Card>
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Kenapa ini diperlukan?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600 leading-relaxed">
            Sistem membutuhkan data IPK terbaru Anda untuk memvalidasi kelayakan
            pengambilan topik Skripsi/Tugas Akhir tertentu. Data yang diamb
            hanya terbatas pada IPK dan total SKS yang telah ditempuh.
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
