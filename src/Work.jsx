import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Work() {
    return (
        <div className="container-home">
            <div className="row text-center">
                <div className="col-lg-6 col-md-6 mb-4 first">
                    <a className="photo-link" href="https://snazzy-baklava-0ea599.netlify.app" target="_blank">
                        <img src="images/weather.png" className="img-fluid rounded" alt="weather app" />
                    </a>
                </div>
                <div className="col-lg-6 col-md-6 mb-4 dif-background second">
                    <h2>Weather App</h2>
                    <p>Built with HTML, CSS and JavaScript</p>
                </div>
            </div> 
            <div className="row text-center">   
                <div className="col-lg-6 col-md-6 mb-4 dif-background second">
                    <h2>World Clock App</h2>
                    <p>Built with HTML, CSS and JavaScript</p>
                </div>
                <div className="col-lg-6 col-md-6 mb-4 first">
                    <a className="photo-link" href="https://profound-crostata-67377f.netlify.app" target="_blank">
                        <img src="images/clock.png" className="img-fluid rounded" alt="time app" />
                    </a>
                </div>
            </div>
            <div className="row text-center">    
                <div className="col-lg-6 col-md-6 mb-4 first">
                    <a className="photo-link" href="https://dictionary-app-dr.netlify.app" target="_blank">
                        <img src="images/dictionary-app.png" className="img-fluid rounded" alt="dictionary app" />
                    </a>
                </div>
                <div className="col-lg-6 col-md-6 mb-4 dif-background second">
                    <h2>Dictionary App</h2>
                    <p>Built with</p>
                </div>
            </div>
            <div className="row text-center">
            <div className="col-lg-6 col-md-6 mb-4 dif-background second">
                    <h2>Travel website</h2>
                    <p>Built with</p>
                </div>
                <div className="col-lg-6 col-md-6 mb-4 first">
                    <a className="photo-link" href="https://travel-project-dr.netlify.app" target="_blank">
                        <img src="images/travel-app.png" className="img-fluid rounded" alt="travel app" />
                    </a>
                </div>
            </div>
            <div className="row text-center">    
                <div className="col-lg-6 col-md-6 mb-4 first">
                    <a className="photo-link" href="https://aipoemgeneratordr.netlify.app" target="_blank">
                        <img src="images/itinerary-generator.png" className="img-fluid rounded" alt="itinerary generator" />
                    </a>
                </div>
                <div className="col-lg-6 col-md-6 mb-4 dif-background second">
                    <h2>Itinerary generator</h2>
                    <p>Built with</p>
                </div> 
            </div>
        </div>
    )
}
