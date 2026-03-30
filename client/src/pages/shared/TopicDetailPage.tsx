import { useNavigate, useParams } from "react-router-dom";
import { topics } from "../mahasiswa/dashboard/mockData";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MinimalTiptapEditor } from "@/components/minimal-tiptap";

function TopicDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const topic = topics.find((t) => t.id === id);

  // if (!topic) {
  //   return (
  //     <div className="bg-white border-b z-10 shadow-sm">
  //       <div className="max-w-5xl px-6 h-16 flex items-center justify-between">
  //         <div className="flex items-center gap-4">
  //           {/* <Link to="/d/review"> */}
  //           <Button variant="ghost" onClick={() => navigate(-1)}>
  //             <ArrowLeft strokeWidth={3} className="h-5 w-5" />
  //           </Button>
  //           {/* </Link> */}
  //           <div className="bg-blue-600 p-2 rounded-lg text-white">
  //             <FileText className="h-5 w-5" />
  //           </div>

  //           <div>
  //             <h1 className="font-bold text-slate-900 truncate max-w-[300px] sm:max-w-md">
  //               Topik tidak ditemukan
  //             </h1>
  //             <p className="text-xs text-slate-500">{}</p>
  //           </div>
  //         </div>
  //         {/* <Button
  //           variant="success"
  //           size="sm"
  //           onClick={() => console.log(`ambil topik ${topic.id}`)}
  //         >
  //           Ambil topik
  //         </Button> */}
  //       </div>
  //     </div>
  //   );
  //   // return <div className="p-10 text-center">Topik tidak ditemukan.</div>;
  // }

  const contentJson = {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: "Deskripsi Proyek" }],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Ini adalah contoh deskripsi yang ditulis menggunakan ",
          },
          { type: "text", marks: [{ type: "bold" }], text: "JSON data" },
          { type: "text", text: "." },
        ],
      },
    ],
  };

  const contentType = topic?.id === "1" ? "json" : "pdf";
  const pdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* header */}
      <div className="bg-white border-b z-10 shadow-sm">
        <div className="max-w-5xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* <Link to="/d/review"> */}
            <Button variant="ghost" onClick={() => navigate(-1)}>
              <ArrowLeft strokeWidth={3} className="h-5 w-5" />
            </Button>
            {/* </Link> */}
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <FileText className="h-5 w-5" />
            </div>

            <div>
              <h1 className="font-bold text-slate-900 truncate max-w-[300px] sm:max-w-md">
                {topic ? topic.title : "Topik tidak ditemukan."}
              </h1>
              <p className="text-xs text-slate-500">
                {topic ? topic.code : ""}
              </p>
            </div>
          </div>
          {/* <Button
            variant="success"
            size="sm"
            onClick={() => console.log(`ambil topik ${topic.id}`)}
          >
            Ambil topik
          </Button> */}
        </div>
      </div>

      {/* content area */}
      {topic ? (
        <div className="max-w-5xl mx-auto px-6 mt-8">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden min-h-[70vh]">
            {contentType === "pdf" ? (
              <iframe
                src={pdfUrl}
                className="w-full h-[80vh]"
                title="PDF Viewer"
              />
            ) : (
              <div className="p-10 max-w-none">
                {/* tiptap html */}
                <MinimalTiptapEditor
                  //   value={topic?.descriptionJson}
                  value={contentJson}
                  editable={false}
                  hideToolbar={true}
                  className="border-none shadow-none"
                  editorContentClassName="max-w-none focus:outline-none prose prose-slate"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TopicDetailPage;
