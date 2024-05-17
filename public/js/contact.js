//const { response } = require("express");
const contactMe = document.querySelector("#inquiry-form");//target area first

contactMe.addEventListener("submit", function(event) { //then the button
    event.preventDefault();
    //only accepts the id for querySelector
    const emailInputted = document.querySelector('#email-inquiry').value.trim();
    const subject = document.querySelector('#text-subject').value.trim();
    const textInput = document.querySelector('#inquire').value.trim();
    console.log(emailInputted, subject, textInput);
        //not the post function from the controllers
    //     body: JSON.stringify({
    //         emailInputted, subject, textInput, 'type': submit
    //     }).then(response => {
    //     if (!response.ok) {
    //         throw new Error('Could not receive inquiry');
    //     }
    //     console.log(response);
    //     return response.json();
    // })
})
