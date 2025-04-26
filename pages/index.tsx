// pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
      <main className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ChatPDF - Let AI read PDF for you
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Turn PDF into chatbot!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/upload">
            <button className="w-full sm:w-auto px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Upload PDF
            </button>
          </Link>

          <Link href="/subscribe">
            <button className="w-full sm:w-auto px-5 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition">
              Upgrade 🔒
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
