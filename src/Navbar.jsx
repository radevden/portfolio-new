import React from 'react'

export default function Navbar() {
    function changeActive(event){
        event.preventDefault();
        let link = document.querySelector(".nav-link");
        link.classList.add("active");
    }
    
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Denisa Radevová</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a onClick={changeActive} className="nav-link" aria-current="page" href="Home.jsx">Home</a>
                        <a onClick={changeActive} className="nav-link" href="About.jsx">About</a>
                        <a onClick={changeActive} className="nav-link" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
};

