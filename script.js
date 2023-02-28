var uname,password

// uname = document.getElementById("uname")
// password = document.getElementById("password")

function submitDetails(){
    // uname = document.getElementById("uname").innerHTML;
    // password = document.getElementById("password").innerHTML;
    uname = document.getElementById("uname").value;
    password = document.getElementById("password").value;
    console.log("uname :",uname);
    console.log("password :",password);
    var authValues = {
        "uname": this.uname,
        "password": this.password
    }
    var json = JSON.stringify(authValues)
    console.log(json);

 fetch("http://localhost:5000/corestack/login", {
  method: "POST",
  body: json,
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
.then((response) => response.json())
.then((json) => console.log(json));



}