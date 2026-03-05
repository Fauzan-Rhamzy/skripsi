import { TabsReview } from "./components/TabsReview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
function DosenHasilReviewPage() {
  return (
    <>
      <div className="w-full p-8 ">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full"
            asChild
          >
            <Link to="/d/topik-saya">
              <ArrowLeft strokeWidth={4} className="h-6 w-6 text-slate-900" />
            </Link>
          </Button>
          <h1 className="text-3xl font-black text-slate-900  gap-3">
            Hasil Review - <span>FR04</span>
          </h1>
        </div>
        <TabsReview />
      </div>
    </>
  );
}

export default DosenHasilReviewPage;
