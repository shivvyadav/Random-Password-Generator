let UpperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerString = "abcdefghijklmnopqrstuvwxyz";
let NumberString = "0123456789";
let SymbolString = "!@#$%^&*_+";

let allString = UpperString + LowerString + NumberString + SymbolString;
let passwordBox = document.getElementById("password");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let pass = "";
  for (let i = 0; i < 15; i++) {
    let random = Math.floor(Math.random() * allString.length);
    pass += allString[random];
  }
  passwordBox.value = pass;
});

let copy = document.querySelector("copy");
copy.addEventListener("click", () => {
  passwordBox.select();
  navigator.clipboard.writeText(password.value);
});
