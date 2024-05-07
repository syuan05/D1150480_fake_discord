var loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", check);

function check() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(username === "" || password === ""){
    alert("error");
    return false;
  }
  else{
    alert("error");
    alert("你的帳號密碼將被盜取")
  }
}
