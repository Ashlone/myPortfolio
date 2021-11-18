import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <marquee width="100%" direction="right" height="50px">
        <h1> Ashlone Chibvuri,a full stack web developer</h1>
      </marquee>
      <style jsx>
        {`
          nav {
            width: 100%;
            height: 50px;
          }
          h2 {
            font-size: 2rem;
          }
        `}
      </style>
    </nav>
  );
};

export default Header;
