import styles from "./HobbyCard.module.css";

function HobbyCard({ src, alt, children, bgColor }) {
  return (
    <div className={`${styles.hobbyCard}`}>
      <div
        className={` ${styles.hobbyCardSide} ${styles.hobbyCardSideFront} flex`}
        style={{ backgroundColor: bgColor }}
      >
        <img src={src} alt={alt} className="w-[100%] h-[auto]" />
      </div>
      <div
        className={` ${styles.hobbyCardSide} ${styles.hobbyCardSideBack}`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="text-[2.2rem] text-center px-10">{children}</div>
      </div>
    </div>
  );
}

export default HobbyCard;
