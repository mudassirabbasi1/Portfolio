import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { Send, User, Bot, X, MessageSquare, Sparkles } from "lucide-react";
import { RESUME_CONTEXT } from "../constants";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function GeminiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'm Mudassir's AI assistant. Ask me anything about his skills, projects, or professional background." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error("API key not found");

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            parts: [{ text: `You are a helpful AI assistant for Mudassir Ahmed's professional portfolio. 
            Use the following context to answer questions about him accurately and professionally.
            If you don't know the answer based on the context, say you're not sure but can help with facts from his resume.
            
            CONTEXT:
            ${RESUME_CONTEXT}
            
            USER QUESTION:
            ${userMessage}` }]
          }
        ],
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: "bot", text: "Something went wrong. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-80 sm:w-[400px] bg-[#0A0A0A] rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col h-[550px] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold tracking-tight">CAREER_AI</h3>
                  <p className="text-orange-400 text-[9px] uppercase tracking-[0.2em] font-mono">Status: Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors text-white/40 hover:text-white">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-white text-black font-medium" 
                      : "bg-white/5 text-white/80 border border-white/5"
                  }`}>
                    <div className="flex items-center gap-2 mb-2 opacity-40">
                      {msg.role === "bot" ? <Bot size={12} /> : <User size={12} />}
                      <span className="text-[9px] font-bold uppercase tracking-widest">
                        {msg.role === "bot" ? "System" : "Visitor"}
                      </span>
                    </div>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl animate-pulse">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/5 bg-black/50">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Request data context..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-orange-600 transition-all disabled:opacity-50 disabled:grayscale shadow-[0_4px_12px_rgba(249,115,22,0.3)]"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative"
      >
        <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative w-16 h-16 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center shadow-2xl border border-white/10 hover:border-orange-500/50 hover:scale-105 transition-all active:scale-95">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                <MessageSquare size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-6 top-1/2 -translate-y-1/2 hidden lg:block"
            >
              <div className="bg-[#0A0A0A] border border-white/10 text-white px-5 py-2.5 rounded-2xl whitespace-nowrap shadow-2xl">
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">Query Assistant</span>
                 <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-[#0A0A0A]" />
              </div>
            </motion.div>
        )}
      </button>
    </div>
  );
}
