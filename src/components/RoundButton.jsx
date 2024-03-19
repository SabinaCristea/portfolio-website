import { Link } from "react-router-dom";
import styles from "./RoundButton.module.css";

function ProjectButton({ to, children, onClick }) {
  if (to)
    return (
      <Link
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-[var(--color-pink-primary)] rounded-full flex items-center justify-center p-[0.4rem] ${styles.roundBtn}`}
      >
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        className={`bg-[var(--color-pink-primary)] rounded-full flex items-center justify-center p-[0.4rem] ${styles.roundBtn}`}
      >
        {children}
      </button>
    );
}

export default ProjectButton;
