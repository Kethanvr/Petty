"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,  X,
  Minimize2,
  Maximize2,
  Send,
  Bot,
  Loader2
} from "lucide-react";
import { Product } from "@/lib/products";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface ProductAIChatbotProps {
  product: Product;
}

export default function ProductAIChatbot({ product }: ProductAIChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  // Reset messages when product changes
  useEffect(() => {
    setMessages([]);
    if (isOpen) {
      // Add welcome message for new product
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        content: `Hi! I'm Petty AI, your smart assistant for ${product.name}. I can help you with information about this product, nutrition details, suitability for your pet, and more. Feel free to ask me anything!`,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [product.id, product.name, isOpen]);

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
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
          product: product,
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
    }  };
  
  const handleHeaderMouseDown = (e: React.MouseEvent) => {
    if (isMinimized) {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      const card = e.currentTarget.closest('.draggable-card') as HTMLElement;
      if (card) {
        const rect = card.getBoundingClientRect();
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
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

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
      setPosition({ x: 0, y: 0 }); // Reset position when opening
      // Add welcome message when opening
      if (messages.length === 0) {
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          type: "bot",
          content: `Hi! I'm Petty AI, your smart assistant for ${product.name}. I can help you with information about this product, nutrition details, suitability for your pet, and more. Feel free to ask me anything!`,
          timestamp: new Date(),
        };
        setMessages([welcomeMessage]);
      }
    }
  };
  const getSuggestionQuestions = () => [
    `Is this ${product.name} suitable for my pet?`,
    `What are the nutritional benefits of this product?`,
    `Can this be given to senior pets?`,
    `What's the recommended serving size?`,
  ];  const formatAIResponse = (text: string) => {
    // Clean up the text first
    const cleanText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic text
      .trim();

    // Split into sections by double line breaks first
    const sections = cleanText.split('\n\n').filter(section => section.trim());
    
    return sections.map((section, sectionIndex) => {
      const lines = section.split('\n').map(line => line.trim()).filter(line => line);
        // Check if this entire section is a bullet list
      const hasBullets = lines.some(line => line.startsWith('•') || line.startsWith('-'));
      
      if (hasBullets) {
        // Separate bullet items from regular text
        const bulletItems = lines.filter(line => line.startsWith('•') || line.startsWith('-'));
        const regularLines = lines.filter(line => !line.startsWith('•') && !line.startsWith('-'));
        
        return (
          <div key={sectionIndex} className="mb-4">
            {/* Render regular text first */}
            {regularLines.map((line, lineIndex) => (
              <p key={lineIndex} className="mb-2 text-gray-700 leading-relaxed" 
                 dangerouslySetInnerHTML={{ __html: formatInlineText(line) }} 
              />
            ))}
            
            {/* Render bullet list */}
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
      
      // Handle numbered lists
      else if (lines.some(line => /^\d+\./.test(line))) {
        const numberedItems = lines.filter(line => /^\d+\./.test(line));
        const regularLines = lines.filter(line => !/^\d+\./.test(line));
        
        return (
          <div key={sectionIndex} className="mb-4">
            {/* Render regular text first */}
            {regularLines.map((line, lineIndex) => (
              <p key={lineIndex} className="mb-2 text-gray-700 leading-relaxed" 
                 dangerouslySetInnerHTML={{ __html: formatInlineText(line) }} 
              />
            ))}
            
            {/* Render numbered list */}
            {numberedItems.length > 0 && (
              <ol className="space-y-2 mb-3">
                {numberedItems.map((item, i) => {
                  const content = item.replace(/^\d+\.\s*/, '').trim();
                  const number = item.match(/^(\d+)\./)?.[1];
                  return (
                    <li key={i} className="flex items-start">
                      <span className="text-[#7E22CE] font-bold mr-3 mt-1">
                        {number}.
                      </span>
                      <span className="text-gray-700 leading-relaxed flex-1" 
                            dangerouslySetInnerHTML={{ __html: formatInlineText(content) }} 
                      />
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        );
      }
      
      // Regular paragraphs
      else {
        return (
          <div key={sectionIndex} className="mb-4">
            {lines.map((line, lineIndex) => (
              <p key={lineIndex} className="mb-2 text-gray-700 leading-relaxed" 
                 dangerouslySetInnerHTML={{ __html: formatInlineText(line) }} 
              />
            ))}
          </div>
        );
      }
    });
  };
    const formatInlineText = (text: string) => {
    // Process bold, italic, and special formatting
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#7E22CE]">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/(Petty AI|petty ai)/gi, '<span class="font-semibold text-[#7E22CE]">Petty AI</span>')
      .replace(/(important|crucial|essential|recommended|warning|note)/gi, '<span class="font-semibold text-orange-600">$1</span>')
      .replace(/(\d+(?:\.\d+)?\s*(?:kg|g|lbs?|oz|cups?|tbsp|tsp|years?|months?|weeks?))/gi, '<span class="font-semibold text-blue-600">$1</span>');
  };

  return (
    <>
      {/* Chat Button */}      <Button
        onClick={toggleChat}
        className="bg-[#7E22CE] hover:bg-[#6B21A8] text-white shadow-lg hover:shadow-xl transition-all duration-300"
        size="lg"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Ask Petty AI About This Product
      </Button>      {/* Chat Modal */}
      {isOpen && (
        <div className={`fixed ${isMinimized ? 'inset-auto' : 'inset-0 bg-black bg-opacity-50 flex items-center justify-center'} z-50 p-4`}>          
          <Card 
            className={`${isMinimized ? 'w-64 h-16 cursor-move draggable-card' : 'w-full max-w-2xl max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-2rem)]'} flex flex-col transition-all duration-300 shadow-2xl bg-white`}
            style={isMinimized ? { 
              position: 'fixed',
              top: position.y || 20,
              right: position.x || 20,
              zIndex: 1000,
              userSelect: 'none'
            } : {}}
          >{/* Header */}
            <CardHeader 
              className={`flex flex-row items-center justify-between space-y-0 pb-3 bg-[#7E22CE] text-white rounded-t-lg ${isMinimized ? 'cursor-move' : ''}`}
              onMouseDown={isMinimized ? handleHeaderMouseDown : undefined}
            >
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <CardTitle className="text-lg">Petty AI</CardTitle>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/20"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            {!isMinimized && (
              <>
                {/* Product Info Bar */}
                <div className="px-4 py-2 bg-gray-50 border-b">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-[#7E22CE]/10 text-[#7E22CE]">
                      {product.category}
                    </Badge>
                    <span className="text-sm text-gray-600 truncate">{product.name}</span>
                  </div>
                </div>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === "user"
                            ? "bg-[#7E22CE] text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >                        <div className="flex items-start space-x-2">
                          {message.type === "bot" && <Bot className="w-4 h-4 mt-0.5 text-[#7E22CE]" />}
                          <div className="flex-1">
                            {message.type === "bot" ? (
                              <div className="text-sm">
                                {formatAIResponse(message.content)}
                              </div>
                            ) : (
                              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                            )}
                            <span className="text-xs opacity-70 mt-1 block">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-[#7E22CE]" />
                        <Loader2 className="w-4 h-4 animate-spin text-[#7E22CE]" />
                        <span className="text-sm text-gray-600">Petty AI is thinking...</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </CardContent>

                {/* Suggestions */}
                {messages.length <= 1 && (
                  <div className="px-4 py-2 border-t bg-gray-50">
                    <p className="text-xs text-gray-600 mb-2">Try asking:</p>
                    <div className="flex flex-wrap gap-1">
                      {getSuggestionQuestions().map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs h-6 px-2"
                          onClick={() => setInputValue(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t bg-white rounded-b-lg">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Ask about this product..."
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className="bg-[#7E22CE] hover:bg-[#6B21A8]"
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
}
