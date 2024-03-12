import { Link } from "react-router-dom";
import "./Button.module.css";
import styles from "./Button.module.css";

function Button({ to, children, onClick }) {
  const commonClasses = `flex items-center tracking-wider`;


  if (to)
    return (
      <Link
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${commonClasses} px-10 py-0.5 text-[1.6rem]`}
      >
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        className={`${styles.btn} ${commonClasses} px-20 py-8 text-[2rem] drop-shadow-3xl mt-[7rem]`}
        onClick={onClick}
      >
        {children}
      </button>
    );
}

export default Button;
