import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Work from "./Work.jsx";
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div id="About" className="container-main">
            <div className="hero container-index text-center">
                <div className="row">
                    <div className="col">
                        <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/112/413/original/582FC0B7-9813-41FF-A950-BD074AE48F66_1_102_o.jpeg?1706364406"
                        className="img-fluid rounded" alt="personal photo" id="photo-me" />
                    </div>
                    <div className="col">
                        <h1 className="nameh1">DENISA RADEVOVÁ</h1>
                        <h3>A junior Front-end developer<div>based in Calgary, Canada</div>
                        </h3>
                    </div>
                </div>
                <div className="col text-center">
                    <Link to="/contact" id="button" title="get in touch" className="btn">Get in touch</Link>
                </div>
                    <Work />
        </div></div>    
    )
}