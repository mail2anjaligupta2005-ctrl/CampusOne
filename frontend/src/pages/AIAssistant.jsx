import DashboardLayout from "../components/layout/DashboardLayout";
import { useState } from "react";
import { askAI } from "../services/aiService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function AIAssistant() {
  const [message, setMessage] = useState("");

const [messages, setMessages] = useState([
  {
    sender: "ai",
    text: "👋 Hello! I'm CampusOne AI.\nHow can I help you today?",
  },
]);

const [loading, setLoading] = useState(false);
const handleSend = async () => {
  if (!message.trim()) return;

  const userMessage = {
    sender: "user",
    text: message,
  };

  setMessages((prev) => [...prev, userMessage]);

  setLoading(true);

  try {
    const reply = await askAI(message);

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: reply,
      },
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: "❌ Something went wrong.",
      },
    ]);
  }

  setMessage("");
  setLoading(false);
};
  return (
    <DashboardLayout>
      <div className="p-6">

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">

          <h1 className="text-4xl font-bold">
            🤖 CampusOne AI
          </h1>

          <p className="mt-3 text-lg">
            Ask anything about your studies,
            assignments or exams.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow p-6 mt-8">

          <div className="h-[420px] border rounded-xl p-4 overflow-y-auto space-y-4">

  {messages.map((msg, index) => (
    <div
      key={index}
      className={`p-4 rounded-xl max-w-[80%] ${
        msg.sender === "user"
          ? "bg-blue-600 text-white ml-auto"
          : "bg-gray-100"
      }`}
    >
      <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-6 mb-4">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-5 mb-3">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-4 mb-2">
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="leading-8 mb-4">
        {children}
      </p>
    ),

    strong: ({ children }) => (
      <strong className="font-bold text-black">
        {children}
      </strong>
    ),

    ul: ({ children }) => (
      <ul className="list-disc ml-6 mb-4">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="list-decimal ml-6 mb-4">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="mb-2">
        {children}
      </li>
    ),

    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");

      return !inline && match ? (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code
          className="bg-gray-200 px-1 py-0.5 rounded"
          {...props}
        >
          {children}
        </code>
      );
    },
  }}
>
  {msg.text}
</ReactMarkdown>
    </div>
  ))}

  {loading && (
    <div className="bg-gray-100 rounded-xl p-4 w-fit">
      🤖 Thinking...
    </div>
  )}

</div>

          <div className="flex gap-4 mt-6">

            <input
  type="text"
  placeholder="Ask anything..."
  value={message}
  onChange={(e) =>
    setMessage(e.target.value)
  }
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }}
  className="flex-1 border rounded-xl p-4"
/>

            <button
  onClick={handleSend}
  className="bg-blue-600 text-white px-8 rounded-xl hover:bg-blue-700"
>
  Send
</button>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default AIAssistant;