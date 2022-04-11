import Link from "next/link";
import Head from "next/head";
import Intro from "../components/Intro";
import Services from "../components/Services";
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
      <Intro />
      <Services />
      <Projects />
      <Whatsapp />
    </div>
  );
};

export default Home;
