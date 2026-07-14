import DashboardLayout from "../components/layout/DashboardLayout";
import { useState, useEffect, useRef } from "react";
import { askAI } from "../services/aiService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function AIAssistant() {
  const [message, setMessage] = useState("");

const [messages, setMessages] = useState(() => {
  const saved = localStorage.getItem("chatHistory");

  return saved
    ? JSON.parse(saved)
    : [
        {
  sender: "ai",
  text:
    "👋 Hello! I'm CampusOne AI.\nHow can I help you today?",
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
}
      ];
});

const [loading, setLoading] = useState(false);

const messagesEndRef = useRef(null);

useEffect(() => {
  localStorage.setItem(
    "chatHistory",
    JSON.stringify(messages)
  );
}, [messages]);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, loading]);

const handleSend = async () => {
  if (!message.trim()) return;

  const userMessage = {
  sender: "user",
  text: message,
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
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
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
}
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

const clearChat = () => {
  const defaultMessage = [
  {
    sender: "ai",
    text: "👋 Hello! I'm CampusOne AI.\nHow can I help you today?",
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

  setMessages(defaultMessage);

  localStorage.removeItem("chatHistory");
};
const copyToClipboard = async (text) => {
  await navigator.clipboard.writeText(text);
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
        <div className="flex justify-end mb-4">
  <button
    onClick={clearChat}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
  >
    🗑️ Clear Chat
  </button>
</div>

          <div className="h-[420px] border rounded-xl p-4 overflow-y-auto space-y-4">

  {messages.map((msg, index) => (
  <div
    key={index}
    className={`flex ${
      msg.sender === "user"
        ? "justify-end"
        : "justify-start"
    } mb-4`}
  >
    <div
      className={`flex items-start gap-3 max-w-[65%] ${
        msg.sender === "user"
          ? "flex-row-reverse"
          : ""
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
          msg.sender === "user"
            ? "bg-blue-600"
            : "bg-purple-600"
        }`}
      >
        {msg.sender === "user" ? "A" : "🤖"}
      </div>

      {/* Chat Bubble */}
     <div
  className={`rounded-2xl p-4 shadow ${
    msg.sender === "user"
      ? "bg-blue-600 text-white"
      : "bg-gray-100"
  }`}
>
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {msg.text}
  </ReactMarkdown>

  <p className="text-xs opacity-70 mt-2">
  {msg.time}
</p>

  {msg.sender === "ai" && (
    <div className="flex justify-end mt-3">
      <button
        onClick={() => copyToClipboard(msg.text)}
        className="text-sm text-blue-600 hover:text-blue-800"
      >
        📋 Copy
      </button>
    </div>
  )}
</div>
    </div>
  </div>
))}

  {loading && (
    <div className="bg-gray-100 rounded-xl p-4 w-fit">
      🤖 Thinking...
    </div>
  )}

  <div ref={messagesEndRef}></div>

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