import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-2">
      <Link href="/" className="flex items-center space-x-2">
        <div>
          <Image alt="logo" height={60} width={60} src="/earth.svg"></Image>
        </div>{" "}
        <p className="font-bold">SkyStore</p>
      </Link>
      <UserButton afterSignOutUrl="/" />
      <SignedOut>
        <SignInButton afterSignInUrl="/dashboard" mode="modal"></SignInButton>{" "}
      </SignedOut>
    </header>
  );
}

export default Header;
