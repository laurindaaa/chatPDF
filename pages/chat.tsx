export default function ChatPage() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Chat with PDF</h2>
      <div className="bg-gray-100 p-4 rounded shadow space-y-2">
        <div className="text-right"><span className="bg-blue-200 p-2 rounded">What is the abstract?</span></div>
        <div className="text-left"><span className="bg-gray-300 p-2 rounded">The abstract explains the key findings and summary...</span></div>
      </div>
    </div>
  );
}
