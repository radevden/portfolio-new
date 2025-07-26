import React from "react";

export default function Contact () {
    function submitForm (event){
        event.preventDefault();
        let submit = document.querySelectorAll(".contactbtn");
        let name = document.querySelector("#nameInput");
        let email = document.querySelector("#emailInput");
        let text = document.querySelector("#textArea");



      
    }
    
    return (
        <div className="container-form">
            <h2 className="hcontact">Let's get in touch!</h2>
            <form name="contact" method="POST" data-netlify="true" action="/thankyou">
                <input type="hidden" name="forn-name" value="contact" />    
                <div className="mb-3">
                        <label for="nameInput" className="name-label">Name</label>
                        <input type="text" className="name-form" id="nameInput" required/>
                    </div>
                    <div class="mb-3">
                        <label for="emailInput" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="emailInput" required/>
                    </div>
                    <div class="mb-3">
                        <label for="textArea" className="form-label">Your message</label>
                        <textarea className="form-control" id="textArea" rows="3" required></textarea>
                    </div>
                    <input type="submit" className="contactbtn" value="Send"></input>
            </form>
        </div>
    );
}