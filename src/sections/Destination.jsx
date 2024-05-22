import { useEffect, useState } from "react";
import { destinations } from "../constants";
import "animate.css";

const Destination = () => {
  const [destinationLink, setDestinationLink] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [animate]);

  const handleClick = (index) => {
    setDestinationLink(index);
    setAnimate(true);
  };

  return (
    <section className="w-full grid place-items-center py-10 md:pt-0 overflow-hidden">
      <div className="container">
        <h2 className="page-header mb-24 md:text-[2rem] flex items-center">
          <span className="text-neutral-100 font-barlow-condensed font-bold mr-5 md:text-[1.7rem]">
            01
          </span>
          pick your destination
        </h2>

        <div className="flex flex-col gap-14 justify-between items-center lg:flex-row ">
          <div className="w-full max-w-[20em] lg:max-w-[30em] xl:max-w-[37em]">
            <img
              className="w-full h-full object-cover xl:pl-20 animate-spin-slow"
              src={destinations[destinationLink].image}
              alt=""
            />
          </div>

          <div
            className={`grid place-items-center gap-10 lg:place-items-start ${
              animate && "animate__animated animate__fadeIn"
            }`}
          >
            <ul className="w-max flex gap-10 lg:text-[1.2rem] lg:gap-12">
              {destinations.map((destination, index) => (
                <li
                  className={`font-barlow-condensed uppercase text-white cursor-pointer relative link-chosen ${
                    destinationLink === index ? "selected" : ""
                  } link-gap`}
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  {destination.name}
                </li>
              ))}
            </ul>

            <div className="text-center lg:text-start">
              <p className="text-[5rem] font-bellefair text-white uppercase lg:text-[6rem]">
                {destinations[destinationLink].name}
              </p>
              <p className="max-w-[25em] font-barlow text-neutral leading-7 lg:text-[1.2em] lg:leading-9 lg:max-w-[30em]">
                {destinations[destinationLink].description}
              </p>
            </div>

            <div className="w-full pt-7 border-t-[0.1em] text-white text-center border-slate-700 flex flex-col justify-between items-center gap-5 uppercase lg:flex-row lg:justify-start lg:gap-20 lg:text-left">
              <div>
                <p className="font-barlow-condensed text-neutral">
                  avg. distance
                </p>
                <p className="font-bellefair text-[2.5rem]">
                  {destinations[destinationLink].distance}
                </p>
              </div>

              <div>
                <p className="font-barlow-condensed text-neutral">
                  est. travel time
                </p>
                <p className="font-bellefair text-[2.5rem]">
                  {destinations[destinationLink].travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
