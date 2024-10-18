document.querySelectorAll("#soma").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    var Snum1 = document.getElementById("num1").value;
    var Snum2 = document.getElementById("num2").value;
    let num1 = parseInt(Snum1);
    let num2 = parseInt(Snum2);
    const soma = num1 + num2;
    document.getElementById("respsim").value = soma;
  });
});

document.querySelectorAll("#sub").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    var Snum1 = document.getElementById("num1").value;
    var Snum2 = document.getElementById("num2").value;
    let num1 = parseInt(Snum1);
    let num2 = parseInt(Snum2);
    const sub = num1 - num2;
    document.getElementById("respsim").value = sub;
  });
});

document.querySelectorAll("#mult").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    var Snum1 = document.getElementById("num1").value;
    var Snum2 = document.getElementById("num2").value;
    let num1 = parseInt(Snum1);
    let num2 = parseInt(Snum2);
    const mult = num1 * num2;
    document.getElementById("respsim").value = mult;
  });
});

document.querySelectorAll("#div").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    var Snum1 = document.getElementById("num1").value;
    var Snum2 = document.getElementById("num2").value;
    let num1 = parseInt(Snum1);
    let num2 = parseInt(Snum2);
    const div = num1 / num2;
    document.getElementById("respsim").value = div;
  });
});

document.querySelectorAll("#bhaskara").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    var Sa = document.getElementById("a").value;
    var Sb = document.getElementById("b").value;
    var Sc = document.getElementById("c").value;
    let a = parseInt(Sa);
    let b = parseInt(Sb);
    let c = parseInt(Sc);
    let delta = b * b - 4 * a * c;
    const bhaskarax1 = (-b + Math.sqrt(delta)) / (2 * a);
    const bhaskarax2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.getElementById("respx2").style.display = "flex";
    document.getElementById("respx1").value = bhaskarax1;
    document.getElementById("respx2").value = bhaskarax2;
  });
});

document.querySelectorAll("#delta").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    var Sa = document.getElementById("a").value;
    var Sb = document.getElementById("b").value;
    var Sc = document.getElementById("c").value;
    let a = parseInt(Sa);
    let b = parseInt(Sb);
    let c = parseInt(Sc);
    let delta = b * b - 4 * a * c;
    document.getElementById("respx2").style.display = "none";
    document.getElementById("respx1").value = delta;
  });
});

let a = 1;
let b = -7;
let c = 10;
let delta = b * b - 4 * a * c;

let bhaskarax1 = (-b + Math.sqrt(delta)) / (2 * a);
let bhaskarax2 = (-b - Math.sqrt(delta)) / (2 * a);

console.log(bhaskarax1);
console.log(bhaskarax2);
