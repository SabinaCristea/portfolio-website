import { useLocation } from "react-router-dom";

function NavLink({
  navLinkStyle,
  handleClick,
  styles,
  children,
  alt,
  navNo,
  pathName,
}) {
  const location = useLocation();

  return (
    <div
      className={`${navLinkStyle} ${location.pathname === `/${pathName}` ? styles.active : ""}`}
      onClick={() => handleClick(`/${pathName}`)}
    >
      {children}
      <img
        src={`src/assets/svgs/nav-${navNo}.svg`}
        alt={alt}
        className="opacity-[0.28] md:w-[90%] lg:w-[100%]"
      />
    </div>
  );
}

export default NavLink;
