const botaoAdicionar2 = document.querySelector("#buscar-paciente");

botaoAdicionar2.addEventListener("click", function () {
  const xhr = new XMLHttpRequest(); //faz requisições http

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"
  );

  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      const resposta = xhr.responseText;
      const pacientes = JSON.parse(resposta);

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      alert("Erro ao buscar pacientes");
    }
  });

  xhr.send();
});
