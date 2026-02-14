let input = document.getElementById("commandInput");

let output = document.getElementById("output");

let secao = "principal";

output.innerText += "Digite 'help' para ver os comandos\n";

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let comandoOriginal = input.value;
    let comando = comandoOriginal.toLowerCase();

    output.innerText += "> " + comandoOriginal + "\n";

    if (secao === "principal") {
      if (secao === "principal") {
        if (comando === "help") {
          output.innerText += "Comandos:\n- help\n- math\n- clear\n";
        } else if (comando === "math") {
          secao = "math";
          output.innerText += "Entrou na seção matemática\n";
          output.innerText +=
            "Comandos matemáticos:\n- exit\n- soma [n1] [n2]\n";
        } else if (comando === "clear") {
          output.innerText = "";
        } else {
          output.innerText += 'Comando "' + comando + '" não reconhecido\n';
        }
      }
    } else if (secao === "math") {
      let partes = comando.split(" ");

      if (partes[0] === "help") {
        output.innerText += "Comandos matemáticos:\n- exit\n- soma [n1] [n2]\n";
      } else if (partes[0] === "exit") {
        secao = "principal";

        output.innerText = ""; // limpa tudo

        output.innerText += "[" + secao + "]\n";
        output.innerText += "Digite 'help' para ver os comandos\n";
      } else if (partes[0] === "soma") {
        let a = Number(partes[1]);
        let b = Number(partes[2]);

        let resultado = a + b;

        output.innerText += "Resultado: " + resultado + "\n";
      } else {
        output.innerText += "Comando matemático inválido\n";
      }
    }

    input.value = "";
  }
});
