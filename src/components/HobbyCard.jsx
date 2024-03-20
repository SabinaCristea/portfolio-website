import { useState } from "react";

function HobbyCard({ src, alt, children, bgColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle =
    "hobbyCardSide absolute h-[40rem] transition-all duration-[0.8s] ease top-0 left-0 w-[100%] rounded-[3rem] overflow-hidden flex items-center justify-center shadow-hobbyCard";

  return (
    <div
      className="relative h-[40rem] w-[32rem] rounded-[3rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: "150rem",
        MozPerspective: "150rem",
      }}
    >
      <div
        className={cardStyle}
        style={{
          backgroundColor: bgColor,
          backfaceVisibility: "hidden",
          transform: isHovered ? "rotateY(-180deg)" : "rotateY(0)",
        }}
      >
        <img src={src} alt={alt} className="w-[100%] h-[auto]" />
      </div>
      <div
        className={cardStyle}
        style={{
          backgroundColor: bgColor,
          backfaceVisibility: "hidden",
          transform: isHovered ? "rotateY(0)" : "rotateY(180deg)",
        }}
      >
        <div className="text-[2.2rem] text-center px-10">{children}</div>
      </div>
    </div>
  );
}

export default HobbyCard;
