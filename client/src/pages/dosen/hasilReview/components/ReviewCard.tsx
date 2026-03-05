import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReviewItem } from "../mockData";

function statusRender(status: "ok" | "minor" | "major" | "reject" | null) {
  if (!status) {
    return (
      <>
        <Badge>Not Assigned</Badge>
      </>
    );
  }
  if (status.toLowerCase() === "ok") {
    return (
      <>
        <Badge className=" bg-green-500 hover:bg-green-600 border-none font-bold text-white px-3 py-1">
          OK
        </Badge>
      </>
    );
  }
  if (status.toLowerCase() === "minor") {
    return (
      <>
        <Badge className=" bg-amber-500 border-none font-bold text-white px-3 py-1">
          Minor Improvement
        </Badge>
      </>
    );
  }
  if (status.toLowerCase() === "major") {
    return (
      <>
        <Badge className=" bg-amber-600 border-none font-bold text-white px-3 py-1">
          Major Improvement
        </Badge>
      </>
    );
  }
  if (status.toLowerCase() === "reject") {
    return (
      <>
        <Badge className=" bg-red-500 border-none font-bold text-white px-3 py-1">
          REJECT
        </Badge>
      </>
    );
  }
}

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">
            Reviewer: <span>{review.lecturerCode}</span>
          </CardTitle>
          {statusRender(review.status)}
          {/* <Badge className=" bg-amber-500 hover:bg-amber-600 border-none font-bold text-white px-3 py-1">
            Minor Improvement
          </Badge> */}
        </CardHeader>
        <CardContent className="text-sm pt-0">
          <div className="font-black mb-2">CATATAN:</div>
          <p>{review.notes}</p>
        </CardContent>
      </Card>
    </>
  );
}

export default ReviewCard;
