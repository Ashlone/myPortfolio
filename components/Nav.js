import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Nav-Container">
      <Link href="/">Ashlone Chibvuri</Link>
      <ul className="Nav-Links-Container">
        <li className="Nav-Links">
          <Link href="#skills">Skills</Link>
        </li>
        <li className="Nav-Links">
          <Link href="#projects">Projects </Link>
        </li>
        <li className="Nav-Links">
          <Link href="mailto:ashchibvuri@gmail.com">Email Me</Link>
        </li>
        <li className="Nav-Links">
          <Link href="https://github.com/Ashlone">My Github</Link>
        </li>
        <li className="Nav-Links">
          <Link href="https://www.linkedin.com/in/ashlone-chibvuri">
            Linked In
          </Link>
        </li>
      </ul>

      <div className="Hamburger-Container" onClick={() => setOpen(!open)}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className="Mobile-Menu-Container"
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className="Menu-Links">
          <Link href="#skills">Skills</Link>
        </li>
        <li className="Menu-Links">
          <Link href="#projects">Projects </Link>
        </li>
        <li className="Menu-Links">
          <Link href="mailto:ashchibvuri@gmail.com">Email Me</Link>
        </li>
        <li className="Menu-Links">
          <Link href="https://github.com/Ashlone">My Github</Link>
        </li>
        <li className="Menu-Links">
          <Link href="https://www.linkedin.com/in/ashlone-chibvuri">
            Linked In
          </Link>
        </li>
      </ul>

      <style jsx>
        {`
          .Nav-Container {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            color: #E84A5F;
            padding: 0px 100px;
            position: relative;
            overflow: hidden;
            font-size: 25px;
            cursor: pointer;
            justify-content:space-between;
          }
          .Nav-Links{
              font-size:20px;
              display:inline;
              margin-right:30px;
              color:#E84A5F;
              cursor:pointer:
          }
          .Hamburger-Container{
            display: none;
            width: 25px;
            height: 20px;
            cursor: pointer;
          }
          .line {
            width: 100%;
            height: 3px;
            background-color: black;
          }
          .Mobile-Menu-Container{
            display: none;
            position: fixed;
            width: 50vw;
            height: calc(100vh - 50px);
            background-color: #E84A5F;
            top: 50px;
           
            z-index: 9999;
            margin: 0;
            padding: 0;
            font-weight: bold;
            color: black;
            list-style: none;
            transition: all 1s ease;
          }
          @media screen and (max-width: 480px){
              .Nav-Container{
                 padding: 0 20px;
              }
              .Hamburger-Container{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
              }

              .Mobile-Menu-Container{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
              }

              .Nav-Links{
                  display:none;
              }
          }
        `}
      </style>
    </div>
  );
};

export default Nav;
