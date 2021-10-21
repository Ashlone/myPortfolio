

const Home = () => {
  return (

    <div className="main-container">
    
    <div className="Container">
    <div className="imageContainer">
<img className="image" src="/static/images/code.png" alt="my_image"/>
<h1>Hello ,l am Ashlone Chibvuri</h1>
<img className="image" src="/static/images/code.png" alt="my_image"/>
    </div>
    <div className="imageContainer">
<img className="image" src="/static/images/code.png" alt="my_image"/>
<span>l am a Full Stack Web Developer, a Designer and Entrepreneur who is on his way to make a big impact in the society through technology. </span>
<img className="image" src="/static/images/code.png" alt="my_image"/>
    </div>
    <div ><img className="imageContainer" src="/static/images/hero.svg" alt="my_image"/> </div>
    
  </div>
  <style jsx>
{`
.main-container{
  
 
}
.Container{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  
}
.imageContainer{
  margin-top:100px;
width:600px;
display:flex;
justify-content:space-evenly;
align-items:center;
}

.image{
  width:100px;
}

.hero{
  width:300px;
  margin-top:50px;
}`}
    </style>
  </div>
  
  

 
  )}
  

export default Home;
