
document.getElementById("login").onclick=login;

function login(){
var email = document.getElementById("email").value;
var password= document.getElementById("password").value;


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify([
  {
    "email":email,
    "password":password
  }
]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


fetch("https://ancient-basin-17410.herokuapp.com/Authenticate", requestOptions)
  .then(response => response.json())
  .then(result =>{
  if(result)
  {
    
    document.location.href="welcomePage.html?name="+email;
   
    
  }
  else{
    document.getElementById("alert").removeAttribute("hidden");
  }
    
  } )
 .catch(error => console.log('error', error));


}
document.getElementById("insert").onclick=insert;

function insert(){
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

fetch("https://ancient-basin-17410.herokuapp.com/AddUser", requestOptions)
  .then(response => response.text())
  .then(result =>{
   window.alert(result);
location.reload();
    
  } )
  .catch(error => console.log('error', error));


}