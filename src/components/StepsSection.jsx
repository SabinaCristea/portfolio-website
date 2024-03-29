import styles from "./StepsSection.module.css";
import { useEffect, useRef } from "react";

function StepsSection() {
  const stepsRef = useRef(null);

  // useEffect(() => {
  //   const childElements =
  //     stepsRef.current.querySelectorAll(`.stepsContent > *`);

  //   childElements.forEach((element) => {
  //     let isVisible = false;
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           isVisible = entry.isIntersecting;
  //           if (isVisible) {
  //             element.classList.add(styles.show);
  //           }
  //           // else {
  //           //   element.classList.remove(styles.show); // Remove class when not visible
  //           // }
  //         });
  //       },
  //       {
  //         threshold: 0,
  //       }
  //     );
  //     observer.observe(element);

  //     // Cleanup function to disconnect observer on unmount
  //     return () => observer.unobserve(element);
  //   });
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
          //  else {
          //   entry.target.classList.remove(styles.show);
          // }
        });
      },
      {
        threshold: 0,
        rootMargin: "100px 0px",
      }
    );

    const childElements =
      stepsRef.current.querySelectorAll(`.stepsContent > *`);

    childElements.forEach((element) => {
      // debouncedObserver(element);

      observer.observe(element);
    });

    return () => {
      childElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const iconStyle = `${styles.stepIcon} w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] lg:w-[8rem] lg:h-[8rem] xl:w-[9rem] xl:h-[9rem] rounded-[50%] flex justify-center items-center z-[99] bg-[var(--color-orange-steps)]`;

  const textStyle = `${styles.textFragment} bg-[var(--color-pink-quaternary)] lg:bg-transparent text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:h-[30rem] flex justify-center items-center md:w-[50rem] lg:w-[auto]`;

  return (
    <div className="max-w-[34rem] sm:max-w-[50rem] md:max-w-[64rem] lg:max-w-[94rem] xl:max-w-[114rem] m-auto relative">
      <div className="absolute top-0 h-[100%] lg:top-[13rem] left-[50%] translate-x-[-50%] md:h-[100%] lg:h-[88%] col-start-2 col-end-3 border-l-[0.7rem] md:border-l-[1rem] border-dotted border-[var(--color-green-transparent)] z-0"></div>
      <div
        className="stepsContent grid gap-y-[8rem] sm:gap-y-[10rem] md:gap-y-[15rem] lg:gap-y-[0] lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-7 lg:gap-x-[3rem] justify-items-center items-center px-[2rem]"
        ref={stepsRef}
      >
        <div className={`${iconStyle} lg:hidden`}>
          <img
            src="/assets/svgs/profile-female.svg"
            alt="Female icon"
            width="65%"
          />
        </div>
        <div className={textStyle}>
          <p className="text-center lg:text-end">
            Hey there! 👋 I`m Sabina, a frontend developer with a unique journey
            that led me to where I am today.
          </p>
        </div>
        <div className={`${iconStyle} hidden lg:flex`}>
          <img
            src="/assets/svgs/profile-female.svg"
            alt="Female icon"
            width="65%"
          />
        </div>
        <div
          className={`${styles.image} hidden lg:inline-block lg:w-[90%] xl:w-[100%] mb-[-18rem] xl:ml-[10rem]`}
        >
          <img src="/assets/imgs/plant-1.webp" alt="Right illustration 1" />
        </div>
        <div
          className={`${styles.image} hidden lg:inline-block lg:w-[100%] xl:w-[100%] lg:mb-[-37rem] lg:ml-[-25rem] xl:mb-[-39rem] xl:ml-[-33rem]`}
        >
          <img src="/assets/imgs/plant-2.webp" alt="Left illustration 1" />
        </div>
        <div className={iconStyle}>
          <img src="/assets/svgs/biotech.svg" alt="Biotech icon" width="80%" />
        </div>
        <div className={textStyle}>
          <p className="text-center lg:text-start">
            Originally trained in medical engineering during my university days,
            I later pursued a master`s degree in biotechnology.
          </p>
        </div>
        <div className={`${iconStyle} lg:hidden`}>
          <img src="/assets/svgs/code.svg" alt="Code icon" width="65%" />
        </div>
        <div className={textStyle}>
          <p className="text-center lg:text-end lg:w-[80%] lg:mr-[-6rem] xl:w-[100%] xl:mr-0">
            However, life had other plans for me, and I found my true passion in
            coding and frontend development.
          </p>
        </div>
        <div className={`${iconStyle} hidden lg:flex`}>
          <img src="/assets/svgs/code.svg" alt="Code icon" width="65%" />
        </div>
        <div className="hidden lg:inline"></div>
        <div className="hidden lg:inline"></div>
        <div className={iconStyle}>
          <img src="/assets/svgs/trophy.svg" alt="Trophy icon" width="80%" />
        </div>
        <div className={textStyle}>
          <p className="text-center lg:text-start">
            I thrive on attention to detail and enjoy challenging myself to push
            beyond limits, proving that with determination, anything is
            possible.
          </p>
        </div>
        <div className={`${iconStyle} lg:hidden`}>
          <img src="/assets/svgs/books.svg" alt="Books icon" width="75%" />
        </div>
        <div className={textStyle}>
          <p className="text-center lg:text-end">
            A perpetual learner, I`m always eager to explore new concepts and
            surround myself with individuals who inspire and broaden my
            horizons.
          </p>
        </div>
        <div className={`${iconStyle} hidden lg:flex`}>
          <img src="/assets/svgs/books.svg" alt="Books icon" width="75%" />
        </div>
        <div
          className={`${styles.image} hidden lg:inline-block  lg:w-[90%] lg:mb-[-18rem] lg:ml-[0rem] xl:w-[100%] xl:mb-[-15rem] xl:ml-[8rem]`}
        >
          <img src="/assets/imgs/plant-3.webp" alt="Right illustration 2" />
        </div>
        <div
          className={`${styles.image} hidden lg:inline-block  lg:w-[90%] lg:mb-[-23rem] lg:ml-[0rem] xl:w-[100%] xl:mb-[-14rem] xl:ml-[-5rem]`}
        >
          <img src="/assets/imgs/plant-4.webp" alt="Left illustration 2" />
        </div>
        <div className={iconStyle}>
          <img src="/assets/svgs/sprout.svg" alt="Plant icon" width="80%" />
        </div>
        <div className={textStyle}>
          <p className="text-center lg:text-start">
            Described by friends as disciplined, ambitious, creative, and
            well-organized, I constantly strive to evolve into the best version
            of myself.
          </p>
        </div>
        <div className={`${iconStyle} lg:hidden`}>
          <img src="/assets/svgs/map.svg" alt="Map icon" width="60%" />
        </div>
        <div className={textStyle}>
          <p className="text-center lg:text-end">
            Fueled by curiosity and propelled by my untapped potential, I`m on a
            perpetual journey of growth and self-discovery.
          </p>
        </div>
        <div className={`${iconStyle} hidden lg:flex`}>
          <img src="/assets/svgs/map.svg" alt="Map icon" width="60%" />
        </div>
      </div>
    </div>
  );
}

export default StepsSection;
