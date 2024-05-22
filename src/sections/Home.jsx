import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "animate.css";

const Home = () => {
  const navigate = useNavigate();
  const [setBg, setLink] = useOutletContext();

  const handleClick = () => {
    navigate("/destination");
    setBg("destinations");
    setLink(1);
  };

  return (
    <section className="w-full pb-10 grid place-items-center lg:self-end lg:pb-24">
      <div className="container flex flex-col justify-between items-center gap-28 md:gap-44 lg:flex-row lg:items-end lg:gap-10">
        <div className="text-center lg:text-left animate__animated animate__fadeIn">
          <p className="font-barlow-condensed text-neutral uppercase tracking-widest md:text-2xl lg:tracking-[0.35em]">
            so you want to travel to
          </p>
          <h1 className="font-bellefair uppercase text-primary text-[5rem] my-2 tracking-widest md:text-[7rem] lg:text-[10rem]">
            space
          </h1>
          <p className="max-w-[30em] font-barlow text-neutral text-base leading-8 md:text-[1.2rem] lg:leading-10 lg:max-w-[29em]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!{" "}
          </p>
        </div>

        <div
          className="min-w-min bg-white size-[170px] rounded-full grid place-items-center md:size-[300px] link-explore relative transition-all duration-500 hover:scale-[0.75] animate__animated animate__fadeIn cursor-pointer"
          onClick={handleClick}
        >
          <Link className="font-bellefair uppercase text-xl md:text-[2rem]">
            explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
