export interface Topic {
  id: string;
  code: string;
  title: string;
  lecturerCode: string;
  hasNotes: boolean;
  status: 'available'|'queued'|'selected'|'taken';
  queueCount: number;
}
