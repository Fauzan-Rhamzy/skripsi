export interface Topic {
  id: string;
  code: string;
  title: string;
  lecturerCode: string;
  hasNotes: boolean;
  status: 'available'|'queued'|'selected'|'taken';
  taker?: string;
  queueCount?: number;
  students?: StudentInQueue[];
}

export interface StudentInQueue {
  id: string;
  name: string;
  npm: string;
  ipk: number;
  applyDate: string;
}