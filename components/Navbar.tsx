import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const handleUpgrade = async () => {
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to get Stripe URL.");
      }
    } catch (err) {
      console.error("Stripe redirect error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <Link href="/" className="text-xl font-bold text-blue-600">
        PdfRead
      </Link>

      <div className="flex gap-4 items-center">
        <Link href="/upload">Upload</Link>

        <button
          onClick={handleUpgrade}
          className="px-4 py-1 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition ml-2"
        >
          Upgrade 🔒
        </button>

        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-1 bg-blue-500 text-white rounded">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
