import js from "../styles/js.png";
import react from "../styles/react.png";
import css from "../styles/css-3.png";
import html from "../styles/html.png";
import node from "../styles/nodejs.png";
import tailwind from "../styles/tailwind.png";
import sql from "../styles/sql.png";
import postgres from "../styles/postgre.png";
import ts from "../styles/typescript.png";
import mongodb from "../styles/mongodb.png";
import supbase from "../styles/supabase-logo-icon.png";
import docker from "../styles/docker.png";
import express from "../styles/express.png";
import nextjs from "../styles/Next.js.png";
import Nav from "./landing/nav";
export default function Skills() {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <div>
        <div className="flex sm:justify-evenly flex-wrap">
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={js.src}
            width={140}
            height={140}
          ></img>
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={react.src}
            width={140}
            height={140}
          ></img>
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={css.src}
            width={140}
            height={140}
          ></img>
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={html.src}
            width={140}
            height={140}
          ></img>
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={node.src}
            width={140}
            height={140}
          ></img>
        </div>
        <br />
        <br />
        <div className="flex sm:justify-evenly flex-wrap">
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={tailwind.src}
            width={140}
            height={140}
          ></img>
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={sql.src}
            width={140}
            height={140}
          ></img>
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={postgres.src}
            width={140}
            height={140}
          ></img>
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={ts.src}
            width={140}
            height={140}
          ></img>
          <img
            className="bg-white"
            src={express.src}
            width={140}
            height={140}
          ></img>
        </div>
        <br />
        <br />
        <div className="flex sm:justify-evenly flex-wrap">
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={mongodb.src}
            width={140}
            height={140}
          ></img>
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={supbase.src}
            width={140}
            height={140}
          ></img>
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={docker.src}
            width={140}
            height={140}
          ></img>
          <svg
            viewBox="0 0 600 476.30000000000007"
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
          >
            <path
              d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z"
              fill="#00b0ff"
            />
            <path
              d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
              fill="#0081cb"
            />
            <path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff" />
            <path
              d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z"
              fill="#0081cb"
            />
          </svg>
          <img
            className="mr-4 mb-4 sm:mr-0 sm:mb-0"
            src={nextjs.src}
            width={140}
            height={140}
          ></img>
        </div>
      </div>
    </div>
  );
}
