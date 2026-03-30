import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewCard from "./ReviewCard";
import { mockTopicReviews } from "../mockData";
import { useEffect } from "react";

export function TabsReview() {
  useEffect(() => {
    console.log("Ambil data review");
  });
  return (
    <Tabs defaultValue="review 1" className="w-full">
      <TabsList>
        <TabsTrigger value="review 1" className="hover:cursor-pointer">
          Review 1
        </TabsTrigger>
        <TabsTrigger value="review 2" className="hover:cursor-pointer">
          Review 2
        </TabsTrigger>
      </TabsList>
      {/* isi dari tab 1 */}
      <TabsContent value="review 1" className="space-y-4">
        {mockTopicReviews["review1"].map((item, idx) => (
          <ReviewCard key={idx} review={item} />
        ))}
      </TabsContent>

      {/* isi dari tab 2 */}
      <TabsContent value="review 2" className="space-y-4">
        {mockTopicReviews["review2"].map((item, idx) => (
          <ReviewCard key={idx} review={item} />
        ))}
      </TabsContent>
    </Tabs>
  );
}
