import { Stethoscope } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 dark:border-gray-800">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Medland.ai</h1>
              <div className="flex flex-col items-start gap-1">
                <Badge variant="secondary" className="text-xs">Testing Version</Badge>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 italic leading-tight">
                  "When an engineering student plays doctor at 3 AM because Netflix was boring... 🤷‍♂️"
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
            Medical AI Assistant
          </p>
        </div>
      </div>
    </header>
  );
}