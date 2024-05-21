//const { Model, DataTypes } = require('sequelize');


const contactForm = document.querySelector("#inquiry-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInputted = document.querySelector('#emailInquiry').value.trim();
    const subject = document.querySelector('#textSubject').value.trim();
    const textInput = document.querySelector('#inquire').value.trim();
    const formSectionData = { //convert values into an object array
        emailInquiry: emailInputted,
        textSubject: subject,
        inquire: textInput
    }; console.log(formSectionData);

    fetch("/api/contact", { //  /api/contact
        method: 'POST', //post to inquiry.json? 
        body: JSON.stringify(formSectionData),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Could not create user');
        }
        return response.json();
        })
        .then(newInquiry => {
            console.log(newInquiry);
            // Redirect to view profile
             //document.location.replace(`/api/email/thankyou`);
            fetch(`/api/email/thankyou`, {
                method: 'GET',
            })
        })
        .catch(error => {
            $("#error-message").text(`Error, please try again`);
        });
});
contactForm;
//document.querySelector('#inquiry-form').addEventListener("submit", contactForm);
// // How to create a file out of the data
// const formStored = (formData, filename) => {
//     const blob = new Blob([JSON.stringify(formData)], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     // Set the filename for the downloaded file
//     a.download = filename + '.json';
//     // Append the anchor element to the document body
//     document.body.appendChild(a);
//     // Click the anchor element to trigger the download
//     a.click();
//     // Clean up by removing the anchor element
//     document.body.removeChild(a);
// };
// formStored({ test: 'is passed' }, 'testJsonFile');