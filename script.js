var loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", check);

function check() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(username === "" || password === ""){
    alert("請完整輸入帳號或密碼");
    return false;
  }
  else{
    alert("你被騙了");
    alert("你的帳號密碼將被盜取")
  }
}
