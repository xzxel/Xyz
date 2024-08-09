let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let titleSe = document.getElementById("titleSe");

signIn.onclick = function(){
    nameInput.style.maxHeight = "0";
    titleSe.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function(){
    nameInput.style.maxHeight = "60px";
    titleSe.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}