import * as React from "react";
import "./App.css";
import bgImage from "./images/bg_image.png";
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

function App() {
  return (
    <>
    <div className="d-flex justify-content-end">
    <img src={avatar} style={
      {height:"50px",paddingRight:"10px",paddingTop:"10px"}} />
    </div>
      <div className="d-flex align-items-center" style={{ gap: "70px" }}>
        <img src={bgImage} style={{ height: "94vh" }} />

        <LandingText />
      </div>
      <About />
      <h4 className="d-flex justify-content-center m-5">Skills</h4>
      <div className="blurred-bg">
        <div className="container">
          <div className="row justify-content-center">
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
          <div className="row justify-content-center">
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
      <div className="d-flex justify-content-between container">
        <div className="d-flex flex-column g-10">
          <button class="btn-secondary col-8">Contact Me</button>
          <div class="d-flex flex-column g-5">
            <span className="font-size30 secondary-clr">
              Got Any Questions?
            </span>
            <span>Let's Connect.</span>
          </div>
        </div>
        <div>
          <form className="d-flex g-20 flex-column">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name" required/>
            </div>
            <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" required/>
            </div>
            <div class="form-group">
            <textarea type="text" class="form-control" rows={4} placeholder="Message" required/>
            </div>
            <div className="form-group">
              <span><i class="bi bi-envelope"></i> &ensp;althaf.sh658@gmail.com</span> &ensp;&ensp;
              <button className="btn-primary" type="submit"><i class="bi bi-envelope"></i> Hit me up</button>
            </div>
            </form>
        </div>
      </div>
        <div className="d-flex justify-content-center"><span>Made with <img width="20" height="20" src="https://img.icons8.com/doodle/50/stitched-heart.png" alt="stitched-heart"/> by Althaf</span></div>
      <Footer />
    </>
  );
}

export default App;
