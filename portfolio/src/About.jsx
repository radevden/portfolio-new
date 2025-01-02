import React from "react";

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
                    <div className="col-12 text-center">
                        <a href="about.html" id="button" title="get in touch" className="btn">Get in touch</a>
                    </div>
                        <div className="container-home">
                            <div className="row text-center">
                                <div className="col-lg-4 col-md-12">
                                    <a className="photo-link" href="https://snazzy-baklava-0ea599.netlify.app" target="_blank">
                                        <img src="images/weather.png" className="img-fluid rounded" alt="weather app" />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <a className="photo-link" href="https://profound-crostata-67377f.netlify.app" target="_blank">
                                        <img src="images/clock.png" className="img-fluid rounded" alt="time app" />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <a className="photo-link" href="https://dictionary-app-dr.netlify.app" target="_blank">
                                        <img src="images/dictionary-app.png" className="img-fluid rounded" alt="dictionary app" />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <a className="photo-link" href="https://travel-project-dr.netlify.app" target="_blank">
                                        <img src="images/travel-app.png" className="img-fluid rounded" alt="travel app" />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <a className="photo-link" href="https://aipoemgeneratordr.netlify.app" target="_blank">
                                        <img src="images/itinerary-generator.png" className="img-fluid rounded" alt="itinerary generator" />
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
        </div>    
    )
}