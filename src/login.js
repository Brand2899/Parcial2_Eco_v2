
// =================================================================================== //

const email = document.getElementById("in_Email");
const password = document.getElementById("in_Password");
const bnlogin = document.getElementById("bn_Login");

function login(){
    window.location.href = "vote.html";
}

bnlogin.addEventListener("click", login);