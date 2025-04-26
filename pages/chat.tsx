import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");

  const messages = [
    { role: "user", text: "What is the abstract?" },
    { role: "ai", text: "The abstract explains the purpose and summary of the paper." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 px-6 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold mb-2">Chat with your PDF</h2>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg ${
              msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div className="flex mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-l"
            placeholder="Ask a question..."
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
