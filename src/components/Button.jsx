import React from "react";
import { Link } from "react-router-dom";

const Button = React.memo(function Button({ to, children, onClick }) {
  const btnStyle = `flex items-center tracking-wider rounded-[100rem] leading-4 relative link:no-underline link:transition-all link:duration-[0.4s] visited:no-underline visited:transition-all visited:duration-[0.4s] hover:translate-y-[-0.3rem] hover:text-[var(--color-pink-primary)] hover:shadow-btnHover after:hover:scale-x-[1.2] after:hover:scale-y-[1.4] after:hover:opacity-0 active:translate-y-[-0.1rem] active:shadow-none after:inline-block after:h-[100%] after:w-[100%] after:rounded-[10rem] after:absolute after:top-0 after:left-0 after:z-[-1] after:transition-all after:duration-[0.4s] justify-center`;

  if (to) {
    const activeClassName = "transform-none shadow-none";

    return (
      <Link
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnStyle} md:px-[2rem] md:py-[0.5rem] lg:px-[1.5rem] xl:px-[2.5rem] lg:py-[0.2rem] after:bg-[var(--color-green-transparent-btn)] hover:bg-[var(--color-green)] ${activeClassName}`}
      >
        {children}
      </Link>
    );
  }

  if (onClick)
    return (
      <button
        className={`${btnStyle} px-[4rem] lg:px-[5rem] py-[2rem] lg:text-[2rem] drop-shadow-3xl mt-[5rem] lg:mt-[7rem] after:bg-[var(--color-project-4)] hover:bg-[var(--color-project-5)]`}
        onClick={onClick}
      >
        {children}
      </button>
    );
});
export default Button;
