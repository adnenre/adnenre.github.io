// components/ThemeToggle.tsx
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4 hover:cursor-pointer" onClick={toggleTheme} />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
        className="data-[state=checked]:bg-primary "
      />
      <Moon className="h-4 w-4 hover:cursor-pointer" onClick={toggleTheme} />
    </div>
  );
};
