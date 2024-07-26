import { useLocation } from "react-router-dom";

function NavLink({
  navLinkStyle,
  handleClick,
  styles,
  children,
  alt,
  navNo,
  pathName,
  onclose,
}) {
  const location = useLocation();

  return (
    <button
      className={`${navLinkStyle} ${location.pathname === `/${pathName}` ? styles.active : ""}`}
      onClick={() => {
        handleClick(`/${pathName}`);
        if (onclose) {
          onclose();
        }
      }}
    >
      {children}
      <img
        src={`/assets/svgs/nav-${navNo}.svg`}
        alt={alt}
        className="opacity-[0.28] md:w-[80%] lg:w-[100%]"
      />
    </button>
  );
}

export default NavLink;
