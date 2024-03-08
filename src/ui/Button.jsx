import { Link } from "react-router-dom";
import "./Button.module.css";
import styles from "./Button.module.css";

function Button({ to, children, onClick }) {
  if (to)
    return (
      <Link
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} flex items-center tracking-wider px-10 py-0.5`}
      >
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        className={`${styles.btn} flex items-center tracking-wider px-20 py-8 text-[2.5rem] drop-shadow-3xl`}
        onClick={onClick}
      >
        {children}
      </button>
    );
}

export default Button;
