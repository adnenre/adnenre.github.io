// contexts/LanguageContext.tsx
import { createContext, useContext, useState, ReactNode, FC } from "react";

// Define available languages
type Language = "en" | "fr";

// Type for context value
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

// Create context with undefined default
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provider props type
interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language; // Optional default language
}

// Context Provider component
export const LanguageProvider: FC<LanguageProviderProps> = ({
  children,
  defaultLanguage = "en",
}) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for consuming context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
