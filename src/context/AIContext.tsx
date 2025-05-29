'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AIContextType {
  isGlobalAIOpen: boolean;
  setIsGlobalAIOpen: (open: boolean) => void;
  aiMode: 'general' | 'products' | 'cart' | 'product-detail';
  setAIMode: (mode: 'general' | 'products' | 'cart' | 'product-detail') => void;
  chatHistory: Array<{id: string, message: string, response: string, timestamp: Date}>;
  addToHistory: (message: string, response: string) => void;
  clearHistory: () => void;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

export const useAI = () => {
  const context = useContext(AIContext);
  if (context === undefined) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
};

interface AIProviderProps {
  children: ReactNode;
}

export const AIProvider: React.FC<AIProviderProps> = ({ children }) => {
  const [isGlobalAIOpen, setIsGlobalAIOpen] = useState(false);
  const [aiMode, setAIMode] = useState<'general' | 'products' | 'cart' | 'product-detail'>('general');
  const [chatHistory, setChatHistory] = useState<Array<{id: string, message: string, response: string, timestamp: Date}>>([]);

  const addToHistory = (message: string, response: string) => {
    setChatHistory(prev => [...prev, {
      id: Date.now().toString(),
      message,
      response,
      timestamp: new Date()
    }]);
  };

  const clearHistory = () => {
    setChatHistory([]);
  };

  return (
    <AIContext.Provider value={{
      isGlobalAIOpen,
      setIsGlobalAIOpen,
      aiMode,
      setAIMode,
      chatHistory,
      addToHistory,
      clearHistory
    }}>
      {children}
    </AIContext.Provider>
  );
};
