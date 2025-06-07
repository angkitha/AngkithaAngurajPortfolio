// src/assets/FlapBoard.tsx
import React from "react";
import "../assetStyles/FlapBoard.css";
import SplitFlap from "./SplitFlap";

interface FlapBoardProps {
  message: string;
  onRowClick?: (rowIndex: number) => void;
}

const FlapBoard: React.FC<FlapBoardProps> = ({ message, onRowClick }) => {
  const rows = 7;
  const cols = 15;
  const totalCells = rows * cols;

  const paddedMessage = message.padEnd(totalCells, " ").slice(0, totalCells);
  const gridArray = Array.from(paddedMessage);
  
  const handleRowClick = (rowIndex: number) => {
    if (onRowClick) onRowClick(rowIndex);
  };

  return (
      <div className="flap-board">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flap-row"
            onClick={() => handleRowClick(rowIndex)}
          >
          {Array.from({ length: cols }).map((_, colIndex) => {
            const i = rowIndex * cols + colIndex;
            return (
              <SplitFlap key={i} char={gridArray[i].toUpperCase()} />
            );
          })}
          </div>
        ))}
      </div>
      
  );
};

export default FlapBoard;



