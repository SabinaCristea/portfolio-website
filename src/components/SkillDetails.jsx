function SkillDetails({ src, alt, details }) {
  return (
    <div
      className="flex flex-col items-center justify-end lg:justify-center lg:flex-row bg-[var(--color-pink-tertiary)] rounded-br-[3rem] lg:rounded-bl-[3rem]
      lg:px-[4rem] lg:py-[2rem] xl:py-[3rem] 2xl:py-0"
    >
      <div className="flex flex-col items-center px-[2rem] sm:px-[4rem] md:px-[5rem] lg:px-[5rem] text-center justify-center flex-grow lg:flex-grow-0">
        <p className="text-[1.3rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.5rem]">
          {details}
        </p>
      </div>

      <img
        src={src}
        alt={alt}
        className="w-[80%] sm:w-[70%] md:w-[70%] lg:w-[35%] "
      />
    </div>
  );
}

export default SkillDetails;
