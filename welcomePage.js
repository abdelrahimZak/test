const urlParams = new URLSearchParams(window.location.search);
var str=urlParams.get("name");
var nameMatch = str.match(/^([^@]*)@/);
var Uname = nameMatch ? nameMatch[1] : null;
Uname=Uname.split('.').join(' ');
document.getElementById("name").innerHTML=Uname;