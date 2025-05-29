'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, MessageCircle, X, Minimize2, Maximize2, Send } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface GlobalAIAssistantProps {
  mode: 'general' | 'products' | 'cart';
  context?: unknown;
  isOpen: boolean;
  onToggle: () => void;
  buttonText?: string;
  className?: string;
}

export const GlobalAIAssistant: React.FC<GlobalAIAssistantProps> = ({
  mode,
  context,
  isOpen,
  onToggle,
  buttonText = "Ask Petty AI",
  className = ""
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Welcome messages based on mode
  const getWelcomeMessage = () => {
    switch (mode) {
      case 'general':
        return "Hi! I'm Petty AI, your comprehensive pet care assistant. I can help with general pet care questions, nutrition advice, breed guidance, and product recommendations. What would you like to know?";
      case 'products':
        return "Hi! I'm Petty AI, here to help you compare products and find the perfect items for your pet. I can analyze multiple products and recommend the best options based on your pet's needs!";
      case 'cart':
        return "Hi! I'm Petty AI, your shopping cart assistant. I can review your cart items, suggest complementary products, check compatibility, and help optimize your order for your pet's needs!";
      default:
        return "Hi! I'm Petty AI, here to help with all your pet care needs!";
    }
  };

  // Initialize with welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        content: getWelcomeMessage(),
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, mode, getWelcomeMessage, messages.length]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
          mode: mode,
          context: context,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: data.response,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(data.error || "Failed to get response");
      }    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "Sorry, I'm having trouble responding right now. Please try again later.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Drag functionality (same as ProductAIChatbot)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMinimized) {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      const rect = e.currentTarget.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && isMinimized) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset, handleMouseMove]);
  const formatAIResponse = (text: string) => {
    const cleanText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .trim();

    const sections = cleanText.split('\n\n').filter(section => section.trim());
    
    return sections.map((section, sectionIndex) => {
      const lines = section.split('\n').map(line => line.trim()).filter(line => line);
      const hasBullets = lines.some(line => line.startsWith('•') || line.startsWith('-'));
      
      if (hasBullets) {
        const bulletItems = lines.filter(line => line.startsWith('•') || line.startsWith('-'));
        const regularLines = lines.filter(line => !line.startsWith('•') && !line.startsWith('-'));
        
        return (
          <div key={sectionIndex} className="mb-4">
            {regularLines.map((line, lineIndex) => (
              <p key={lineIndex} className="mb-2 text-gray-700 leading-relaxed" 
                 dangerouslySetInnerHTML={{ __html: formatInlineText(line) }} 
              />
            ))}
            
            {bulletItems.length > 0 && (
              <ul className="space-y-2 mb-3">
                {bulletItems.map((item, i) => {
                  const content = item.replace(/^[•-]\s*/, '').trim();
                  return (
                    <li key={i} className="flex items-start">
                      <span className="text-[#7E22CE] mr-3 mt-1 text-lg font-bold">•</span>
                      <span className="text-gray-700 leading-relaxed flex-1" 
                            dangerouslySetInnerHTML={{ __html: formatInlineText(content) }} 
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      }
      
      return (
        <div key={sectionIndex} className="mb-4">
          {lines.map((line, lineIndex) => (
            <p key={lineIndex} className="mb-2 text-gray-700 leading-relaxed" 
               dangerouslySetInnerHTML={{ __html: formatInlineText(line) }} 
            />
          ))}
        </div>
      );
    });
  };

  const formatInlineText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#7E22CE]">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/(Petty AI|petty ai)/gi, '<span class="font-semibold text-[#7E22CE]">Petty AI</span>')
      .replace(/(important|crucial|essential|recommended|warning|note)/gi, '<span class="font-semibold text-orange-600">$1</span>')
      .replace(/(\d+(?:\.\d+)?\s*(?:kg|g|lbs?|oz|cups?|tbsp|tsp|years?|months?|weeks?))/gi, '<span class="font-semibold text-blue-600">$1</span>');
  };

  return (
    <>
      {/* AI Button */}
      <Button
        onClick={onToggle}
        className={`bg-[#7E22CE] hover:bg-[#6B21A8] text-white shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
        size="lg"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        {buttonText}
      </Button>      {/* AI Modal */}
      {isOpen && (        <div 
          className={`fixed ${isMinimized ? 'inset-auto' : 'inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center'} z-50 p-4`}
          onClick={(e) => e.stopPropagation()}
        >
          <Card 
            className={`${isMinimized ? 'w-64 h-16 cursor-move draggable-card' : 'w-full sm:w-[400px] md:w-[450px] h-[500px] max-h-[80vh]'} flex flex-col transition-all duration-300 shadow-2xl bg-white ai-chat-container`}
            style={isMinimized ? { 
              position: 'fixed',
              top: position.y || 20,
              right: position.x || 20,
              zIndex: 1000,
              userSelect: 'none'
            } : {}}
            onMouseDown={isMinimized ? handleMouseDown : undefined}
          >
            {/* Header */}
            <CardHeader className={`flex flex-row items-center justify-between space-y-0 pb-3 bg-[#7E22CE] text-white rounded-t-lg ${isMinimized ? 'cursor-move' : ''}`}>
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <h3 className={`font-semibold ${isMinimized ? 'text-sm' : 'text-lg'}`}>
                  Petty AI {mode === 'general' ? '- Pet Care' : mode === 'products' ? '- Product Helper' : '- Cart Assistant'}
                </h3>
              </div>
              <div className="flex items-center space-x-1">                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/20 p-1 h-8 w-8 ai-minimize-button"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onToggle}
                  className="text-white hover:bg-white/20 p-1 h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            {/* Chat Content - hidden when minimized */}
            {!isMinimized && (
              <>
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-[#7E22CE] text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {message.type === 'bot' ? (
                          <div className="prose prose-sm max-w-none">
                            {formatAIResponse(message.content)}
                          </div>
                        ) : (
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>

                {/* Input Section */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={`Ask Petty AI about ${mode === 'general' ? 'pet care' : mode === 'products' ? 'these products' : 'your cart'}...`}
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className="bg-[#7E22CE] hover:bg-[#6B21A8] text-white"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  );
};
