import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navigation}>
        <NavLink to="/home" className={styles.navLink}>
          <p className={styles.navLinkText}>HOME</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              /* eslint-disable-next-line react/no-unknown-property */
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="120"
              zoomAndPan="magnify"
              viewBox="0 0 33 23.999999"
              height="75"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <filter
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  id="1f3e712cf3"
                >
                  <feColorMatrix
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    colorInterpolationFilters="sRGB"
                  />
                </filter>

                <mask id="78e167d8a7">
                  <g filter="url(#1f3e712cf3)">
                    <rect
                      x="-3.3"
                      width="39.6"
                      fill="#000000"
                      y="-2.4"
                      height="28.799999"
                      fillOpacity="0.28"
                    />
                  </g>
                </mask>
                <clipPath id="1b418fd721">
                  <path
                    d="M 2.507812 0.464844 C 30.164062 3.878906 30.164062 14.652344 26.738281 17.539062 C 22.875 20.875 5.667969 20.722656 1.894531 17.308594 C -1.441406 14.273438 2.507812 0.464844 2.507812 0.464844 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g mask="url(#78e167d8a7)">
                <g transform="matrix(1, 0, 0, 1, 2, 3)">
                  <g clipPath="url(#1b418fd721)">
                    <rect
                      x="-9.26"
                      width="47.52"
                      fill="#749677"
                      height="34.559999"
                      y="-8.28"
                      fillOpacity="1"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </NavLink>

        <NavLink to="/home#section-about" className={styles.navLink}>
          <p className={styles.navLinkText}>ABOUT ME</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              /* eslint-disable-next-line react/no-unknown-property */
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="160"
              zoomAndPan="magnify"
              viewBox="0 0 50.25 25.5"
              height="75"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <filter
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  id="80f18194af"
                >
                  <feColorMatrix
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    colorInterpolationFilters="sRGB"
                  />
                </filter>

                <mask id="d1662419fb">
                  <g filter="url(#80f18194af)">
                    <rect
                      x="-5.025"
                      width="60.3"
                      fill="#000000"
                      y="-2.55"
                      height="30.6"
                      fillOpacity="0.28"
                    />
                  </g>
                </mask>
                <clipPath id="18052fe11c">
                  <path
                    d="M 2.5 0.6875 C 47.609375 5.082031 47.609375 15.109375 44.148438 18.503906 C 38.605469 23.726562 6.851562 23.210938 1.546875 17.808594 C -1.765625 14.261719 2.5 0.6875 2.5 0.6875 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g mask="url(#d1662419fb)">
                <g transform="matrix(1, 0, 0, 1, 2, 3)">
                  <g clipPath="url(#18052fe11c)">
                    <path
                      fill="#6c6a18"
                      d="M -1.621094 -2.398438 L 47.351562 -2.398438 L 47.351562 21.664062 L -1.621094 21.664062 Z M -1.621094 -2.398438 "
                      fillOpacity="1"
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </NavLink>

        <NavLink to="/skills" className={styles.navLink}>
          <p className={styles.navLinkText}>SKILLS & EXPERIENCE</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              /* eslint-disable-next-line react/no-unknown-property */
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="300"
              zoomAndPan="magnify"
              viewBox="0 0 109.5 30.000001"
              height="80"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <filter
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  id="98812b43c2"
                >
                  <feColorMatrix
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    colorInterpolationFilters="sRGB"
                  />
                </filter>
                <mask id="98879ad2f2">
                  <g filter="url(#98812b43c2)">
                    <rect
                      x="-10.95"
                      width="131.4"
                      fill="#000000"
                      y="-3"
                      height="36.000001"
                      fillOpacity="0.28"
                    />
                  </g>
                </mask>
                <clipPath id="3df209ad3d">
                  <path
                    d="M 4.609375 2.324219 C 30.519531 7.613281 42.421875 7.832031 49.898438 7.832031 C 54.90625 7.761719 57.449219 7.6875 62.671875 7.097656 C 70.949219 6.070312 88.367188 -1.925781 94.390625 1.519531 C 98.601562 3.867188 102.230469 12.898438 100.269531 16.5 C 97.292969 22.007812 75.300781 22.007812 63.980469 23.179688 C 54.109375 24.136719 44.164062 23.988281 36.035156 23.769531 C 29.722656 23.546875 24.929688 23.179688 19.199219 22.300781 C 13.101562 21.34375 2.648438 21.785156 0.472656 18.113281 C -1.5625 14.734375 4.609375 2.324219 4.609375 2.324219 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g mask="url(#98879ad2f2)">
                <g transform="matrix(1, 0, 0, 1, 4, 2)">
                  <g clipPath="url(#3df209ad3d)">
                    <rect
                      x="-28.09"
                      width="157.68"
                      fill="#6a80c2"
                      height="43.200001"
                      y="-8.6"
                      fillOpacity="1"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </NavLink>

        <NavLink to="projects" className={styles.navLink}>
          <p className={`${styles.navLinkText} pl-1`}>PROJECTS</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              /* eslint-disable-next-line react/no-unknown-property */
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="170"
              zoomAndPan="magnify"
              viewBox="0 0 57.75 24.749999"
              height="75"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <filter
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  id="4465b7bd9f"
                >
                  <feColorMatrix
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    colorInterpolationFilters="sRGB"
                  />
                </filter>

                <mask id="2cf45410d1">
                  <g filter="url(#4465b7bd9f)">
                    <rect
                      x="-5.775"
                      width="69.3"
                      fill="#000000"
                      y="-2.475"
                      height="29.699999"
                      fillOpacity="0.28"
                    />
                  </g>
                </mask>
                <clipPath id="ea8dd3e7ab">
                  <path
                    d="M 1.753906 0.171875 C 55.066406 3.175781 55.066406 12.71875 51.652344 16.25 C 45.636719 22.378906 8.289062 22.824219 2.125 16.847656 C -1.4375 13.320312 1.753906 0.171875 1.753906 0.171875 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g mask="url(#2cf45410d1)">
                <g transform="matrix(1, 0, 0, 1, 2, 4)">
                  <g clipPath="url(#ea8dd3e7ab)">
                    <path
                      fill="#d29f5e"
                      d="M -1.214844 -3.285156 L 54.640625 -3.285156 L 54.640625 19.855469 L -1.214844 19.855469 Z M -1.214844 -3.285156 "
                      fillOpacity="1"
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
