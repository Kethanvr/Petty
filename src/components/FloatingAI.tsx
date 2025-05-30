"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Bot, X, Minimize2, Maximize2, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useAI } from '@/context/AIContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface Position {
  x: number;
  y: number;
}

export default function FloatingAI() {
  const { isGlobalAIOpen, setIsGlobalAIOpen } = useAI();
  const [isMinimized, setIsMinimized] = useState(false);  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m Petty AI, your **general pet care assistant**. I can help you with pet care advice, nutrition tips, and provide information about all our available products. For specific product comparisons or cart reviews, you can also use the specialized AI assistants on those pages. How can I help you today? 🐾',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);  const [position, setPosition] = useState<Position>({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  // Adjust initial position for mobile
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setPosition({ x: window.innerWidth - 80, y: window.innerHeight - 200 });
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatAIResponse = (text: string) => {
    // Handle bullet points
    const lines = text.split('\n');
    const formattedLines = lines.map(line => {
      // Convert bullet points
      if (line.match(/^[•·▪▫◦‣⁃]\s/)) {
        return `<li class="ml-4">${line.substring(2)}</li>`;
      }
      if (line.match(/^[-*]\s/)) {
        return `<li class="ml-4">${line.substring(2)}</li>`;
      }
      if (line.match(/^\d+\.\s/)) {
        return `<li class="ml-4 list-decimal">${line.replace(/^\d+\.\s/, '')}</li>`;
      }
      
      return line;
    });

    let result = formattedLines.join('\n');
    
    // Wrap consecutive list items in ul tags
    result = result.replace(/(<li[^>]*>.*<\/li>\n?)+/g, (match) => {
      return `<ul class="list-disc space-y-1 my-2">${match}</ul>`;
    });
    
    // Handle bold text
    result = result.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-purple-700">$1</strong>');
    
    // Handle paragraphs
    result = result.replace(/\n\n/g, '</p><p class="mb-2">');
    if (!result.startsWith('<ul') && !result.startsWith('<p')) {
      result = `<p class="mb-2">${result}</p>`;
    }
    
    return result;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          mode: 'general',
          context: null
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMinimized) {
      setIsDragging(true);
      const rect = dragRef.current?.getBoundingClientRect();
      if (rect) {
        setDragStart({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    }
  };
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging && isMinimized) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Keep within viewport bounds
      const maxX = window.innerWidth - 80;
      const maxY = window.innerHeight - 80;
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    }
  }, [isDragging, isMinimized, dragStart]);

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
  }, [isDragging, handleMouseMove]);// Prevent body scroll when modal is open on mobile
  useEffect(() => {
    if (isGlobalAIOpen && !isMinimized) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [isGlobalAIOpen, isMinimized]);  if (!isGlobalAIOpen) {
    return null;
  }  if (isMinimized) {
    return (
      <div
        ref={dragRef}
        className="fixed z-50 cursor-move floating-ai-minimized"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`
        }}
        onMouseDown={handleMouseDown}
      >        
        <Card className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 floating-ai touch-target">
          <div className="flex items-center space-x-2">
            <Bot className="w-5 h-5 md:w-4 md:h-4" />
            <span className="text-sm font-medium hidden sm:inline">General AI</span>
            <Button
              onClick={() => setIsMinimized(false)}
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white hover:bg-white/20 touch-target"
            >
              <Maximize2 className="w-3 h-3" />
            </Button>            <Button
              onClick={() => setIsGlobalAIOpen(false)}
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white hover:bg-white/20 touch-target"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </Card>
      </div>
    );
  }  return (
    <>
      {/* Centered AI Chat with backdrop */}
      <div 
        className="ai-chat-modal-overlay" 
        onClick={(e) => {
          // Only close if clicking the backdrop, not the modal content
          if (e.target === e.currentTarget) {
            setIsGlobalAIOpen(false);
          }
        }}
      >
        <Card className="ai-chat-container w-full sm:w-[400px] md:w-[450px] h-[500px] max-h-[80vh] bg-white shadow-2xl border border-purple-200 rounded-2xl overflow-hidden relative z-50" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 rounded-full p-2">
                <Bot className="w-5 h-5" />
              </div>            
              <div>
                <h3 className="font-semibold text-lg">Petty AI - General</h3>
                <p className="text-purple-100 text-sm">Pet Care & Product Info</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">              <Button
                onClick={() => setIsMinimized(true)}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white hover:bg-white/20 touch-target ai-minimize-button"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>              <Button
                onClick={() => setIsGlobalAIOpen(false)}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white hover:bg-white/20 touch-target"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="ai-chat-messages flex-1 overflow-y-auto p-4 space-y-4 max-h-[480px]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl p-3 ${
                    message.role === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <div 
                      className="text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatAIResponse(message.content) }}
                    />
                  ) : (
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  )}
                  <p className="text-xs opacity-60 mt-2">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-xl p-3">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-purple-600" />
                    <span className="text-sm text-gray-600">Petty AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-2">            
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about general pet care, nutrition, products..."
                className="flex-1 border-purple-200 focus:border-purple-500"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2">            
              <div className="flex space-x-1">
                <Badge variant="outline" className="text-xs text-purple-600 border-purple-200">
                  General Assistant
                </Badge>
              </div>
              <p className="text-xs text-gray-500">
                Press Enter to send
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
