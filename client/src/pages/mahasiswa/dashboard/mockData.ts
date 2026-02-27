import type { TopicProps } from "./types"; // 

export const topics:TopicProps[] = [
  {
    id: "1",
    code: "FR01",
    title: "Implementasi Deep Learning pada Citra Medis",
    lecturerCode: "FR",
    hasNotes: true,
    status: "available",
    queueCount: 0,
  },
  {
    id: "2",
    code: "DR01",
    title: "Pengembangan Sistem IoT Berbasis LoRa",
    lecturerCode: "DR",
    hasNotes: false,
    status: "queued",
    queueCount: 3,
  },
  {
    id: "3",
    code: "DR02",
    title: "Analisis Sentimen Menggunakan NLP Transformer",
    lecturerCode: "DR",
    hasNotes: true,
    status: "selected",
    queueCount: 4,
  },
  {
    id: "4",
    code: "DR03",
    title: "Rancang Bangun Aplikasi E-Commerce Microservices",
    lecturerCode: "DR",
    hasNotes: false,
    status: "taken",
    queueCount: 5,
  },
];
