import { useState } from "react";
import { CloudUpload } from "lucide-react";

export default function UploadPage() {
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const [question, setQuestion] = useState("");
  const [chatLog, setChatLog] = useState<string[]>([]);

  const handleFile = (file: File | undefined) => {
    if (!file) return;

    if (file.type !== "application/pdf") {
      setUploadError("❌ Only PDF files are allowed.");
      setFileName("");
      return;
    }

    setUploading(true);
    setUploadError("");

    setTimeout(() => {
      setUploading(false);
      setFileName(file.name);
    }, 1000); // Simulate upload delay
  };

  const handleChatSubmit = () => {
    if (!question.trim()) return;

    // Simulated response from AI
    const fakeAnswer = "🧠 AI Answer: This is a placeholder response.";
    setChatLog((prev) => [...prev, `🧑 You: ${question}`, fakeAnswer]);
    setQuestion("");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-start px-4 pt-10 pb-20">
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          ChatPDF - Let AI read PDF for you
        </h1>
        <p className="text-gray-500 mb-6">Turn PDF into chatbot!</p>

        <label
          className={`flex flex-col items-center justify-center h-60 border-2 ${
            isDragging ? "border-blue-400 bg-blue-50" : "border-dashed"
          } border-gray-300 rounded-lg cursor-pointer transition-colors`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFile(e.dataTransfer.files[0]);
          }}
        >
          <CloudUpload className="h-12 w-12 text-red-400 mb-2" />
          <p className="text-gray-600">
            Click or drag file to this area to upload
          </p>
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </label>

        {uploading && <p className="mt-4 text-blue-500">Uploading file...</p>}
        {uploadError && <p className="mt-4 text-red-500">{uploadError}</p>}
        {fileName && !uploading && !uploadError && (
          <div className="mt-4 text-green-600 font-medium">
            ✅ Uploaded: {fileName}
          </div>
        )}
      </div>

      {fileName && (
        <div className="mt-10 bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 max-w-xl w-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Ask a question about the PDF
          </h2>

          <div className="space-y-3 max-h-60 overflow-y-auto border border-gray-200 p-3 rounded bg-white text-left text-sm">
            {chatLog.map((msg, idx) => (
              <p key={idx} className="text-gray-800">
                {msg}
              </p>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none"
            />
            <button
              onClick={handleChatSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
