import Nav from "./landing/nav";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="sm:ml-32 mt-28 justify-start sm:justify-normal">
        <h1 className="text-6xl text-white font-display font-thin mb-4 px-[24px]">
          Hello!
        </h1>
        <br />
        <h1 className="font-display text-white text-7xl mb-[13px] px-[24px]">
          Iam JOSHIK ROSHAN
        </h1>
        <br></br>
        <div style={{ paddingLeft: 24, fontWeight: 100 }}>
          <Typewriter
            options={{
              strings: [
                "AN IIT GRADUATE",
                "A Graduate Student in DATA SCIENCE",
                "A SELF TAUGHT FULL STACK DEVELOPER",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        Readme
      </div>
      <div className="flex mt-8 sm:ml-32 px-[24px] justify-start sm:justify-normal">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/twitter--v1.png"
          alt="twitter--v1"
          className="mr-4"
          onClick={() => {
            window.open("https://twitter.com/aspirant_4021");
          }}
        />
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/linkedin.png"
          alt="linkedin"
          className="mr-4"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/joshik-narayana-21873722b/"
            );
          }}
        />
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/material-outlined/48/FFFFFF/github.png"
          alt="github"
          onClick={() => {
            window.open("https://www.github.com/joshik27");
          }}
        />
      </div>
    </div>
  );
}
