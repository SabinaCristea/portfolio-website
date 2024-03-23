function SkillDetails({ src, alt, details }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[5rem] lg:gap-0 lg:flex-row bg-[var(--color-pink-tertiary)] rounded-br-[3rem] lg:rounded-bl-[3rem]
      lg:px-[4rem] lg:py-[2rem] xl:py-[3rem] 2xl:py-0"
    >
      <div className="flex flex-col items-center lg:px-[5rem] gap-8 text-center justify-center">
        <p className="lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.5rem]">{details}</p>
      </div>
      <img src={src} alt={alt} width="35%" />
    </div>
  );
}

export default SkillDetails;
