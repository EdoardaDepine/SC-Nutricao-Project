const paciente1 = document.querySelector("#paciente1");
const peso1 = paciente1.querySelector(".info-peso").textContent;
const altura1 = paciente1.querySelector(".info-altura").textContent;
//const imcP1 = peso1 / (altura1 * altura1);
const tdImc = paciente1.querySelector(".info-imc");

console.log(paciente1);

// verificação
let pesoEhValido = true;
let alturaEhValida = true;

if (peso1 < 0 || peso1 >= 1000) {
  pesoEhValido = false;
  console.log("peso inválido");
  tdImc.textContent = "peso inválido!";
}

if (altura1 < 0 || altura1 >= 3.0) {
  alturaEhValida = false;
  console.log("altura inválida");
  tdImc.textContent = "altura inválida!";
}

if (alturaEhValida == false && pesoEhValido == false) {
  tdImc.textContent = "altura e peso inválidos";
}

if (alturaEhValida && pesoEhValido) {
  const imcP1 = peso1 / (altura1 * altura1);
  tdImc.textContent = imcP1;
}
