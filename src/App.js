import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [hoveredStar, setHoveredStar] = useState(null);
  const handleStarHover = (placeValue) => {
    setHoveredStar(placeValue);
  };
  const renderStars = () => {
    const star = [];
    for (let i = 1; i <= 10; i++) {
      star.push(
        <div
          onMouseEnter={() => handleStarHover(i)}
          onClick={() => handleStarHover(i)}
          // onMouseLeave={() => handleStarHover(null)}
          onMo
        >
          {i <= hoveredStar ? "\u2605" : "\u2606"}
        </div>
      );
    }
    return star;
  };
  return (
    <div>
      {renderStars()}
      <p>star Count: {hoveredStar}</p>
      <button onClick={() => handleStarHover(null)}>Reset</button>
    </div>
  );
}
