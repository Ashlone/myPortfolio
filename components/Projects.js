import React from "react";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  return (
    <div id="skills" className="Main-Container">
      <marquee direction="right"> My Work </marquee>
      <marquee direction="up" style={{textAlign:"center"}}> Projects </marquee>
      <marquee direction="left">My Work</marquee>
      
      
      <div className="Card-Container">
        <div className="card">
          <Link href="https://www.pumuladayspa.co.za">
            <img src="/static/images/preview1.png" alt="" />
          </Link>
        </div>

        <div className="card">
          <Link href="https://www.futurepw.co.za">
            <img src="/static/images/preview2.png" alt="" />
          </Link>
        </div>

        <div className="card">
          <Link href="https://www.botgoods.co.za">
            <img src="/static/images/preview4.png" alt="" />
          </Link>
        </div>

        <div className="card">
          <Link href="https://pedantic-meninsky-510089.netlify.app/">
            <img src="/static/images/preview5.png" alt="" />
          </Link>
        </div>

        <div className="card">
          <Link href="https://ashlonenoteapp.herokuapp.com/">
            <img src="/static/images/preview7.png" alt="" />
          </Link>
        </div>

        <div className="card">
          <Link href="https://ashlonequiz.herokuapp.com/">
            <img src="/static/images/preview8.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="Card-Container">
        <Link href="https://www.warriorsfightandfitness.co.za/">
          <img src="/static/images/preview9.png" alt="" />
        </Link>

        <Link href="https://www.linkmann.co.za">
          <img src="/static/images/preview10.png" alt="" />
        </Link>

        <Link href="https://www.birthmacconstruction.co.za">
          <img src="/static/images/preview11.png" alt="" />
        </Link>

        <Link href="https://mellifluous-heliotrope-571d5e.netlify.app">
          <img src="/static/images/preview12.png" alt="" />
        </Link>
        <Link href="https://www.diboxify.com">
          <img src="/static/images/preview13.png" alt="" />
        </Link>
        <Link href="https://www.cmprojects.co.za">
          <img src="/static/images/preview3.png" alt="" />
        </Link>
      </div>

      <style jsx>
        {`
          .Main-Container {
            padding-bottom: 50px;
            padding-top: 50px;
          }

          marquee {
            font-size: 5rem;
            margin-top: 20px;
            text-decoration:5px solid #E84A5F underline;
          }

          .Card-Container {
            display: grid;
            grid-template-columns: auto auto auto;
            padding: 10px;
            margin-top: 50px;
            gap: 10px;
          }

          .Card-Container::-webkit-scrollbar {
            display: none;
          }

          .card {
            max-height: 500px;
            max-width: 500px;
            border-radius: 20px;
          }

          img {
            object-fit: contain;
            width: 100%;
            transition: tranform 450ms;
            border-radius: 30px;
          }

          img :hover {
            transform: scale(1.08);
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
