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
    const imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}

// EVENTOS:

const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  const form = document.querySelector("#form-adiciona");
  const nome = form.nome.value;
  const peso = form.peso.value;
  const altura = form.altura.value;
  const gordura = form.gordura.value;

  const pacienteTr = document.createElement("tr");

  const nomeTd = document.createElement("td");
  const pesoTd = document.createElement("td");
  const alturaTd = document.createElement("td");
  const gorduraTd = document.createElement("td");
  const imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  const tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  console.log(pacienteTr);
});
