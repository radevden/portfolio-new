import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Work() {
    return (
        <><h2 class="projects">Take a look at my projects:</h2>
        <div className="scroll-container">
                <div className="col-sm-12 col-md-12 mb-4 workimg">
                    <a className="photo-link" href="https://snazzy-baklava-0ea599.netlify.app" target="_blank">
                        <img src="images/weather.png" className="img-fluid rounded" alt="weather app" />
                    </a>
                    <h2>Weather App</h2>
                    <p>Built with HTML, CSS and JavaScript</p>
                </div>

                <div className="col-sm-12 col-md-12 mb-4 workimg">
                    <a className="photo-link" href="https://profound-crostata-67377f.netlify.app" target="_blank">
                        <img src="images/clock.png" className="img-fluid rounded" alt="time app" />
                    </a>
                    <h2>World Clock App</h2>
                    <p>Built with HTML, CSS and JavaScript</p>
                </div>

                <div className="col-sm-12 col-md-12 mb-4 workimg">
                    <a className="photo-link" href="https://dictionary-app-dr.netlify.app" target="_blank">
                        <img src="images/dictionary-app.png" className="img-fluid rounded" alt="dictionary app" />
                    </a>
                    <h2>Dictionary App</h2>
                    <p>Built with CSS, JavaScript and React</p>
                </div>
                
           
              
                <div className="col-sm-12 col-md-12 mb-4 workimg">
                        <a className="photo-link" href="https://travel-project-dr.netlify.app" target="_blank">
                            <img src="images/travel-app.png" className="img-fluid rounded" alt="travel app" />
                        </a>
                        <h2>Travel website</h2>
                        <p>Built with HTML and CSS</p>
                </div>
                    
                <div className="col-sm-12 col-md-12 mb-4 workimg">
                    <a className="photo-link" href="https://aipoemgeneratordr.netlify.app" target="_blank">
                        <img src="images/itinerary-generator.png" className="img-fluid rounded" alt="itinerary generator" />
                    </a>
                    <h2>Itinerary generator</h2>
                    <p>Built with HTML, CSS, JavaScript and AI</p>
                </div> 

                <div className="col-sm-12 col-md-12 mb-4 workimg">
                    <a className="photo-link" href="https://brilliant-salmiakki-9a4626.netlify.app/" target="_blank">
                        <img src="images/weather-app-react.png" className="img-fluid rounded" alt="weather app" />
                    </a>
                    <h2>Weather App</h2>
                    <p>Built with HTML, CSS, JavaScript and React</p>
                </div>
            
            
        </div></>
    )
}
