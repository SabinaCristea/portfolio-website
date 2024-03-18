import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
      const isSticky = window.scrollY > 1000;
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

  return (
    <div
      className={`${styles.navigationContainer} ${scroll ? styles.sticky : ""}`}
    >
      <div className="nav-wrapper h-[8rem]">
        <nav className={styles.navigation}>
          <div
            className={`${styles.navLink} ${location.pathname === "/home" ? styles.active : ""}`}
            onClick={() => handleClick("/home")}
          >
            <p className={`${styles.navLinkText} top-[3.5rem]`}>HOME</p>
            <span>
              <img
                src="src/assets/nav-1.svg"
                alt=""
                className="opacity-[0.28]"
              />
            </span>
          </div>

          <div
            className={`${styles.navLink} ${location.pathname === "/about" ? styles.active : ""}`}
            onClick={() => handleClick("/about")}
          >
            <p className={`${styles.navLinkText} top-[3.5rem]`}>ABOUT ME</p>
            <span>
              <img
                src="src/assets/nav-2.svg"
                alt=""
                className="opacity-[0.28]"
              />
            </span>
          </div>

          <div
            className={`${styles.navLink} ${location.pathname === "/skills" ? styles.active : ""}`}
            onClick={() => handleClick("/skills")}
          >
            <p className={`${styles.navLinkText} `}>SKILLS & EXPERIENCE</p>
            <span>
              <img
                src="src/assets/nav-3.svg"
                alt=""
                className="opacity-[0.28] "
              />
            </span>
          </div>

          <div
            className={`${styles.navLink} ${location.pathname === "/projects" ? styles.active : ""}`}
            onClick={() => handleClick("/projects")}
          >
            <p className={`${styles.navLinkText} pl-1 `}>PROJECTS</p>
            <span>
              <img
                src="src/assets/nav-4.svg"
                alt=""
                className="opacity-[0.28]"
              />
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
