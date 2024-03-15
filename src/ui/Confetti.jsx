import ConfettiExplosion from "react-confetti-explosion";

function Confetti({ setConfettiCompleted }) {
  return (
    <ConfettiExplosion
      onComplete={() => setConfettiCompleted(true)}
      force={1}
      width="1600"
      height="100vh"
      particleCount="250"
      colors={[
        "var( --color-project-1)",
        "var( --color-project-2)",
        "var( --color-project-3)",
        "var( --color-project-4)",
        "var( --color-project-5)",
      ]}
    />
  );
}

export default Confetti;
