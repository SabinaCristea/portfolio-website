import React, { useState } from "react";

const Tooltip = React.memo(function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block ">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {showTooltip && (
        <div className="absolute top-[100%] left-[50%] translate-x-[-50%] bg-[var(--color-pink-tertiary)] text-[1.4rem] text-[var(--color-black)] px-[2rem] py-[1rem] z-[9999] rounded-[0.5rem] whitespace-nowrap mt-[1rem] shadow-xl">
          {text}
        </div>
      )}
    </div>
  );
});

export default Tooltip;
