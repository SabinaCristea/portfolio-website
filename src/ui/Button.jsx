import { Link } from "react-router-dom";
import "./Button.module.css";
import styles from "./Button.module.css";

function Button({ url, children }) {
  return (
    <Link
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.btn} flex items-center tracking-wider px-8 py-0.5`}
    >
      {children}
    </Link>
  );
}

export default Button;
