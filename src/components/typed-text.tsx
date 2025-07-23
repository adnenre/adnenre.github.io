import { useEffect, useState } from "react";

interface TypedTextProps {
  strings: readonly string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  startDelay?: number;
  backDelay?: number;
}

export function TypedText({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  loop = false,
  startDelay = 0,
  backDelay = 1000,
}: TypedTextProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      const targetString = strings[currentStringIndex];
      if (currentText.length < targetString.length) {
        timeout = setTimeout(() => {
          setCurrentText(targetString.slice(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, backDelay);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, backSpeed);
      } else {
        const nextIndex = (currentStringIndex + 1) % strings.length;
        if (nextIndex === 0 && !loop) {
          return;
        }
        setCurrentStringIndex(nextIndex);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentStringIndex,
    isTyping,
    strings,
    typeSpeed,
    backSpeed,
    loop,
    backDelay,
  ]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (startDelay > 0) {
      const delayTimeout = setTimeout(() => {
        setIsTyping(true);
      }, startDelay);

      return () => clearTimeout(delayTimeout);
    }
  }, [startDelay]);

  return (
    <span className="inline-block">
      {currentText}
      <span
        className={`inline-block w-0.5 h-6 bg-current ml-1 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}
