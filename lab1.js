<script>
var user = prompt("enter username");
var pass = prompt("enter password");

if (user == "admin" && pass == "421$$"){
    alert("Welcome");
}
else if(user != "admin" && pass == "421$$"){
    alert("Incorrect Username")
}
else if(user == "admin" && pass != "421$$"){ 
    alert("Incorrect Passwword")
}
else if (user != "admin" && pass != "421$$") {
    alert("Incorrect User and Pass")
}

</script>