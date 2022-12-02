import React from "react";
import Image from "next/image";
import Link from "next/link";
const Intro = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h1>
         Software<span>  Engineer</span>
        </h1>
        <p>I turn ideas into fully functional web and mobile applications</p>
        <Link href="#contact">
          <button>Get In Touch</button>
        </Link>
      </div>
      <div className="card">
        <Image
          src="/static/images/animated.gif"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <style jsx>{`
        .card-container {
          width: 100%;
          height: calc(100vh - 50px);
          display: flex;
        }

        .card {
          flex: 1;
          padding: 100px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          position: relative;
        }

        h1 {
          font-size: 5rem;
            margin-top: 20px;
            text-decoration:5px solid #E84A5F underline;
        }
        span {
          color: #E84A5F;
        }
        p {
          margin-top: 10px;
          font-size: 30px;
        }
        button {
          margin-top: 10px;
          background-color: #E84A5F;
          border: none;
          padding: 20px;
          width: 200px;
          cursor: pointer;
          color: black;
          font-weight: bold;
          border-radius: 15px;
        }

        @media screen and (max-width: 480px) {
          .card-container {
            flex-direction: column;
            margin: 30px;
          }

          p {
            display: none;
          }
          button {
            width: 200px;
          }

          .card {
            padding: 30px;
            align-items: center;
            text-align: center;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default Intro;
