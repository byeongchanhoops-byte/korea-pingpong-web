import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const CoachBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '안녕하세요! 코리아탁구교실 AI 코치입니다. 탁구 규칙이나 이용 방법에 대해 무엇이든 물어보세요! 🏓' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Initialize Gemini
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        당신은 군산 '코리아탁구교실'의 친절한 AI 코치입니다.
        
        [탁구장 정보]
        - 위치: 군산시 수송동 (전북 군산시 진포3길 48)
        - 특징: 로봇볼머신 2대, 레슨기계 1대, 무료 원포인트 코칭(관장님), 쾌적한 휴게실.
        - 가격: 
          * 학생 단식: 30분 5,000원 / 60분 8,000원
          * 학생 복식: 30분 7,000원 / 60분 10,000원
          * 일반 단식: 30분 7,000원 / 60분 10,000원
          * 일반 복식: 30분 9,000원 / 60분 13,000원
          * 월 회원권: 1개월 7만원 (3개월 18만원)
        - 분위기: 초보자, 학생, 주부 환영.
        
        [역할]
        - 탁구 규칙(단식/복식/서브 등)에 대해 친절하게 설명합니다.
        - 탁구장 이용 요금 및 시설에 대해 안내합니다.
        - 초보자가 탁구를 시작할 때 필요한 조언(라켓 쥐는 법 등)을 제공합니다.
        - 말투는 매우 친절하고 격려하는 해요체를 사용하세요. 이모지를 적절히 사용하세요.
        - 답변은 300자 이내로 간결하게 해주세요.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const responseText = response.text || "죄송합니다. 잠시 후 다시 시도해주세요.";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "오류가 발생했습니다. 잠시 후 다시 질문해주세요." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-600 text-white p-4 rounded-full shadow-2xl hover:bg-brand-700 transition-all transform hover:scale-110 ${isOpen ? 'hidden' : 'flex'} items-center gap-2`}
        aria-label="AI 코치에게 질문하기"
      >
        <MessageCircle size={28} />
        <span className="font-bold hidden sm:inline">AI 코치 질문하기</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[360px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-fade-in-up h-[500px]">
          {/* Header */}
          <div className="bg-brand-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold">AI 탁구 코치</h3>
                <p className="text-xs text-brand-100">무엇이든 물어보세요!</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3 shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-brand-600" />
                  <span className="text-xs text-gray-500">생각하는 중...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="예: 탁구채 잡는 법 알려줘"
                className="flex-1 bg-gray-100 text-gray-900 placeholder-gray-500 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-brand-600 text-white p-2 rounded-full hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};