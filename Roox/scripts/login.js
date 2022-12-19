let userData = JSON.parse(localStorage.getItem("user-data")) || [];
let form = document.getElementById("login");
let email = document.getElementById("email")
let password = document.getElementById("password")


document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    userData = JSON.parse(localStorage.getItem("user-data"));
    userData = userData.filter((user) => user.email == email);
    console.log(userData);
    if (userData.length == 0) {
        alert("No Account found!....")
    } else{
     if(   userData[0].password==password){
        alert("login successfull")
        window.location.replace("./home.html");
     }

    }
})