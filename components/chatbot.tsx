"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const dummyResponses = [
  "Hello! Welcome to Top Tier Property Group! How can I help you today?",
  "We offer painting, roofing, flooring, plumbing & remodeling services. Which one interests you?",
  "Our team has over 10 years of experience. We'd love to discuss your project!",
  "You can request a free quote anytime. Want me to guide you?",
  "We deliver high-quality workmanship with attention to detail!",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi there! 👋 I'm Toppy, your assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const randomResponse =
        dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
      const botMessage: Message = {
        id: messages.length + 1,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <motion.div animate={isOpen ? {} : floatingAnimation} className="relative">
          
          {/* ✅ FIXED QUESTION BUBBLE */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: 20 }}
                className="absolute right-20 top-1/2 -translate-y-1/2 z-[120] w-max max-w-[220px]"
              >
                <div className="relative">
                  
                  {/* Bubble */}
                  <div className="bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-dark px-4 py-2 rounded-xl shadow-lg whitespace-nowrap">
                    <p className="font-semibold text-sm">Have any question?</p>
                    <p className="font-bold text-xs">Ask me...</p>
                  </div>

                  {/* Pointer */}
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-gold rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Glow */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(212,175,55,0.4)",
                "0 0 40px rgba(212,175,55,0.8)",
                "0 0 20px rgba(212,175,55,0.4)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
          />

          {/* Robot */}
          <motion.div
            className="relative z-[100] w-16 h-16 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
            whileHover={{ scale: 1.1 }}
          >
            <Bot className="w-7 h-7 text-primary-dark" />
          </motion.div>
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-[110] w-96 bg-primary-dark rounded-2xl shadow-2xl border border-accent-gold/30"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent-gold to-yellow-600 p-4 flex justify-between">
              <h3 className="font-bold text-primary-dark">Toppy</h3>
              <button onClick={() => setIsOpen(false)}>
                <ChevronDown />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg max-w-[70%] ${
                      msg.sender === "user"
                        ? "bg-accent-gold text-primary-dark"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 flex gap-2">
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 px-3 py-2 rounded-full bg-white/10 text-white outline-none"
                placeholder="Type..."
              />
              <button
                onClick={handleSend}
                className="bg-accent-gold p-2 rounded-full"
              >
                <Send className="w-4 h-4 text-primary-dark" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}