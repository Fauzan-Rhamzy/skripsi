import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router-dom";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import type { UserRole } from "@/config/navigation";

export default function MainLayout({ role }: { role: UserRole }) {
  return (
    <SidebarProvider>
      <AppSidebar role={role} variant="inset" />
      <SidebarInset>
        <header className="flex h-18.25 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <span className="text-sm font-semibold">Portal Tugas Akhir</span>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
