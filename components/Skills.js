import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <div id="services" className="Main-Container">
      <h2>My Skills</h2>
      <div className="Card-Container">
        <div className="card">
          <h3>Front-End Web Development</h3>
          <div className="innercard">
            <span>HTML & CSS</span>
          </div>
          <div className="innercard">
            <span>Javascript</span>
          </div>
          <div className="innercard">
            <span>React</span>
          </div>
          <div className="innercard">
            <span>Next.js</span>
          </div>
        </div>
        <div className="card">
          <h3>Backend-Development</h3>
          <div className="innercard">
            <span>Node.JS</span>
          </div>
          <div className="innercard">
            <span>Express</span>
          </div>
          <div className="innercard">
            <span>MongoDb</span>
          </div>
        </div>

        <div className="card">
          <h3>Mobile Development</h3>
          <div className="innercard">
            <span>Android & IOS Apps With React Native</span>
          </div>
          <div className="innercard">
            <span>Converting Web Apps To PWAs</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .Main-Container {
          width: 100%;

          padding: 50px;
        }
        h2 {
          text-align: center;
          font-size: 5rem;
            margin-top: 20px;
            text-decoration:5px solid #E84A5F underline;
        }

        .Card-Container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin-top: 100px;
        }
        .card {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .innercard {
          background-color: #E84A5F;
          width: 300px;
          height: 50px;
          display: grid;
          place-items: center;
          margin-top: 20px;
          border-radius: 30px;
          color: black;
        }
        h3 {
          font-size: 30px;
        }

        @media only screen and (max-width: 480px) {
          .Main-Container {
            margin-top: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
