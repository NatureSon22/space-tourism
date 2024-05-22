import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { bgClassesMap } from "./constants";

const Root = () => {
  const [link, setLink] = useState(0);
  const [bg, setBg] = useState("home");
  const bgClasses = bgClassesMap[bg];

  return (
    <main
      className={`min-h-screen flex flex-col bg-cover bg-no-repeat ${bgClasses.mobile} ${bgClasses.tablet} ${bgClasses.desktop}`}
    >
      <NavBar setBg={setBg} link={link} setLink={setLink} />
      <div className="flex-1 grid">
        <Outlet context={[setBg, setLink]} />
      </div>
    </main>
  );
};

export default Root;
