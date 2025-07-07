import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";

const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center bg-green-500 border-b fixed top-0 w-full z-50">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent className="p-0 z-[100]" side="left">
          <SheetHeader className="hidden">
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileHeader;
