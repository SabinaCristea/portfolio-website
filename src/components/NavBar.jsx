import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";

function NavBar() {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isSticky = window.scrollY > 1050;
      setScroll(isSticky);

      const nav = document.querySelector("nav");
      const navHeight = nav.offsetHeight;

      const body = document.body;
      body.style.paddingTop = isSticky ? `${navHeight}px + 10px` : 0;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navTextStyle =
    "md:top-[3rem] lg:text-[1.8rem] absolute lg:top-[3.5rem] tracking-[0.2rem]";

  return (
    <div
      className={`hidden md:flex md:items-center md:justify-center md:max-w-[100vw] md:m-auto md:z-[999] md:py-[1rem] ${scroll ? styles.sticky : ""}`}
    >
      <div className="nav-wrapper h-[8rem]">
        <nav className="lg:w-[100rem] flex items-center justify-between xl:w-[110rem] md:w-[80rem]">
          <div
            className={`${styles.navLink} ${location.pathname === "/home" ? styles.active : ""}`}
            onClick={() => handleClick("/home")}
          >
            <p className={`${navTextStyle} md:left-[2.5rem] lg:left-[auto]`}>
              HOME
            </p>
            <span>
              <img
                src="src/assets/svgs/nav-1.svg"
                alt=""
                className="opacity-[0.28] md:w-[90%] lg:w-[100%]"
              />
            </span>
          </div>

          <div
            className={`${styles.navLink} ${location.pathname === "/about" ? styles.active : ""}`}
            onClick={() => handleClick("/about")}
          >
            <p className={`${navTextStyle} md:left-[2rem] lg:left-[auto]`}>
              ABOUT ME
            </p>
            <span>
              <img
                src="src/assets/svgs/nav-2.svg"
                alt=""
                className="opacity-[0.28] md:w-[90%] lg:w-[100%]"
              />
            </span>
          </div>

          <div
            className={`${styles.navLink} ${location.pathname === "/skills" ? styles.active : ""}`}
            onClick={() => handleClick("/skills")}
          >
            <p className={`${navTextStyle} md:left-[2.8rem] lg:left-[auto]`}>
              SKILLS & EXPERIENCE
            </p>
            <span>
              <img
                src="src/assets/svgs/nav-3.svg"
                alt=""
                className="opacity-[0.28] md:w-[90%] lg:w-[100%]"
              />
            </span>
          </div>

          <div
            className={`${styles.navLink} ${location.pathname === "/projects" ? styles.active : ""}`}
            onClick={() => handleClick("/projects")}
          >
            <p className={`${navTextStyle} md:left-[2.8rem] lg:left-[auto] `}>
              PROJECTS
            </p>
            <span>
              <img
                src="src/assets/svgs/nav-4.svg"
                alt=""
                className="opacity-[0.28] md:w-[90%] lg:w-[100%]"
              />
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
