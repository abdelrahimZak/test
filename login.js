
document.getElementById("login").onclick=login;

function login(){
var email = document.getElementById("email").value;
var password= document.getElementById("password").value;


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify([{
    "email":email,
    "password":password
}]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/Authenticate", requestOptions)
  .then(response => response.json())
  .then(result =>{
   window.alert((result)?"welcom":"wrong password or user email");
location.reload();
    
  } )
  .catch(error => console.log('error', error));


}