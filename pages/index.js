import Link from "next/link";

const Home = () => {
  return (
    <div className="main-container">
      <div className="intro">
        <div className="bio-container">
          <p>
            I am a highly motivated full stack web developer competent in
            product design ,development and QA for web application
          </p>
        </div>
      </div>
      <div className="skills-title">
        <marquee width="50%" direction="left" height="50px">
          <h2>My Skills</h2>
        </marquee>
      </div>
      <div className="skills-container">
        <div className="skills">
          <img src="/static/images/Expressjs.svg" />
        </div>
        <div className="skills">
          <img src="/static/images/next.png" />
        </div>

        <div className="skills">
          <img src="/static/images/git.png" />
        </div>
        <div className="skills">
          <img src="/static/images/html&css.png" />
        </div>
        <div className="skills">
          <img src="/static/images/javascript.jpg" />
        </div>
        <div className="skills">
          <img src="/static/images/mongodb.png" />
        </div>
        <div className="skills">
          <img src="/static/images/node.png" />
        </div>
        <div className="skills">
          <img src="/static/images/react.png" />
        </div>
        <div className="skills">
          <img src="/static/images/wordpress.jpg" />
        </div>
      </div>
      <div className="Title">
        <h2> My Projects </h2>{" "}
      </div>{" "}
      <div className="container">
        <div className="card">
          <img src="/static/images/preview1.png" />
          <h3>Pumula Day Spa </h3>{" "}
          <p> Beauty Spa site developed using html, css and javascript </p>{" "}
          <button>
            {" "}
            <Link href="https://pumuladayspa.co.za"> View the site </Link>
          </button>
        </div>{" "}
        <div className="card">
          <img src="/static/images/preview7.png" />
          <h3>Write Notes </h3>{" "}
          <p> A MERN Stack app that users can use to write and save notes. </p>{" "}
          <button>
            <Link href="https://ashlonenoteapp.herokuapp.com/">
              View the site
            </Link>
          </button>
        </div>
        <div className="card">
          <img src="/static/images/preview8.png" />
          <h3>Quiz Game </h3>{" "}
          <p> A quiz react app that fetches data from an api </p>{" "}
          <button>
            {" "}
            <Link href="https://ashlonequiz.herokuapp.com/">View the site</Link>
          </button>
        </div>{" "}
        <div className="card">
          <img src="/static/images/preview2.png" />
          <h3>Future Pathways Consultants </h3>{" "}
          <p>
            {" "}
            A marketing static site for a career consultant company developed
            with html, css and javascript{" "}
          </p>{" "}
          <button>
            {" "}
            <Link href="https://futurepw.co.za"> View the site </Link>
          </button>
        </div>
        <div className="card">
          <img src="/static/images/preview3.png" />
          <h3>CM - Projects </h3>{" "}
          <p>
            {" "}
            A local based company website developed with html, css and
            javascript{" "}
          </p>{" "}
          <button>
            {" "}
            <Link href="https://cm-projects.co.za"> View the site </Link>
          </button>
        </div>{" "}
        <div className="card">
          <img src="/static/images/preview4.png" />
          <h3>Botgoods </h3>{" "}
          <p>
            {" "}
            An online store that sells electronics and other goods.I developed
            this store using wordpress{" "}
          </p>{" "}
          <button>
            {" "}
            <Link href="https://botgoods.co.za"> View the site </Link>
          </button>
        </div>
        <div className="card">
          <img src="/static/images/preview5.png" />
          <h3>Fabulous Magazine </h3>{" "}
          <p> A magazine site developed using react </p>{" "}
          <button>
            {" "}
            <Link href="https://fabulousmagazine.co.za"> View the site </Link>
          </button>
        </div>{" "}
      </div>
      <div className="contact-links">
        <span>
          <Link href="https://github.com/Ashlone">Github</Link>
        </span>
        <span>
          <Link href="https://www.linkedin.com/in/ashlone-chibvuri">
            LinkedIn
          </Link>
        </span>
        <span>ashchibvuri@gmail.com</span>
      </div>
      <div className="floating-profile">
        <img src="/static/images/ashlone.png" />
      </div>
      <style jsx>{`
        h2 {
          font-size: 1.8rem;
          text-align: center;
        }
        .main-container {
        }
        .intro {
          margin-top: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 100%;
        }
        .floating-profile {
          position: fixed;
          width: 100px;
          height: 100px;
          bottom: 40px;
          right: 60px;
          background-color: white;
          border-radius: 50px;
          text-align: center;
          font-size: 30px;
          box-shadow: 2px 2px 3px #999;
          z-index: 100;
        }
        .bio-container {
          width: 300px;
          border: 1px white;
        }
        .skills-title {
          margin-top: 100px;
        }
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .skills {
          margin: 20px;
          width: 100px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
        }
        .skills img {
          width: 60%;

          object-fit: cover;
        }

        .Title {
          text-align: center;
          margin-top: 100px;
        }

        .container {
          margin-top: 50px;
          margin-left: 20px;
          margin-right: 20px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-wrap: wrap;
        }
        .card {
          width: 500px;
          margin-top: 30px;
        }
        img {
          width: 100%;
        }
        button {
          width: 100px;

          background-color: #536dfe;
          padding: 10px;
          color: white;
          border: none;
          margin-top: 10px;
        }
        .contact-links {
          display: flex;
          justify-content: space-evenly;
          margin-top: 100px;
        }
      `}</style>
    </div>
  );
};

export default Home;
