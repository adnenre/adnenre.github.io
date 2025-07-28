import { Outlet } from "react-router-dom";

import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./App.css";
import DotGrid from "@/components/ui/DotGrid";
export default function App() {
  return (
    <ThemeProvider>
      <div className="h-[100%] bg-background text-foreground">
        <Navigation />
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#222222"
          activeColor="#ffffff"
          proximity={130}
          shockRadius={110}
          shockStrength={12}
          resistance={750}
          returnDuration={1.5}
          style={{ width: "100%", height: "100%" }}
        >
          <main className="relative">
            <Outlet />
          </main>
        </DotGrid>
      </div>
    </ThemeProvider>
  );
}
