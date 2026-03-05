import * as React from "react";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react"; // Using icons for a nice touch

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import logo_informatika from "../assets/logo_informatika.png";

import { navigationConfig, type UserRole } from "@/config/navigation";

// This is sample data.

export function AppSidebar({
  role,
  ...props
}: { role: UserRole } & React.ComponentProps<typeof Sidebar>) {
  const sidebarNav = navigationConfig[role];
  return (
    <Sidebar {...props}>
      <div className="flex h-full flex-col">
        {/* <SidebarHeader>
          <div className="p-4">
            <img src={logo_informatika} alt="" />
          </div>
        </SidebarHeader> */}
        <SidebarHeader className="border-b border-sidebar-border p-4">
          <div className="flex items-center gap-3">
            <div className="items-center justify-center">
              <img src={logo_informatika} alt="Logo" className="h-10 w-auto" />
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarNav.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <NavLink
                      to={item.href}
                      end
                      className={({ isActive }) =>
                        `w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-accent text-accent-foreground" // active
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground" // inactive
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
      {/* <div>
        <div className="mt-auto">
          <SidebarMenu>
            <SidebarMenuItem>
              <button
                className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors text-muted-foreground
      hover:bg-accent hover:text-accent-foreground"
              >
                <LogOut /> <span>Logout</span>
              </button>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </div> */}
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <button onClick={() => console.log("Logout clicked")}>
                <LogOut />
                <span>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
