// src/components/SplitFlap.tsx
import React, { useEffect, useState, useRef } from "react";
import "../assetStyles/SplitFlap.css";

interface SplitFlapProps {
  char: string;
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .,:;!?";
const getRandomChar = () =>
  CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

const SplitFlap: React.FC<SplitFlapProps> = ({ char }) => {
  const [currentChar, setCurrentChar] = useState(getRandomChar());
  const [currentChar2, setCurrentChar2] = useState(getRandomChar());
  const [isFlipping, setIsFlipping] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  const startShuffle = () => {
    let flips = 0;
    const maxFlips = 10 + Math.floor(Math.random() * 10); // Shuffle steps

    intervalRef.current = setInterval(() => {
      setIsFlipping(true);
      setCurrentChar(getRandomChar());
      setCurrentChar2(getRandomChar());
      flips++;

      if (flips >= maxFlips) {
        clearInterval(intervalRef.current!);
        setTimeout(() => {
          setCurrentChar(char);
          setIsFlipping(false);
          // Wait 5s then start again
          setTimeout(() => {
            startShuffle();
          }, 10000);
        }, 150);
      } else {
        setTimeout(() => setIsFlipping(false), 200);
      }
    }, 300);
  };

  useEffect(() => {
    startShuffle();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [char]);

  return (
    <div className="splitflap-wrapper grid-cell">
      <div className={`splitflap ${isFlipping ? "flip" : ""}`}>
        {!isFlipping && (
          <>
            <div className="full">{currentChar}</div>
          </>
        )}
        {isFlipping && (
          <div className="fold">
            <div className="fold-top">{currentChar}</div>
            <div className="full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplitFlap;
