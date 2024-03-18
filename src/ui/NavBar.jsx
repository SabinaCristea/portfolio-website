import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";

function NavBar() {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  // console.log(location);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isSticky = window.scrollY > 600;
  //     setScroll(isSticky);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
          <NavLink
            to="/home"
            className={`${styles.navLink} ${location.pathname === "/home" ? styles.active : ""}`}
          >
            <p className={`${styles.navLinkText} top-[3.5rem]`}>HOME</p>
            <span>
              <img
                src="src/assets/nav-1.svg"
                alt=""
                className="opacity-[0.28]"
              />
            </span>
          </NavLink>

          <NavLink
            to="/about"
            className={`${styles.navLink} ${location.pathname === "/about" ? styles.active : ""}`}
          >
            <p className={`${styles.navLinkText} top-[3.5rem]`}>ABOUT ME</p>
            <span>
              <img
                src="src/assets/nav-2.svg"
                alt=""
                className="opacity-[0.28]"
              />
            </span>
          </NavLink>

          <NavLink
            to="/skills"
            className={`${styles.navLink} ${location.pathname === "/skills" ? styles.active : ""}`}
          >
            <p className={`${styles.navLinkText} `}>SKILLS & EXPERIENCE</p>
            <span>
              <img
                src="src/assets/nav-3.svg"
                alt=""
                className="opacity-[0.28] "
              />
            </span>
          </NavLink>

          <NavLink
            to="projects"
            className={`${styles.navLink} ${location.pathname === "/projects" ? styles.active : ""}`}
          >
            <p className={`${styles.navLinkText} pl-1 `}>PROJECTS</p>
            <span>
              <img
                src="src/assets/nav-4.svg"
                alt=""
                className="opacity-[0.28]"
              />
            </span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
