import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { topics } from "./mockData";
function DosenReviewPage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* LEFT: THE TOPIC CONTENT */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Review - FR01</h2>
          <div className="p-6 border rounded-xl bg-slate-50 prose prose-slate">
            <p></p>
          </div>
        </section>

        {/* RIGHT: THE REVIEW FORM */}
        <section className="space-y-6">
          <div>
            Catatan Dosen:
            {/* <p>{topics.note}</p> */}
          </div>
          <div>
            <Label className="font-bold">Status Review</Label>
            <Select defaultValue="">
              <SelectTrigger className="">
                <SelectValue placeholder="Pilih Status Review" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ok">OK</SelectItem>
                <SelectItem value="minor">Minor Improvement</SelectItem>
                <SelectItem value="major">Major Improvement</SelectItem>
                <SelectItem value="reject">REJECT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="font-bold">Catatan Detail</Label>
            {/* Your Tiptap Editor here */}
            <Textarea
              className="h-64"
              placeholder="Tuliskan masukan Anda di sini..."
            />
          </div>

          <Button className="w-full bg-blue-600 font-bold">
            Simpan Review
          </Button>
        </section>
      </div>
    </>
  );
}

export default DosenReviewPage;
