
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Toggle 
      pressed={isDark}
      onPressedChange={toggleTheme}
      aria-label="Toggle dark mode"
      className="rounded-full w-10 h-10 p-0 flex justify-center items-center"
    >
      {isDark ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Toggle>
  );
};

export default DarkModeToggle;
