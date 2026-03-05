export interface ReviewItem{
    lecturerCode:string,
    status:"ok"|"minor"|"major"|"reject"|null,
    notes:string|null
}
export interface TopicReviewData{
    review1:ReviewItem[],
    review2:ReviewItem[],
}

export const mockTopicReviews: TopicReviewData ={
    review1:[
        {
            lecturerCode: "LCA",
            status: "ok",
            notes: "Judul cukup menarik, namun metodologi pada bagian preprocessing citra perlu diperjelas detailnya agar bisa direproduksi.",
        },
        {
            lecturerCode: "KAL",
            status: "minor",
            notes: "Judul cukup menarik, namun metodologi pada bagian preprocessing citra perlu diperjelas detailnya agar bisa direproduksi.",
        },
        {
            lecturerCode: "RMC",
            status: "major",
            notes: "Judul cukup menarik, namun metodologi pada bagian preprocessing citra perlu diperjelas detailnya agar bisa direproduksi.",
        }
    ],
    review2:[
        {
            lecturerCode: "LCA",
            status: "ok",
            notes: "Judul cukup menarik, namun metodologi pada bagian preprocessing citra perlu diperjelas detailnya agar bisa direproduksi.",
        },
        {
            lecturerCode: "KAL",
            status: "ok",
            notes: "Judul cukup menarik, namun metodologi pada bagian preprocessing citra perlu diperjelas detailnya agar bisa direproduksi.",
        },
        {
            lecturerCode: "RMC",
            status: "reject",
            notes: "Judul cukup menarik, namun metodologi pada bagian preprocessing citra perlu diperjelas detailnya agar bisa direproduksi.",
        }
    ]
}