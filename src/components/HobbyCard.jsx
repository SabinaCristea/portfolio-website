import { useState } from "react";

function HobbyCard({ src, alt, children, bgColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle =
    "hobbyCardSide absolute h-[28rem] sm:h-[33rem] md:h-[40rem] lg:h-[38rem] xl:h-[40rem] transition-all duration-[0.8s] ease top-0 left-0 w-[100%] rounded-[2rem] md:rounded-[3rem] lg:rounded-[2rem] xl:rounded-[3rem] overflow-hidden flex items-center justify-center shadow-hobbyCard";

  return (
    <div
      className="relative h-[28rem] sm:h-[33rem] md:h-[40rem] lg:h-[38rem] xl:h-[40rem] w-[23rem] sm:w-[27rem] md:w-[32rem] lg:w-[28rem] xl:w-[32rem] rounded-[2rem] md:rounded-[3rem] lg:rounded-[2rem] xl:rounded-[3rem]"
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
        <div className="text-[1.6rem] sm:text-[2rem] md:text-[2.2rem] text-center px-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default HobbyCard;
