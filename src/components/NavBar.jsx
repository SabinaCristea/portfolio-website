import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";

function NavBar({ onClose }) {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isSticky = window.scrollY > 1050 && window.innerWidth > 768;
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
    "md:top-[3rem] md:text-[1.4rem] lg:text-[1.8rem] absolute lg:top-[3.5rem] tracking-[0.2rem]";

  const navLinkStyle = `${styles.navLink} flex flex-col items-center justify-center text-[var(--color-black)] relative cursor-pointer select-none active:filter-none hover:text-[var(--color-pink-primary)] hover:drop-shadow-navLink visited:filter-none`;

  return (
    <div
      className={`md:flex md:items-center md:justify-center md:max-w-[100vw] md:m-auto md:z-[999] md:py-[1rem] ${scroll ? styles.sticky : ""}`}
    >
      <div className="nav-wrapper md:h-[8rem]">
        <nav className="md:w-[76rem] lg:w-[100rem] flex flex-col gap-[2rem] md:gap-0 md:flex-row items-center justify-between xl:w-[110rem] ">
          <NavLink
            navLinkStyle={navLinkStyle}
            handleClick={handleClick}
            styles={styles}
            alt="Home"
            navNo="1"
            pathName="home"
            onclose={onClose}
          >
            <p
              className={`${navTextStyle} top-[3.5rem] md:left-[3.3rem] lg:left-[auto] `}
            >
              HOME
            </p>
          </NavLink>

          <NavLink
            navLinkStyle={navLinkStyle}
            handleClick={handleClick}
            styles={styles}
            alt="About"
            navNo="2"
            pathName="about"
            onclose={onClose}
          >
            <p
              className={`${navTextStyle} top-[3.5rem] md:left-[3.3rem] lg:left-[auto] `}
            >
              ABOUT ME
            </p>
          </NavLink>

          <NavLink
            navLinkStyle={navLinkStyle}
            handleClick={handleClick}
            styles={styles}
            alt="Skills"
            navNo="3"
            pathName="skills"
            onclose={onClose}
          >
            <p
              className={`${navTextStyle} top-[3.1rem] md:left-[5.2rem] lg:left-[auto] `}
            >
              SKILLS & EXPERIENCE
            </p>
          </NavLink>

          <NavLink
            navLinkStyle={navLinkStyle}
            handleClick={handleClick}
            styles={styles}
            alt="Projects"
            navNo="4"
            pathName="projects"
            onclose={onClose}
          >
            <p
              className={`${navTextStyle} top-[3.5rem] md:left-[4.3rem] lg:left-[auto] `}
            >
              PROJECTS
            </p>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
