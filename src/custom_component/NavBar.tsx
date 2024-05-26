import { FaBuilding } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

function NavBar() {
  return (
    <div className="bg-background text-foreground py-3 px-1">
      <div className="flex items-center justify-center md:justify-start w-full">
        <FaBuilding className="text-4xl" />
        <Link href="/">
          {" "}
          <div className="flex flex-col px-2">
            <div className="md:text-xl text-nowrap">
              SHIB KRISHNA APARTMEMNT
            </div>
            <div className="text-xs text-nowrap">
              25, Annada Prasad Banerjee Lane, Kadamtala
            </div>
          </div>
        </Link>

        <div className="ml-auto mr-1">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>TD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
