import { useState } from 'react';
import { Header } from './components/Header';
import { ChatMessage } from './components/ChatMessage';
import { InputForm } from './components/InputForm';
import { generateMedicalResponse } from './lib/gemini';
import { useToast } from './hooks/use-toast';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const INITIAL_MESSAGE = `Welcome to Medland.ai! I'm here to assist with medical case discussions, disease pathophysiology, treatment protocols, clinical guidelines, drug mechanisms, and more. How can I help you today?`;

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: INITIAL_MESSAGE }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await generateMedicalResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto max-w-4xl px-4">
        <div className="space-y-4 pb-32">
          {messages.map((message, index) => (
            <ChatMessage key={index} type={message.type} content={message.content} />
          ))}
          {isLoading && (
            <div className="flex items-start space-x-4 animate-pulse">
              <div className="w-10 h-10 rounded-full bg-blue-600/50" />
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
              </div>
            </div>
          )}
        </div>
      </main>
      <InputForm 
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;