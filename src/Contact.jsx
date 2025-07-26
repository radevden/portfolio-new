import React from "react";

export default function Contact () {
    return (
        <div class="container-form">
            <h2 class="hcontact">Let's get in touch!</h2>
            <form action="mailto:radevden@gmail.com" method="post" enctype="text/plain">
            <div class="mb-3">
                    <label for="nameInput" class="name-label">Name</label>
                    <input type="text" class="name-form" id="nameInput" />
                </div>
                <div class="mb-3">
                    <label for="emailInput" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="emailInput" />
                </div>
                <div class="mb-3">
                    <label for="textArea" class="form-label">Your message</label>
                    <textarea class="form-control" id="textArea" rows="3"></textarea>
                </div>
                <input type="submit" class="contactbtn" value="Send"></input>
            </form>
        </div>
    );
}