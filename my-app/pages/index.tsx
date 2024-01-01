import Nav from "./landing/nav";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="ml-32 mt-28">
        <h1 className="text-6xl text-white font-display font-semibold mb-4">
          Hello!
        </h1>
        <br />
        <h1 className="font-display text-white text-7xl mb-[13px]">
          Iam JOSHIK ROSHAN
        </h1>
        <br></br>
        <Typewriter
          options={{
            strings: ["AN IIT GRADUATE", "A FULL STACK DEVELOPER"],
            autoStart: true,
            loop: true,
          }}
        />
        Readme
      </div>
      <div className="flex mt-8 ml-32">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/twitter--v1.png"
          alt="twitter--v1"
          className="mr-4"
        />
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/linkedin.png"
          alt="linkedin"
          className="mr-4"
        />
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/material-outlined/48/FFFFFF/github.png"
          alt="github"
        />
      </div>
    </div>
  );
}
