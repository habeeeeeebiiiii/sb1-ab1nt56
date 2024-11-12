import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  type: 'user' | 'bot';
  content: string;
}

export function ChatMessage({ type, content }: ChatMessageProps) {
  return (
    <div className={cn(
      "rounded-lg p-4",
      type === 'bot' ? 'bg-white dark:bg-gray-800 shadow-sm' : 'bg-blue-50 dark:bg-gray-700/50'
    )}>
      <div className="flex gap-4">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
          type === 'bot' 
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
            : 'bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600'
        )}>
          {type === 'bot' ? <Bot className="h-6 w-6" /> : <User className="h-6 w-6" />}
        </div>
        <div className="flex-1 prose dark:prose-invert max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
}