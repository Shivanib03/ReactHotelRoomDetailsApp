import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import hotel from './images/hotel1.jpg'
import {Link} from 'react-router-dom';
import Services  from "./services";

const Banner = ({ children, title, subtitle }) => {
    return (
      <div className="banner">
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
      </div>
    );
  };

  const Hero = ({ children, hero }) => {
    return <header className={hero}>{children}</header>;
  };

 
function Home(){
    
    return (
        <>
        <Hero>
          
        <div className="banner" style={{ 
                    backgroundImage: `url(${hotel})`,
                    backgroundRepeat: 'no-repeat',
                    width:'1230px',height:'820px',alignItems:'center',justifyContent:'center',backgroundSize:'auto'}}
                    >
        <div style={{padding:'300px 100px 100px 450px',color:'white'}}>
            <h1 style={{fontSize:'50px',textDecorationWidth:"3px"}}>Luxurious rooms</h1>
            <br/>
            <p style={{fontSize:'30px'}}>deluxe rooms starting at $299</p>
            <br/>
            <p style={{color:"white",textDecoration:"none",fontSize:'20px'}}>Check out our rooms -  
            <Link to="/rooms" className="btn-primary" style={{textUnderlineOffset:"auto",fontStyle:'italic'}}> here</Link>
            </p>
            
          </div>
        </div>
          
      </Hero>
    <Services/>
    </>);
    
}

export default Home;