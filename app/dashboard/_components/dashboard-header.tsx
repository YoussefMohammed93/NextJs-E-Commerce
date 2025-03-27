import { UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <header className="w-full border-b bg-background fixed top-0 left-0">
      <div className="flex h-16 items-center justify-between px-6 w-full">
        <SidebarTrigger />
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
