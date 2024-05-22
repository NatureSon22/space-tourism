import { useEffect, useState, useRef } from "react";
import { crew } from "../constants";

const Crew = () => {
  const [crewSelected, setCrewSelected] = useState(0);
  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const slideToCrewMember = (index) => {
    if (carouselRef.current) {
      const indexInLimit = index === crew.length;
      const crewIndex = indexInLimit ? 0 : index;
      carouselRef.current.scrollTo({
        left: crewIndex * carouselRef.current.clientWidth,
        behavior: indexInLimit ? "instant" : "smooth",
      });

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(
        () => {
          setCrewSelected(crewIndex);
        },
        indexInLimit ? 0 : 500
      );
    }
  };

  useEffect(() => {
    const totalCrewMembers = crew.length;

    const slideNext = () => {
      const nextIndex = (crewSelected + 1) % (totalCrewMembers + 1);
      slideToCrewMember(nextIndex);
    };

    intervalRef.current = setInterval(slideNext, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [crewSelected]);

  return (
    <section className="w-full grid place-items-center py-10 md:pt-0 lg:pb-0">
      <div className="container">
        <h2 className="page-header mb-14 md:text-[2rem] flex items-center sm:mb-24">
          <span className="text-neutral-100 font-barlow-condensed font-bold mr-5 md:text-[1.7rem]">
            02
          </span>
          meet your crew
        </h2>

        <div className="flex flex-col justify-between gap-14 sm:flex-col-reverse sm:gap-20 lg:flex-row-reverse lg:gap-10 lg:place-items-center">
          <div
            className="w-full flex overflow-x-scroll snap-x snap-mandatory no-scrollbar lg:flex-1"
            ref={carouselRef}
          >
            {crew.map((item, index) => (
              <div
                key={index}
                className="flex-none w-full grid place-items-center snap-center lg:items-end"
              >
                <img
                  className="object-cover lg:h-full"
                  src={item.image}
                  alt={item.name}
                />
              </div>
            ))}
          </div>

          <div className="grid place-items-center gap-10 text-center lg:flex-1 lg:place-items-start lg:text-left lg:gap-28">
            <div className="order-first sm:order-last lg:justify-self-start">
              <ul className="flex gap-5 md:gap-8">
                {crew.slice(0, -1).map((_, i) => (
                  <li
                    key={i}
                    className={`${
                      i === crewSelected ? "bg-white" : "bg-neutral-100/50"
                    } w-3 h-3 rounded-full md:size-5 cursor-pointer`}
                    onClick={() => slideToCrewMember(i)}
                  ></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5 sm:order-first order-last sm:gap-6">
              <div>
                <p className="text-[1.5rem] text-neutral-100 font-bellefair uppercase sm:text-[2rem] lg:text-[2.5rem]">
                  {crew[crewSelected].role}
                </p>
                <p className="text-[2rem] text-white font-bellefair uppercase sm:text-[3rem] lg:text-[3.85rem]">
                  {crew[crewSelected].name}
                </p>
              </div>

              <p className="max-w-[25em] text-[1.1rem] text-white font-barlow leading-8 sm:text-[1.2rem] sm:leading-10 md:max-w-[30em] md:text-justify lg:max-w-[28em]">
                {crew[crewSelected].bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
