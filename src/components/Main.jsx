import { homeImage } from "../assets";
import { TypeAnimation } from "react-type-animation";
import myResume from "../resume/Ilyosjon-Axmadaliyev-CV-resume.pdf";
import Links from "./Links";

function Main() {
  return (
    <div id="main">
      <img
        src={homeImage}
        alt="person"
        className="w-full h-screen object-cover"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/70">
        <div className="sm:pl-3 sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1100px] m-auto w-full h-screen flex flex-col justify-center items-center sm:items-start">
          <h1 className="sm:text-5xl text-3xl font-bold text-gray-300">
            I'm Ilyosjon Axmadaliyev
          </h1>
          <h2 className="flex sm:text-4xl text-2xl pt-4 text-gray-300">
            I'm
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "a web Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Frontent enginer",
                2000,
                "from Uzbekistan",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="pl-2"
            />
          </h2>
          <div className="pt-6 flex items-center justify-between max-w-[200px] w-full">
            <Links />
          </div>
          <a
            target="blank"
            href={myResume}
            download={"Personal-CV"}
            className="mt-6 text-xl bg-slate-400 rounded p-1.5 shadow-lg hover:scale-105 ease-in duration-200"
          >
            <button type="button">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
