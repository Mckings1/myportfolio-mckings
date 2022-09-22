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

(function(){
  emailjs.init("CMwa9tuiwZQLEtIqJ");
})();

var details = {
name:username.value, phoneNumber:phoneNumber.value, email:email.value, message:msg.value
};

function sendEmail (){
// e.preventDefault();
// console.log(details)
if (phoneNumber.value&&email.value&&msg.value&&username.value) {
emailjs.send("service_xj5yhml","template_nqarsvg",{
from_name: username.value,
// to_name: "gff",
message: msg.value,
reply_to: "cgcbchc",
phone_num:phoneNumber.value,
email:email.value
}).then(function(response) {
 

   alert(`Hello ${username.value},\n Your Message was sent successfully. We Will get back to you!!!`)
   username.value="";
   msg.value="";
   phoneNumber.value="";
   email.value="";
//    console.log('SUCCESS!',response, response.status, response.text);
  }, function(error) {
  alert("Hey! \n Internal server error")
  });
  }else{
  alert("Please fill all the field")
  }
  }

// var details = {
//   name:username.value, phoneNumber:phoneNumber.value, email:email.value, message:msg.value
// };

// function sendEmail (){
//   // e.preventDefault();
//   // console.log(details)
//   emailjs.send('service_xj5yhml', 'template_y098ol7', details)
//     .then(function(response) {
//        console.log('SUCCESS!',response, response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });
// }
// menu.onclick = ()=> {
//   menu.classList.toggle("move");
// }


