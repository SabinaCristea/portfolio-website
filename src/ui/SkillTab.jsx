import styles from "./SkillTab.module.css";

function SkillTab({ src, alt, children, isActive, handleTabOpen }) {
  return (
    <button
      className={isActive ? `${styles.tab} ${styles.active}` : styles.tab}
      onClick={handleTabOpen}
    >
      <img src={src} alt={alt} width="80%" />
      <p>{children}</p>
    </button>
  );
}

export default SkillTab;
