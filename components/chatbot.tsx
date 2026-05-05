"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const responses = [
  "Hello! 👋 How can I help you today?",
  "We provide premium property services. What do you need?",
  "Sure! I can guide you step by step.",
  "Would you like a free quote?",
  "Our team is ready to help you anytime!",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi 👋 I'm Toppy, your assistant!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: messages.length,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((p) => [...p, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: messages.length + 1,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((p) => [...p, botMsg]);
      setTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-[100]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl flex items-center justify-center border-4 border-white">
          <Bot className="w-7 h-7 text-black" />

          {/* glow */}
          <span className="absolute inset-0 rounded-full animate-ping bg-yellow-400 opacity-30"></span>
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[110]
            w-[92vw] sm:w-80 md:w-96
            h-[70vh]
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600">
              <h3 className="font-bold text-black">Toppy AI</h3>
              <button onClick={() => setIsOpen(false)}>
                <ChevronDown className="text-black" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-2xl text-sm max-w-[75%] shadow-md
                    ${
                      msg.sender === "user"
                        ? "bg-yellow-400 text-black"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="text-white/60 text-xs">Toppy is typing...</div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 flex gap-2 border-t border-white/10">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 px-3 py-2 rounded-full bg-white/10 text-white outline-none text-sm"
                placeholder="Type your message..."
              />

              <button
                onClick={sendMessage}
                className="bg-yellow-400 p-2 rounded-full hover:scale-105 transition"
              >
                <Send className="w-4 h-4 text-black" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}