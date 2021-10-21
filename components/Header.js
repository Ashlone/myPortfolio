import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <style jsx>
        {`
          nav {
              width:100%;
            background-color: #536DFE;
            height: 50px;
            
          }
          ul {
            display: flex;
            justify-content: space-evenly;
            align-items:center;
           
          }
          li {
               margin-top:10px;
            color: white;
            list-style: none;
          }
        `}
      </style>
    </nav>
  );
};

export default Header;
