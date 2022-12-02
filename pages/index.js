import Link from "next/link";
import Head from "next/head";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Whatsapp from "../components/Whatsapp";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ashlone Chibvuri Official Site</title>
        <meta
          name="description"
          content="Ashlone Chibvuri is  full stack developer with a strong experience in MERN Stack Technologies"
        />
        <link rel="icon" href="/ashlone.ico" />
      </Head>
      <hr className="line"/>
      <Intro />
      <hr className="line"/>
      <Skills />
      <hr className="line"/>
      <Projects />
      <hr className="line"/>
      <Whatsapp />
      <hr className="line"/>

      <style jsx>{`

      

      .line{
        display:flex;
        justify-content:center;
        align-items:center;
        border: 5px dashed #E84A5F;
        border-radius: 5px;
        margin-left: -8px;
  
        }

        
        
      `}</style>
    </div>
  );
};

export default Home;
