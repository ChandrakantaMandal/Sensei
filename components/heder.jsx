import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

const Heder = async () => {
  await checkUser();

  return (
    <div className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={60}
            alt="Logo"
            className="h-12 py-1 w-auto object-contain "
          />
        </Link>
        <div className="flex items-center justify-between  space-x-2 md:space-x-4">
          <Show when="signed-in">
            <Link href="/dashboard">
              <Button>
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                <StarsIcon className="h-4 w-4" />
                <span className="hidden md:block">Growth Tools</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href="/resume" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Build Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/ai-cover-later"
                      className="flex items-center gap-2"
                    >
                      <PenBox className="h-4 w-4" />
                      <span>Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/interview"
                      className="flex items-center gap-2"
                    >
                      <GraduationCap className="h-4 w-4" />
                      <span> Interview Prep</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <UserButton
              appearance={{
                element: {
                  avatarBox: "w-10 h-10",
                  userButtonPopverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
            />
          </Show>
          <Show when="signed-out">
            <SignInButton />
          </Show>
        </div>
      </nav>
    </div>
  );
};

export default Heder;
