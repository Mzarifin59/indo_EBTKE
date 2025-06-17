import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function HeaderNavbar() {
  return (
    <header className="relative z-10 bg-[#28306E] text-white">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="#"
              className="hover:text-blue-200 transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="#"
              className="hover:text-blue-200 transition-colors text-sm"
            >
              Foreword
            </Link>
            <Link
              href="#"
              className="hover:text-blue-200 transition-colors text-sm"
            >
              About
            </Link>
            <Link
              href="#"
              className="hover:text-blue-200 transition-colors text-sm"
            >
              Program
            </Link>
            <Link
              href="#"
              className="hover:text-blue-200 transition-colors text-sm"
            >
              Sponsor & Exhibition
            </Link>
            <Link
              href="#"
              className="hover:text-blue-200 transition-colors text-sm"
            >
              Venue
            </Link>
            <Link
              href="#"
              className="hover:text-blue-200 transition-colors text-sm"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="hover:text-blue-200 transition-colors text-sm"
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile Navigation - Dropdown Menu */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-blue-200 hover:bg-[#1f2557] p-2"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-[#28306E] border-[#1f2557] text-white"
              >
                <DropdownMenuItem className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white">
                  <Link href="#" className="w-full">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white">
                  <Link href="#" className="w-full">
                    Foreword
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white">
                  <Link href="#" className="w-full">
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white">
                  <Link href="#" className="w-full">
                    Program
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white">
                  <Link href="#" className="w-full">
                    Sponsor & Exhibition
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white">
                  <Link href="#" className="w-full">
                    Venue
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white">
                  <Link href="#" className="w-full">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white">
                  <Link href="#" className="w-full">
                    FAQ
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Registration Button - Always visible */}
          <Link href={'/'}>
          <Button
            size="sm"
            className="bg-[#8BC541] hover:bg-green-600 text-white"
          >
            Registration
          </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
