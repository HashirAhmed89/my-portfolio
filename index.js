let links = document.querySelectorAll(".link");
let contents = document.querySelectorAll(".content");

contents.forEach((content) => {
  content.style.display = "none"; // start me sab hide
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    // sab content hide kar do
    contents.forEach((content) => {
      content.style.display = "none";
    });

    // clicked link ke just neeche jo .content h wo show karo
    let nextContent = link.nextElementSibling;
    if (nextContent && nextContent.classList.contains("content")) {
      nextContent.style.display = "block";
    }
  });
});
// name type
let Name = "Hashir Ahmed"
let i=0;
function typeName(){
  let h1=document.getElementById("name")
  
  if(i< Name.length){
    h1.innerText+=Name.charAt(i)
    i++
  }
  setTimeout(typeName,100)
 
}
 window.onload=typeName
// //  service page 
let service_heading="My Services"
let s=0;
function typeService(){
  let my_service=document.getElementById("my_service")
  if(s <service_heading.length){
    my_service.innerText+=service_heading.charAt(s)
    s++
  }
  setTimeout(typeService,100)
}
window.onload=typeService

// contact page 

document.addEventListener("DOMContentLoaded", () => {
  const btn_clear = document.getElementById("clear")
  const form = document.getElementById("contactForm")
  const formMssg = document.getElementById("formMsg")

  btn_clear.addEventListener("click", () => {
    localStorage.removeItem("contactData")
    formMssg.textContent = "Data removed from local storage ❌"
    formMssg.style.color = "orange"
    form.reset()
   
  })

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      formMssg.textContent = "Please fill all the fields";
      formMssg.style.color = "red";
      return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      formMssg.textContent = "Please enter a valid email address!";
      formMssg.style.color = "red";
      return;
    }

    let userData = {
      name: name,
      email: email,
      message: message,
    };

    localStorage.setItem("contactData", JSON.stringify(userData));
    formMssg.style.color = "lightgreen";
    formMssg.textContent = "Thank you! Your message has been sent ✅";
    form.reset();
  });
});







