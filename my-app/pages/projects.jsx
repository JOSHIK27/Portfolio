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
import Nav from "../pages/landing/nav";

export default function CarouselDemo() {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <Carousel className="w-full">
          <CarouselContent className="flex">
            <CarouselItem>
              <Card className="max-w-xs mx-auto">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={trendytrance.src} alt="Trendy Trance"></img>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="max-w-xs mx-auto">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={codeschool.src} alt="Code School"></img>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
