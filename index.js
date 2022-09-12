// function sendEmail(){
//         Email.send({
//         Host : "smtp.gmail.com",
//         Username : "michaelkings819@gmail.com",
//         Password : "Fiverr819",
//         To : 'michaelkings819@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "Contact Form from my portfolio",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

const hamburger = document.querySelector(".hamburger");
const navbarlists = document.querySelector(".navbar-lists");

  hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbarlists.classList.toggle("active");
});  

// menu.onclick = ()=> {
//   menu.classList.toggle("move");
// }


