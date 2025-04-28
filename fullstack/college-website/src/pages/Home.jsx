import React from "react";
import "./Home.css";
import crceBuilding from "C:/Users/Admin/Desktop/fullstack/college-website/src/assets/crce_building.jpg";
import accLogo from "C:/Users/Admin/Desktop/fullstack/college-website/src/assets/accLogo.jpg";
import tcsLogo from "C:/Users/Admin/Desktop/fullstack/college-website/src/assets/tcsLogo.jpg";
import infosysLogo from "C:/Users/Admin/Desktop/fullstack/college-website/src/assets/infosysLogo.jpg";
import wiproLogo from "C:/Users/Admin/Desktop/fullstack/college-website/src/assets/wiproLogo.jpg";

const Home = () => {
  return (
    <div className="home-container">
     
      <div className="main-content">
        

        <div className="college-header">
          <img src={crceBuilding} alt="CRCE Building" className="background-img" />
          <div className="title-overlay">
            <h1>Fr. Conceicao Rodrigues<br />College of Engineering</h1>
            <p>MOULDING ENGINEERS WHO CAN BUILD THE NATION</p>
          </div>
        </div>

        <div className="recruiters">
          <h3>Industry Recruiters</h3>
          <div className="recruiter-logos">
            <div className="logo-card"><img src={accLogo} alt="Accenture" /></div>
            <div className="logo-card"><img src={tcsLogo} alt="TCS" /></div>
            <div className="logo-card"><img src={infosysLogo} alt="Infosys" /></div>
            <div className="logo-card"><img src={wiproLogo} alt="Wipro" /></div>
          </div>
        </div>

        <div className="footer">
          <p>
            <i className="fas fa-phone"></i> +91 22-6711 4000 &nbsp;|&nbsp;
            <i className="fas fa-envelope"></i> crce@frcrce.ac.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;