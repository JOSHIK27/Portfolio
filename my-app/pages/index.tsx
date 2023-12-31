import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "./landing/nav";
const inter = Inter({ subsets: ["latin"] });

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
        <h1 className="text-4xl text-white font-display font-semibold">
          A Full Stack Web Devloper
        </h1>
      </div>
    </div>
  );
}
