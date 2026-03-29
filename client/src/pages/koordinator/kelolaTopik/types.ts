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
  reviewers?: string[]; 
}

export interface StudentInQueue {
  id: string;
  name: string;
  npm: string;
  ipk: number;
  applyDate: string;
}