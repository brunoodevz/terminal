function animarSequencia(linhas, callback) {
  let i = 0;

  let loop = setInterval(() => {
    escrever("> " + linhas[i]);

    i++;

    if (i >= linhas.length) {
      clearInterval(loop);
      if (callback) callback();
    }
  }, 350);
}

// ===== NOVO — CRIPTO =====

function criptografar(texto) {
  let r = "";
  for (let c of texto) r += String.fromCharCode(c.charCodeAt(0) + 3);
  return r;
}

function descriptografar(texto) {
  let r = "";
  for (let c of texto) r += String.fromCharCode(c.charCodeAt(0) - 3);
  return r;
}

// =========================

const piadas = [
  "Por que o JavaScript terminou o namoro? Muitos callbacks sem compromisso.",
  "O HTML é organizado… até o CSS chegar.",
  "Programador não erra — cria funcionalidades inesperadas.",
  "CSS funciona… até você mexer.",
  "JavaScript promete… mas nem sempre resolve.",
  "Centralizar com CSS é magia negra.",
  "O código funcionava… até eu explicar.",
  "JS: 1 + '1' = trauma.",
  "Debug é caça ao tesouro invertida.",
  "Flexbox resolveu… depois complicou.",
  "O HTML constrói, o CSS julga.",
  "Evento demais… terapia de menos.",
  "Meu layout só funciona no meu PC.",
  "Programar é conversar com o erro.",
  "O CSS alinhou… na teoria.",
  "O site funciona — não encosta.",
  "Promise cumprida… às vezes.",
  "Erro não é bug — é feature surpresa.",
  "Console.log é meu melhor amigo.",
  "JS quebra… mas com estilo.",
];

let input = document.getElementById("commandInput");
let output = document.getElementById("output");
let secao = "principal";

function escrever(texto) {
  output.innerText += texto + "\n";
  output.scrollTop = output.scrollHeight;
}

function pegarPiadaLocal() {
  let indice = Math.floor(Math.random() * piadas.length);
  escrever(piadas[indice]);
}

escrever("Digite 'help' para ver os comandos");

input.addEventListener("keydown", function (event) {
  if (event.key !== "Enter") return;

  let comandoOriginal = input.value.trim();
  if (!comandoOriginal) return;

  let comando = comandoOriginal.toLowerCase();

  escrever("> " + comandoOriginal);

  // =====================
  // PRINCIPAL
  // =====================

  if (secao === "principal") {
    if (comando === "help") {
      escrever("Comandos:");
      escrever("- help");
      escrever("- piada");
      escrever("- hack");
      escrever("- math");
      escrever("- clear");
    }

    else if (comando === "piada") pegarPiadaLocal();

    else if (comando === "hack") {
      const entrada = [
        "Inicializando módulo hacker...",
        "Conectando ao firewall...",
        "Ignorando proteções...",
        "Sessão segura estabelecida.",
      ];

      animarSequencia(entrada, () => {
        secao = "hacker";

        escrever("");
        escrever(">>> MODO HACKER ATIVO <<<");
        escrever("Comandos:");
        escrever("- senha");
        escrever("- encrypt [texto]");
        escrever("- decrypt [texto]");
        escrever("- status");
        escrever("- exit");
      });
    }

    else if (comando === "math") {
      secao = "math";

      escrever("Entrou na seção matemática");
      escrever("Comandos:");
      escrever("- exit");
      escrever("- help");
      escrever("- sum [n1] [n2]");
      escrever("- sub [n1] [n2]");
      escrever("- mul [n1] [n2]");
      escrever("- div [n1] [n2]");
    }

    else if (comando === "clear") {
      output.innerText = "";
      escrever("Digite 'help' para ver os comandos");
    }

    else escrever(`Comando "${comando}" não reconhecido`);
  }

  // =====================
  // MATH
  // =====================

  else if (secao === "math") {
    let partes = comando.split(" ");
    let a = Number(partes[1]);
    let b = Number(partes[2]);

    if (partes[0] === "help") {
      escrever("Comandos matemáticos:");
      escrever("- exit");
      escrever("- sum [n1] [n2]");
      escrever("- sub [n1] [n2]");
      escrever("- mul [n1] [n2]");
      escrever("- div [n1] [n2]");
    }

    else if (partes[0] === "exit") {
      secao = "principal";
      output.innerText = "";
      escrever("[principal]");
      escrever("Digite 'help' para ver os comandos");
    }

    else if (["sum", "sub", "mul", "div"].includes(partes[0])) {
      if (isNaN(a) || isNaN(b)) escrever("Use apenas números");

      else if (partes[0] === "div" && b === 0)
        escrever("Erro: divisão por zero");

      else {
        let r;

        if (partes[0] === "sum") r = a + b;
        if (partes[0] === "sub") r = a - b;
        if (partes[0] === "mul") r = a * b;
        if (partes[0] === "div") r = a / b;

        escrever("Resultado: " + r);
      }
    }

    else escrever("Comando matemático inválido");
  }

  // =====================
  // HACKER
  // =====================

  else if (secao === "hacker") {
    if (comando === "senha") {
      let chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";

      let senha = "";

      for (let i = 0; i < 12; i++)
        senha += chars[Math.floor(Math.random() * chars.length)];

      escrever("Senha gerada: " + senha);
    }

    else if (comando.startsWith("encrypt ")) {
      let texto = comandoOriginal.slice(8);
      escrever("Criptografado:");
      escrever(criptografar(texto));
    }

    else if (comando.startsWith("decrypt ")) {
      let texto = comandoOriginal.slice(8);
      escrever("Descriptografado:");
      escrever(descriptografar(texto));
    }

    else if (comando === "status") {
      escrever("Firewall: conectado");
      escrever("Permissão: root");
      escrever("Sessão: ativa");
    }

    else if (comando === "exit") {
      const saida = [
        "Encerrando sessão...",
        "Restaurando firewall...",
        "Desconectando...",
        "Sessão finalizada.",
      ];

      animarSequencia(saida, () => {
        secao = "principal";

        escrever("");
        escrever(">>> MODO NORMAL <<<");
        escrever("Digite 'help' para comandos");
      });
    }

    else escrever("Comando hacker inválido");
  }

  input.value = "";
});