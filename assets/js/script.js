const contactMeBtn = document.getElementById("contact-btn");
const windowFeatures = "left=500, top=150, width=600, height=700";
const contactSubmitBtn = document.getElementById("contact-submit-btn");

// this function creates a pop up window for contact me page
function contactPopUp() {
  if (window.innerWidth < 1024) {
    window.open("../../html/contact.html");
  } else {
    window.open("contact.html", "_blank", windowFeatures);
  }
}

// this function send email direct from contact me input using emailjs API
function sendEmail() {
  (function () {
    emailjs.init("xO71ATTwrlX6XM6C1"); //Account public key
  })();

  const params = {
    inputName: document.getElementById("input-name").value,
    inputEmail: document.getElementById("input-email").value,
    inputCompany: document.getElementById("input-company").value,
    textInput: document.getElementById("text-input").value,
  };

  const serviceID = "service_5iqvw7i"; //Email Service ID
  const templateID = "template_85rumzg"; //Email Template ID

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Email Sent Successfully!");
    })
    .catch();
}

// window.close after email is sent on same click as submit.

contactMeBtn.addEventListener("click", contactPopUp);

contactSubmitBtn.addEventListener("click", () => {
  sendEmail();
});
w;
