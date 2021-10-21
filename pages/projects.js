import Link from "next/link"
const projects = () => {
  return <div className="MainContainer">
      <div className="Title">
<h1>My Projects</h1>
      </div>
      <div className="container">
<div className="card">
    <img src="/static/images/preview1.png"/>
<h3>
Pumula Day Spa
</h3>
    <p>Beauty Spa site developed using html, css and javascript</p>
    <button><Link href="https://pumuladayspa.co.za">View the site</Link></button>
</div>
<div className="card">
    <img src="/static/images/preview2.png"/>
<h3>
Future Pathways Consultants
</h3>
    <p>A marketing static site for a career consultant company developed with html, css and javascript</p>
    <button><Link href="https://futurepw.co.za">View the site</Link></button>
</div>

<div className="card">
    <img src="/static/images/preview3.png"/>
<h3>
CM-Projects
</h3>
    <p>A local based company website developed with html, css and javascript</p>
    <button><Link href="https://cm-projects.co.za">View the site</Link></button>
</div>
<div className="card">
    <img src="/static/images/preview4.png"/>
<h3>
Botgoods
</h3>
    <p>An online store that sells electronics and other goods. I developed this store using wordpress</p>
    <button><Link href="https://botgoods.co.za">View the site</Link></button>
</div>

<div className="card">
    <img src="/static/images/preview5.png"/>
<h3>
Fabulous Magazine
</h3>
    <p> A magazine site developed using react</p>
    <button><Link href="https://fabulousmagazine.co.za">View the site</Link></button>
</div>
<div className="card">
    <img src="/static/images/preview6.png"/>
<h3>
CV Online Site
</h3>
    <p> My personal online CV site</p>
    <button><Link href="https://ashlone.github.io/Ashlone_Chibvuri_Resume.github.io/">View the site</Link></button>
</div>
      </div>
          

        <style>
            {
                `
                .Title{
                    text-align:center;
                    margin-top:100px;
                }
                .MainContainer{
                    margin:20px;
                }
                .container{
                    margin-top:50px;
                    display:flex;
                    justify-content:space-evenly;
                    align-items:center;
                    flex-wrap:wrap;
                }
                .card{
                    width:500px;
                    margin-top:30px;
                }
                img{
                    width:100%;
                }
                button{
                    width:100px;
                
                    background-color: #536DFE;
                    padding:10px;
                    color:white;
                    border:none;
                    margin-top:10px;
                }
                `
            }
        </style>
  </div>;
};

export default projects;
