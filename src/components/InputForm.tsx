import { ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface InputFormProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function InputForm({ input, setInput, onSubmit, isLoading }: InputFormProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-gradient-to-t from-white via-white to-white/0 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900/0 pt-6 pb-4">
      <div className="container mx-auto max-w-4xl px-4">
        <form onSubmit={onSubmit} className="relative">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a medical question..."
            className="w-full pr-20 resize-none bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            rows={1}
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onSubmit(e);
              }
            }}
          />
          <Button 
            type="submit" 
            size="icon"
            className="absolute right-2 top-2 h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-700"
            disabled={isLoading}
            variant="ghost"
          >
            <ArrowUp className={`h-5 w-5 ${isLoading ? 'animate-spin' : 'animate-bounce'}`} />
          </Button>
        </form>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Press Enter to send
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Powered by Gemini AI • Testing Version
          </p>
        </div>
      </div>
    </div>
  );
}