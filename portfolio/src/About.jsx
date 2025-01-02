import React from "react";

export default function About() {
    return (
        <div class="container-main">
            <div class="hero container-index text-center">
                <div class="row">
                    <div class="col">
                        <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/112/413/original/582FC0B7-9813-41FF-A950-BD074AE48F66_1_102_o.jpeg?1706364406"
                        class="img-fluid rounded" alt="personal photo" id="photo-me" />
                    </div>
                    <div class="col">
                        <h2>HI, I AM</h2>
                        <h1 class="nameh1">DENISA RADEVOVÁ</h1>
                        <h3>A junior Front-end developer<div>based in Prague, Czech Republic</div>
                        </h3>
                    </div>
                </div>
                    <div class="col-12 text-center">
                        <a href="about.html" id="button" title="get in touch" class="btn">Get in touch</a>
                    </div>
                        <div class="container-home">
                            <div class="row text-center">
                                <div class="col-lg-4 col-md-12">
                                    <img src="images/weather.png" class="img-fluid rounded" alt="weather app" />
                                </div>
                                <div class="col-lg-4 col-md-12">
                                    <img src="images/clock.png" class="img-fluid rounded" alt="weather app" />
                                </div>
                                <div class="col-lg-4 col-md-12">
                                    <img src="images/golf.png" class="img-fluid rounded" alt="golf app" />
                                </div>
                            </div>
                        </div>
                </div>
        </div>    
    )
}