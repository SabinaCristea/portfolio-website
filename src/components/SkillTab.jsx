function SkillTab({ src, alt, children, isActive, handleTabOpen }) {
  const tabStyle =
    "flex flex-col items-center justify-center px-[2rem] pb-[1rem] max-h-60 text-2xl";
  const activeStyle = `${tabStyle} bg-[var(--color-pink-tertiary)]`;

  return (
    <button
      className={isActive ? activeStyle : tabStyle}
      onClick={handleTabOpen}
    >
      <img src={src} alt={alt} width="80%" />
      <p>{children}</p>
    </button>
  );
}

export default SkillTab;
