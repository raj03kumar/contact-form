// Get all needed elements from the DOM
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

//Get needed data from email JS
const publicKey = "HGkaYzzDTIs35yqCe";
const serviceID = "service_raj1553";
const templateID = "template_rk1553";

// Initialize email JS with public key
emailjs.init(publicKey);

// Add submit event to the form
contactForm.addEventListener("submit", e=>{
    // Prevent from default behaviour
    e.preventDefault();
    // Change button text
    submitBtn.innerText = "Just A Moment...";
    // Get all input field values
    const inputFields={
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }
    // Send the email
    // (Add service, template ID and input field values)
    emailjs.send(serviceID, templateID, inputFields)
        .then(()=>{
            // Change button text
            submitBtn.innerText = "Message Sent Successfully";
            // Clear out all input fields
            nameInput.value="";
            emailInput.value="";
            messageInput.value="";
        },(error)=>{
            // console log the error
            console.log(error);
            //Change button text
            submitBtn.innerText = "Something went wrong";
        });

    setTimeout(() => {
        submitBtn.innerText = "Send";
    }, 5500);
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};
