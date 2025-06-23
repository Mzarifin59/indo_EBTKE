import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button";


export default function HeaderMobile() {
    return(
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-blue-200 hover:bg-[#1f2557] p-2"
            >
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-56 bg-[#28306E] border-[#1f2557] text-white"
          >
            <DropdownMenuItem
              className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white"
            >
              <a href="#" className="w-full"> Home </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white"
            >
              <a href="#" className="w-full"> Foreword </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white"
            >
              <a href="#" className="w-full"> About </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white"
            >
              <a href="#" className="w-full"> Program </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white"
            >
              <a href="#" className="w-full"> Sponsor & Exhibition </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white"
            >
              <a href="#" className="w-full"> Venue </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white"
            >
              <a href="#" className="w-full"> Contact Us </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-[#1f2557] focus:bg-[#1f2557] focus:text-white"
            >
              <a href="#" className="w-full"> FAQ </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    )
}