import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <Link href="/" className="text-xl font-bold">PdfRead</Link>
      <div className="flex gap-4 items-center">
        <Link href="/upload">Upload</Link>
        <Link href="/chat">Chat</Link>

        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-1 bg-blue-500 text-white rounded">Sign In</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
