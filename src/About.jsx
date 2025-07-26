import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import me from './assets/images/me.png';

export default function About () {
    return (
        <div class="aboutme">
            <h1>
                About me:
            </h1>
            <h3>
                 Hi, I am Denisa — Front-End Developer.
                 <br/>I build responsive and interactive websites using React.
            </h3>
            <div class="row">
                <div class="col-sm-6 mb-4">
                    <h4 class="abouth4">I am a front-end developer with a passion for clean, user-friendly interfaces. I’ve built projects with HTML, CSS, JavaScript, and React. Currently learning more about responsive design and improving accessibility.</h4>

                    <h4>
                        <ul>
                            <li>
                            Languages: HTML, CSS, JavaScript
                            </li>
                            <li>Frameworks: React, Bootstrap</li>
                            <li>Tools: Git, VS Code, Figma</li>
                        </ul>
                    </h4>
                </div>
                <div class="col-sm-6 mb-4">
                    <img src={me} alt="me" className="img-fluid rounded" />
                </div>     
            </div>
        </div>
    );
}