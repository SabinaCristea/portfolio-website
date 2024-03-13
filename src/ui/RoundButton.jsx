import { Link } from "react-router-dom";
import styles from "./RoundButton.module.css";

function ProjectButton({ to, children }) {
  return (
    <Link
      to={to}
      className={`bg-[var(--color-pink-primary)] rounded-full flex items-center justify-center p-[0.4rem] ${styles.roundBtn}`}
    >
      {children}
    </Link>
  );
}

export default ProjectButton;
