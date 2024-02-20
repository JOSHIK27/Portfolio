import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import trendytrance from "../images/trendytrance.png";
import codeschool from "../images/codeschool.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import hamburger from "../../images/burger-menu.png";
export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>;
}

export default function CarouselDemo() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="lg:flex lg:justify-end">
        <img
          src={hamburger.src}
          height={60}
          width={60}
          className="lg:hidden text-white text-lg ml-4"
          onClick={toggleMenu}
        ></img>
        <div
          className={`flex flex-col-reverse lg:flex lg:flex-row-reverse  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Button
            onClick={() => {
              router.push("/");
              toggleMenu();
            }}
            variant="ghost"
            className="text-lg text-white mr-4"
          >
            About
          </Button>
          <Button
            onClick={() => {
              router.push("/achievements");
              toggleMenu();
            }}
            variant="ghost"
            className="text-lg text-white bg-black mr-4"
          >
            Achievements
          </Button>
          <Button
            onClick={() => {
              router.push("/projects");
              toggleMenu();
            }}
            variant="ghost"
            className="text-lg text-white bg-black mr-4"
          >
            Projects
          </Button>
          <Button
            onClick={() => {
              router.push("/skills");
              toggleMenu();
            }}
            variant="ghost"
            className="text-lg text-white bg-black mr-4"
          >
            Skills
          </Button>
          <Button
            onClick={() => {
              router.push("/education");
              toggleMenu();
            }}
            variant="ghost"
            className="text-lg text-white bg-black mr-4"
          >
            Education
          </Button>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}
