function SkillDetails({ src, alt, details }) {
  return (
    <div
      className="flex bg-[#ede7de] rounded-br-[3rem] rounded-bl-[3rem]
      px-[4rem]"
    >
      <div className="flex flex-col items-center px-[5rem] gap-8 text-center justify-center">
        <p className="text-[2.5rem]">{details}</p>
      </div>
      <img src={src} alt={alt} width="35%" />
    </div>
  );
}

export default SkillDetails;
