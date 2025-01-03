import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from "./Home.jsx";

export default function About() {
    return (
        <div className="container-main">
            <div className="hero container-index text-center">
                <div className="row">
                    <div className="col">
                        <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/112/413/original/582FC0B7-9813-41FF-A950-BD074AE48F66_1_102_o.jpeg?1706364406"
                        className="img-fluid rounded" alt="personal photo" id="photo-me" />
                    </div>
                    <div className="col">
                        <h2>HI, I AM</h2>
                        <h1 className="nameh1">DENISA RADEVOVÁ</h1>
                        <h3>A junior Front-end developer<div>based in Prague, Czech Republic</div>
                        </h3>
                    </div>
                </div>
                <div className="col text-center">
                    <a href="about.html" id="button" title="get in touch" className="btn">Get in touch</a>
                </div>
                <Home />
        </div></div>    
    )
}