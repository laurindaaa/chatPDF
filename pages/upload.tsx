import { useState } from "react";
import { CloudUpload } from "lucide-react";

export default function UploadPage() {
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File | undefined) => {
    if (file) {
      setFileName(file.name);
      // TODO: Add upload logic here
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
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

        {fileName && (
          <div className="mt-4 text-green-600 font-medium">
            ✅ Uploaded: {fileName}
          </div>
        )}
      </div>
    </div>
  );
}
