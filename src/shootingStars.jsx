import React from "react";
import "./shootingStars.css";

function ShootingStars() {
  return (
    <div className="shooting-stars">
      {[...Array(60)].map((_, i) => {
        const left = Math.random() * 150;
        const delay = Math.random() * 10;
        const duration = Math.random() * 2 + 15;

        return (
          <div
            key={i}
            className="shooting-star"
            style={{
              left: `${left}vw`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default ShootingStars;
