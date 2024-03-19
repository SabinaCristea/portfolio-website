import { Link } from "react-router-dom";

function ProjectButton({ to, children, onClick }) {
  const btnStyle =
    "bg-[var(--color-pink-primary)] rounded-full flex items-center justify-center p-[0.4rem] drop-shadow-roundBtn hover:translate-x-[-0.1rem] hover:translate-y-[-0.3rem] hover:drop-shadow-roundBtnHover active:drop-shadow-none active:translate-x-[0.2rem] active:translate-y-[0.4rem]";

  if (to)
    return (
      <Link
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        className={btnStyle}
      >
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={btnStyle}>
        {children}
      </button>
    );
}

export default ProjectButton;
