import { Outlet } from "react-router-dom";

import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./App.css";
import DotGrid from "@/components/ui/DotGrid";
export default function App() {
  return (
    <ThemeProvider>
      <div className="h-[100%] bg-background text-foreground">
        <div className="bg-gray-900 p-6 hidden">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">Hi Im Adnen</h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            if you see this message that means you are inspeting the website code :) welcome to my portfolio website.
          </p>
        </div>
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
