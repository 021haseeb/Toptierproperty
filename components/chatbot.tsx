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
  "We offer premium property management, construction, renovation, and maintenance services. Which one interests you?",
  "Our team has over 10 years of experience in the real estate industry. We'd be happy to discuss your project!",
  "You can request a free consultation by clicking the 'Get A Quote' button. Would you like me to guide you?",
  "We have completed over 100 projects with a 99% satisfaction rate. Our clients love our meticulous attention to detail!",
  "Absolutely! Our property management services include full-service oversight, tenant placement, and ongoing maintenance.",
  "Thank you for your interest! Feel free to fill out the quote form and we'll get back to you within 24 hours.",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi there! 👋 I'm Toppy, your virtual assistant. How can I help you today?",
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

    // Simulate bot response after delay
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
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

// Floating animation for the robot
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Robot hover animation when idle
  const robotHover = {
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Question bubble animation
  const questionBubbleAnimation = {
    y: [0, -5, 0],
    opacity: [0.8, 1, 0.8],
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
{/* Chat Toggle Button - Floating Robot */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div
          animate={isOpen ? {} : floatingAnimation}
          className="relative"
        >
          {/* Question Bubble - Only show when chat is closed */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 10 }}
className="absolute bottom-full left-1/2 -translate-x-[70%] md:-translate-x-1/2 mb-3"
                style={{ transformOrigin: "bottom center" }}
              >
                <motion.div
                  animate={questionBubbleAnimation}
                  className="relative whitespace-nowrap"
                >
                  {/* Speech bubble shape */}
                  <div className="bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-dark px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl rounded-br-md shadow-lg">
                    <p className="font-semibold text-xs md:text-sm whitespace-nowrap">
                      Have any question?
                    </p>
                    <p className="font-bold text-[10px] md:text-xs">Ask me...</p>
                  </div>
                  {/* Bubble pointer */}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-accent-gold rotate-45"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Glow effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(212, 175, 55, 0.4)",
                "0 0 40px rgba(212, 175, 55, 0.8)",
                "0 0 20px rgba(212, 175, 55, 0.4)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
          />

          {/* Robot Button */}
          <motion.div
            animate={isOpen ? { rotate: 90 } : robotHover}
            className="relative w-16 h-16 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-full flex items-center justify-center cursor-pointer shadow-2xl border-4 border-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Robot Face Container */}
            <div className="relative w-10 h-10">
              {/* Eyes */}
              <motion.div
                className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2"
                animate={{ gap: ["4px", "8px", "4px"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-3 h-3 bg-primary-dark rounded-full"
                  animate={{
                    scale: isTyping ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <motion.div
                  className="w-3 h-3 bg-primary-dark rounded-full"
                  animate={{
                    scale: isTyping ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                />
              </motion.div>

              {/* Mouth - shows when typing */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 16, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 bg-primary-dark rounded-full"
                  />
                )}
              </AnimatePresence>

              {/* Antenna */}
              <motion.div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-accent-gold rounded-full"
                animate={{ height: [8, 12, 8] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-gold rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Notification Badge */}
          {!isOpen && messages.length > 1 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
            >
              <span className="text-xs text-white font-bold">
                {messages.length - 1}
              </span>
            </motion.div>
          )}
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
<motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-20 right-2 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-80 md:w-96 max-w-[calc(100vw-2rem)] bg-primary-dark rounded-2xl overflow-hidden shadow-2xl border border-accent-gold/30"
          >
            {/* Chat Header */}
            <motion.div
              className="bg-gradient-to-r from-accent-gold to-yellow-600 p-4 flex items-center justify-between"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center"
                >
                  <Bot className="w-6 h-6 text-accent-gold" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-primary-dark">Toppy</h3>
                  <p className="text-xs text-primary-dark/70 flex items-center gap-1">
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-2 bg-green-500 rounded-full inline-block"
                    />
                    Online
                  </p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-primary-dark/20 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronDown className="w-5 h-5 text-primary-dark" />
              </motion.button>
            </motion.div>

            {/* Messages Area */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-primary-dark to-primary-dark/95">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={
                    message.sender === "bot"
                      ? { opacity: 0, x: -20 }
                      : { opacity: 0, x: 20 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-end gap-2 ${
                      message.sender === "user"
                        ? "flex-row-reverse"
                        : "flex-row"
                    }`}
                  >
                    {/* Avatar */}
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      animate={
                        message.sender === "bot"
                          ? { scale: [1, 1.1, 1] }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {message.sender === "bot" ? (
                        <Bot className="w-5 h-5 text-accent-gold" />
                      ) : (
                        <User className="w-5 h-5 text-white" />
                      )}
                    </motion.div>

                    {/* Message Bubble */}
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      className={`max-w-[75%] p-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-accent-gold text-primary-dark rounded-br-md"
                          : "bg-white/10 text-white rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-primary-dark/60"
                            : "text-white/40"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-end gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-accent-gold" />
                      </div>
                      <div className="bg-white/10 text-white p-3 rounded-2xl rounded-bl-md">
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-accent-gold rounded-full"
                              animate={{
                                y: [0, -5, 0],
                              }}
                              transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                delay: i * 0.15,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white/5 border-t border-white/10">
              <div className="flex items-center gap-2">
                <motion.input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-accent-gold"
                  whileFocus={{ borderColor: "#D4AF37" }}
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!inputText.trim()}
                  className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center disabled:opacity-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="w-5 h-5 text-primary-dark" />
                </motion.button>
              </div>
            </div>

{/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              className="absolute top-20 -left-10 w-20 h-20 bg-accent-gold rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              className="absolute bottom-20 -right-10 w-30 h-30 bg-accent-gold rounded-full blur-3xl pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
