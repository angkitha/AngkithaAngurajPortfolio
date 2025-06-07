import React from "react";
import "../assetStyles/turntable.css";
import turntableImage from '../images/Angkitha.png';

const Turntable: React.FC = () => {
  return (
      <div className = "outer-container">
          <div className = "small-circle" />
          <div className = "connecting-line" />
            <img src={turntableImage} alt="turntable" className="spinning" />
          </div>
  );
};

export default Turntable;


