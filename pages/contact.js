const contact = () => {
  return <div className="MainContainer">
      <div className="Title">
<h1>Hey Let Us Connect</h1>
<p>If you are interested to hire me ,collaborate on a project or ask me questions, please reach out to me.</p>
      </div>
      <div className="contactContainer">
          <div className="card">
              <img src="/static/images/email.png"/>
              <span>ashchibvuri@gmail.com</span>
          </div>
          <div className="card">
              <img src="/static/images/facebook.png"/>
<span>@AshloneChibvuri</span>
          </div>
          <div className="card"><img src="/static/images/instagram.png"/>
          <span>@thegreatamla</span></div>
          <div className="card"> <img src="/static/images/linkedin.png"/> <span>@AshloneChibvuri</span></div>
          
          
          
          
      </div>

      <style>
          {
              `
              .MainContainer{
                  margin-left:20px;
                  margin-right:20px
              }
              .Title{
                  margin-top:100px;
                   text-align:center;
              }
              .card{
                  margin-top:30px;
                  width:200px;
              }
              .contactContainer{

                   margin-top:50px;
                    display:flex;
                    justify-content:space-evenly;
                    align-items:center;
                    flex-wrap:wrap;
                    

              }
              img{
                  width:100%;
              }
              `
          }
      </style>
  </div>;
};

export default contact;
