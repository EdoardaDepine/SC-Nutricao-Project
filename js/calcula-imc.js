// // CALCULAR IMC PARA APENAS 1 PACIENTE:

// const paciente1 = document.querySelector("#paciente1");
// const peso1 = paciente1.querySelector(".info-peso").textContent;
// const altura1 = paciente1.querySelector(".info-altura").textContent;
// const tdImc = paciente1.querySelector(".info-imc");

// // verificação:
// let pesoEhValido = true;
// let alturaEhValida = true;

// if (peso1 < 0 || peso1 >= 1000) {
//   pesoEhValido = false;
//   console.log("peso inválido");
//   tdImc.textContent = "peso inválido!";
// }

// if (altura1 < 0 || altura1 >= 3.0) {
//   alturaEhValida = false;
//   console.log("altura inválida");
//   tdImc.textContent = "altura inválida!";
// }

// if (alturaEhValida == false && pesoEhValido == false) {
//   tdImc.textContent = "altura e peso inválidos";
// }

// if (alturaEhValida && pesoEhValido) {
//   const imcP1 = peso1 / (altura1 * altura1);
//   tdImc.textContent = imcP1;
// }

// // LÓGICA DE REPETIÇÃO:

const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let peso = pacientes[i].querySelector(".info-peso").textContent;
  let altura = pacientes[i].querySelector(".info-altura").textContent;
  let tdImc = pacientes[i].querySelector(".info-imc");
  let pesoValido = true;
  let alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    console.log("Peso inválido");
    pacientes[i].classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
    console.log("Altura inválida!");
    pacientes[i].classList.add("paciente-invalido");
  }

  if (pesoValido == false && alturaValida == false) {
    tdImc.textContent = "Altura e peso inválidos!";
    console.log("Altura e peso inválidos");
    pacientes[i].classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    let imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
