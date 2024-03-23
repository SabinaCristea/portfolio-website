function SkillTab({ src, alt, children, isActive, handleTabOpen }) {
  const tabStyle =
    "flex  lg:flex-col items-center lg:justify-center px-[1rem] 2xl:px-[2rem] lg:pb-[1rem] md:h-[10rem] md:w-[23rem] lg:h-[auto] lg:max-h-[15rem] lg:w-[auto] last:rounded-bl-[3rem] lg:last:rounded-bl-[0rem]";
  const activeStyle = `${tabStyle} bg-[var(--color-pink-tertiary)]`;

  return (
    <button
      className={isActive ? activeStyle : tabStyle}
      onClick={handleTabOpen}
    >
      <img src={src} alt={alt} className="w-[40%] lg:w-[80%]" />
      <div className="flex justify-center items-center w-[60%] lg:w-[auto]">
        <p className="md:text-[1.5rem] lg:text-[1.4rem] 2xl:text-[1.5rem]">{children}</p>
      </div>
    </button>
  );
}

export default SkillTab;
