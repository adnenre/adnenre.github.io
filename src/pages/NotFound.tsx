// components/NotFound.tsx
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  const navigate = useNavigate();

  const { language } = useLanguage();
  const t = translations[language];

  const svgFill = "#1f2937";
  const bgColor = "bg-gray-50";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 ${bgColor}`}
    >
      <div className="max-w-md w-full text-center">
        {/* SVG Illustration */}
        <svg
          width="100%"
          height="300"
          viewBox="0 0 500 300"
          className="mx-auto mb-8"
          aria-hidden="true"
        >
          <rect width="500" height="300" fill="none" />

          {/* Broken window */}
          <path
            d="M100,50 L400,50 L400,250 L100,250 Z"
            stroke={svgFill}
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
          />

          {/* Crack lines */}
          <path
            d="M250,50 L250,150 M250,150 L200,250"
            stroke={svgFill}
            strokeWidth="2"
          />

          {/* 404 Text */}
          <text
            x="250"
            y="140"
            fontSize="60"
            fill={svgFill}
            textAnchor="middle"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            404
          </text>

          {/* Navigation arrow back symbol */}
          <g
            transform="translate(250, 200)"
            onClick={() => navigate(-1)}
            className="hover:cursor-pointer"
          >
            <circle cx="0" cy="0" r="30" fill={svgFill} fillOpacity="0.1" />
            <path d="M-15,0 L5,-10 L5,10 Z" fill={svgFill} />
            <text x="25" y="5" fontSize="16" fill={svgFill} textAnchor="start">
              {t.notFound.goBack}
            </text>
          </g>
        </svg>

        <h1 className="text-2xl font-bold mb-2">{t.notFound.title}</h1>
        <p className="mb-6">{t.notFound.description}</p>

        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="hover:cursor-pointer"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.notFound.goBack}
        </Button>
      </div>
    </div>
  );
};
