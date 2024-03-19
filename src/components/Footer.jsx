import {
  FACEBOOK_ACCOUNT,
  GITHUB_ACCOUNT,
  INSTAGRAM_ACCOUNT,
  LINKEDIN_ACCOUNT,
} from "../utils/accounts";

function Footer() {
  return (
    <footer className="bg-[var(--color-orange-transparent)]">
      <div className=" pb-[2rem] pt-[2rem] px-[5rem] text-[1.3rem] max-w-[190rem] m-auto">
        <div className="flex justify-between ">
          <p className="self-center">
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

          <div className="flex flex-col text-end justify-end">
            <p>
              <a href="tel: +40 765 574 041">+40 765 574 041</a>
              <br />
              <a href="mailto: sabinacristea997@gmail.com">
                sabinacristea997@gmail.com
              </a>
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
