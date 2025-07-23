import { Outlet } from "react-router-dom";

import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./App.css";
export default function App() {
  return (
    <ThemeProvider>
      <div className=" bg-background text-foreground">
        <Navigation />
      </div>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
