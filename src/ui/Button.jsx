import { Link } from "react-router-dom";
import "./Button.module.css";

function Button({ url, icon, children }) {
  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      {icon}
      {children}
    </Link>
  );
}

export default Button;
