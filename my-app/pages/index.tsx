import Nav from "./landing/nav";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="ml-32 mt-44">
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
    </div>
  );
}
