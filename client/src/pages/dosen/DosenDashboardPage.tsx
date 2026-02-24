import { Button } from "@/components/ui/button";

export default function DosenDashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard Skripsi</h1>
      <p className="mb-4">Selamat datang Dosen!</p>
      <Button variant="destructive">Logout</Button>
    </div>
  );
}
