const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let peso = pacientes[i].querySelector(".info-peso").textContent;
  let altura = pacientes[i].querySelector(".info-altura").textContent;
  let tdImc = pacientes[i].querySelector(".info-imc");

  let pesoValido = validaPeso(peso);
  let alturaValida = validaAltura(altura);

  if (!pesoValido) {
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    console.log("Peso inválido");
    pacientes[i].classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
    console.log("Altura inválida!");
    pacientes[i].classList.add("paciente-invalido");
  }

  if (!pesoValido && !alturaValida) {
    tdImc.textContent = "Altura e peso inválidos!";
    console.log("Altura e peso inválidos");
    pacientes[i].classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    let imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
