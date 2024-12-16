import * as React from "react";
import "./App.css";
import bgImage from "./images/image.png";
import avatar from './images/avatar.png'
import LandingText from "./components/LandingText.jsx";
import Footer from "./components/footer.jsx";
import HTML from "./images/Vector.png";
import CSS from "./images/🦆 icon _css3_.png";
import JS from "./images/🦆 icon _JavaScript (JS) Square_.png";
import bootstrap from "./images/🦆 icon _bootstrap_.png";
import reactImage from "./images/🦆 icon _react_.png";
import jquery from "./images/Vector (1).png";
import nodeJS from "./images/🦆 icon _node dot js_.png";
import java from "./images/🦆 icon _java_.png";
import About from "./components/About.jsx";
import Circle from "./components/circle.jsx";
import { useEffect } from "react";
import BlockDetector from "./components/BlockDetector.jsx";


function App() {
  return (
    <>
    <Circle
     height="100px"
     width="100px"
     bgColor="#7386cb"
     opacity={0.1}
     top="1vh"
     left="1vw" />
      <Circle
     height="300px"
     width="300px"
     bgColor="#7386cb"
     opacity={0.1}
     top="10vh"
     left="0vw" />
      <Circle
     height="160px"
     width="160px"
     bgColor="#7386cb"
     opacity={0.1}
     top="10vh"
     left="67vw" />
      <Circle
     height="160px"
     width="160px"
     bgColor="#7386cb"
     opacity={0.1}
     top="82vh"
     left="92vw" />
      <Circle
     height="94vh"
     width="645px"
     bgColor="#7386cb"
     opacity={0.1}
     top="193vh"
     left="-9vw"
     class="contact-bg" />
           <Circle
     height="160px"
     width="160px"
     bgColor="black"
     opacity={0.1}
     top="1vh"
     left="12vw" />
           <Circle
     height="80px"
     width="80px"
     bgColor="black"
     opacity={0.1}
     top="1vh"
     left="35vw" />
    <div className="d-flex justify-content-end">
    <img src={avatar} style={
      {height:"50px",paddingRight:"10px",paddingTop:"10px"}} />
    </div>
      <div className="d-flex align-items-center" style={{ gap: "70px" }}>
        <img className="d-none d-md-block" src={bgImage} style={{ height: "84vh" ,
              filter: "drop-shadow(2px 4px 300px #7e86cb)"
        }} />

        <LandingText />
      </div>
      <About />
      <h4 className="d-flex justify-content-center m-5">Skills</h4>
      <div className="blurred-bg">
        <div className="container">
          <div className="row justify-content-center container">
            <div className="col-md-1 glass-card">
              <img src={HTML} />
            </div>
            <div className="col-md-1 glass-card">
              <img src={CSS} />
            </div>
            <div className="col-md-1 glass-card">
              <img src={JS} />
            </div>
            <div className="col-md-1 glass-card">
              <img src={bootstrap} />
            </div>
            <div className="col-md-1 glass-card">
              <img src={reactImage} />
            </div>
          </div>
          <div className="row justify-content-center container">
            <div className="col-md-1 glass-card">
              <img src={jquery} />
            </div>

            <div className="col-md-1 glass-card">
              <img src={java} />
            </div>

            <div className="col-md-1 glass-card">
              <img src={nodeJS} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 class="d-flex justify-content-center m-5">Projects</h4>
        <div class="d-flex"></div>
      </div>
      <h4 className="d-flex justify-content-center m-5">Work Expierience</h4>
    <div className="container">

    </div>
      <BlockDetector/>
        <div className="d-flex justify-content-center"><span>Made with <img width="20" height="20" src="https://img.icons8.com/doodle/50/stitched-heart.png" alt="stitched-heart"/> by Althaf</span></div>
      <Footer />
    </>
  );
}

export default App;
