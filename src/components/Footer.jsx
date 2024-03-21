import {
  FACEBOOK_ACCOUNT,
  GITHUB_ACCOUNT,
  INSTAGRAM_ACCOUNT,
  LINKEDIN_ACCOUNT,
} from "../utils/accounts";

function Footer() {
  return (
    <footer className="bg-[var(--color-orange-transparent)]">
      <div className=" md:pb-[2rem] md:pt-[2rem] md:px-[5rem] text-[1.3rem] md:max-w-[190rem] md:m-auto">
        <div className="flex flex-col-reverse items-center text-center gap-[2rem] py-[5rem] md:py-0 md:flex-row justify-between ">
          <p className="self-center md:text-left">
            Copyright ©2024. <br /> Designed by Sabina Cristea
          </p>
          <div>
            <div className={`flex items-center`}>
              <a
                href={LINKEDIN_ACCOUNT}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/svgs/icons8-linkedin.svg"
                  alt="LinkedIn Icon"
                  className="w-[6rem] h-[6rem]"
                />
              </a>

              <a
                href={GITHUB_ACCOUNT}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/svgs/icons8-github.svg"
                  alt="Github Icon"
                  className="w-[6rem] h-[6rem]"
                />
              </a>

              <a
                href={INSTAGRAM_ACCOUNT}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/svgs/icons8-instagram.svg"
                  alt="Instagram Icon"
                  className="w-[6rem] h-[6rem]"
                />
              </a>

              <a
                href={FACEBOOK_ACCOUNT}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/svgs/icons8-facebook.svg"
                  alt="Facebbok Icon"
                  className="w-[6rem] h-[6rem]"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:text-end md:justify-end">
            <p>
              <a href="mailto: sabinacristea997@gmail.com">
                sabinacristea997@gmail.com
              </a>
              <br />

              <a href="tel: +40 765 574 041">+40 765 574 041</a>
              <br />
              <a href="https://maps.app.goo.gl/Fea8YzFMVoNf2eQC9">
                Bucharest, Romania
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
