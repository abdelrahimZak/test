
document.getElementById('submit').onclick=get;
function get(){
    var email = document.getElementById("email").value;
    
    var url=(email=="")?"https://ancient-basin-17410.herokuapp.com/users/":
    "https://ancient-basin-17410.herokuapp.com/getUser?email="+email;

    var table= document.getElementById("table");
    table.innerHTML="<tr><th>email</th><th>password</th></tr>";
    
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        var jsondata=[];
     jsondata=jsondata.concat( data); 
     jsondata.forEach(user => {
            
          var tr = document.createElement("tr");
          var td_email = document.createElement("td");
          var td_password = document.createElement("td");
          tr.append(td_email,td_password);
          table.append(tr);
          td_email.innerHTML=user.email;
          td_password.innerHTML=user.password;

        });
    });

}