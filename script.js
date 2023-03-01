var uname,password

// uname = document.getElementById("uname")
// password = document.getElementById("password")

function submitDetails(){
    // uname = document.getElementById("uname").innerHTML;
    // password = document.getElementById("password").innerHTML;
    uname = document.getElementById("uname").value;
    password = document.getElementById("password").value;
    var authValues = {
        "uname": this.uname,
        "password": this.password
    }
    var json = JSON.stringify(authValues)
 fetch("http://localhost:5000/corestack/login", {
  method: "POST",
  body: json,
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
.then((response) => {
   if (response.status == 200){
    location.href= "./empdetails.html"
}else{
  document.getElementById("loginstatus").innerHTML = "Incorrect Login Details"
}})
.then((json) => console.log(json))


}