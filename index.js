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

const menu = document.querySelector('.hamburger');

menu.onclick = ()=> {
  menu.classList.toggle("move");
}


