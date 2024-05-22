import { useState } from "react";
import { technology } from "../constants";

const Technology = () => {
  const [technologySelected, setTechnologySelected] = useState(0);
  const [animate, setAnimate] = useState(true);

  const handleClick = (technology) => {
    setTechnologySelected(technology);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <section className="w-full grid place-items-center py-10 md:pt-0 lg:place-items-end">
      <div className="container lg:max-w-[1645px]">
        <h2 className="page-header mb-14 md:text-[2rem] flex items-center sm:mb-24 xl:mb-0">
          <span className="text-neutral-100 font-barlow-condensed font-bold mr-5 md:text-[1.7rem]">
            03
          </span>
          space launch 101
        </h2>

        <div className="flex flex-col items-center gap-10 md:gap-20 lg:flex-row-reverse lg:justify-between relative -right-0">
          <div
            className={`max-w-[40em] w-full ${
              animate && "animate__animated animate__fadeIn"
            }`}
          >
            <img
              className="w-full h-full object-cover block lg:hidden"
              src={technology[technologySelected].images.landscape}
              alt=""
            />
            <img
              className="hidden w-full h-full object-cover lg:block"
              src={technology[technologySelected].images.portrait}
              alt=""
            />
          </div>

          <div className="flex flex-col place-items-center gap-5 md:gap-10 xl:flex-row xl:flex-1 xl:place-items-stretch xl:gap-20">
            <ul className="h-auto max-w-[15em] flex w-full justify-between md:max-w-[20em] xl:flex-col xl:w-min">
              {Array.from({ length: 3 }, (_, i) => (
                <li
                  key={i}
                  className={`size-14 font-bellefair rounded-full grid place-items-center border border-neutral/50 text-white md:size-20 md:text-[1.8rem] cursor-pointer link-technology ${
                    i === technologySelected && "selected"
                  }`}
                  onClick={() => handleClick(i)}
                >
                  {i + 1}
                </li>
              ))}
            </ul>

            <div
              className={`text-center lg:text-left ${
                animate && "animate__animated animate__fadeIn"
              }`}
            >
              <p className="font-barlow-condensed mb-2 uppercase text-neutral md:text-[1.1rem] lg:mb-4">
                the terminology...
              </p>
              <p className="mb-4 leading-[1em] font-bellefair text-white text-[2rem] uppercase lg:mb-7 md:text-[2.5rem] xl:text-[4.5rem]">
                {technology[technologySelected].name}
              </p>
              <p className="max-w-[35em] font-barlow text-white leading-7 md:text-[1.2rem] md:leading-9 lg:max-w-[27em]">
                {technology[technologySelected].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
