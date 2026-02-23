import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function StudentFAQPage() {
  const faqs = [
    {
      question: "Bagaimana cara mendaftar Topik TA?",
      answer:
        "Pilih topik yang tersedia pada Dashboard, lalu klik tombol 'Ambil'. Pastikan Anda sudah mengunggah DPS terbaru, memilih topik yang sesuai dengan IPK Anda, dimana: Topik A adalah topik dengan nilai maksimum A, Topik B untuk mahasiswa dengan IPK < 3.00 dengan nilai maksimum B+, Topik C adalah topik untuk mahasiswa dengan IPK < 2.50 dengan nilai maksimum C+",
    },
    {
      question: "Apa itu status 'Dalam Antrean'?",
      answer:
        "Status ini berarti Anda sudah mengajukan topik tersebut, namun masih menunggu persetujuan dari Dosen pembimbing terkait.",
    },
  ];

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-black mb-8">
        Pertanyaan Sering Diajukan (FAQ)
      </h1>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
