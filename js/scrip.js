let letras = [];
let textoResultado;
let copia = textoResultado;
let verificacaoFeita;
let resultadoLetra;

let textoEscrito = document.querySelector(".entrada-dados__caixatexto");

let resultado = document.querySelector(".saida-dados__resultado__texto");

let criptografar = document.querySelector(
  ".entrada-dados__acao__botoes__criptografar"
);

let descriptografar = document.querySelector(
  ".entrada-dados__acao__botoes__descriptografar"
);

let botaoCopiar = document.querySelector(
  ".saida-dados__resultado__botaocopiar"
);

function separador() {
  letras = textoEscrito.value.split("");
}

function exibirResultado(variavel, texto) {
  let campo = variavel;
  campo.innerHTML = texto;
}

function verificacao() {
  separador(letras);
  for (let i = 0; i < letras.length; i++) {
    if (
      letras[i] == "à" ||
      letras[i] == "á" ||
      letras[i] == "â" ||
      letras[i] == "ã" ||
      letras[i] == "è" ||
      letras[i] == "é" ||
      letras[i] == "ê" ||
      letras[i] == "ì" ||
      letras[i] == "í" ||
      letras[i] == "î" ||
      letras[i] == "ò" ||
      letras[i] == "ó" ||
      letras[i] == "ô" ||
      letras[i] == "õ" ||
      letras[i] == "ù" ||
      letras[i] == "ú" ||
      letras[i] == "û" ||
      letras[i] == "ñ" ||
      letras[i] == "À" ||
      letras[i] == "Á" ||
      letras[i] == "Â" ||
      letras[i] == "Ã" ||
      letras[i] == "È" ||
      letras[i] == "É" ||
      letras[i] == "Ê" ||
      letras[i] == "Ì" ||
      letras[i] == "Î" ||
      letras[i] == "Ò" ||
      letras[i] == "Ó" ||
      letras[i] == "Ô" ||
      letras[i] == "Õ" ||
      letras[i] == "Ù" ||
      letras[i] == "Ú" ||
      letras[i] == "Û" ||
      letras[i] == "Ñ"
    ) {
      verificacaoFeita = "letras erradas";
      break;
    } else if (letras[i] >= "A" && letras[i] <= "Z") {
      verificacaoFeita = "letras erradas";
      break;
    } else {
      verificacaoFeita = "letras corretas";
    }
  }
}

function codificador() {
  verificacao();
  separador(letras);
  if (verificacaoFeita == "letras corretas") {
    for (let i = 0; i < letras.length; i++) {
      if (letras[i] == "a") {
        letras[i] = "ai";
      } else if (letras[i] == "e") {
        letras[i] = "enter";
      } else if (letras[i] == "i") {
        letras[i] = "imes";
      } else if (letras[i] == "o") {
        letras[i] = "ober";
      } else if (letras[i] == "u") {
        letras[i] = "ufat";
      }
    }
    document
      .querySelector(".saida-dados__erro")
      .setAttribute("style", "display: none");
    document
      .querySelector(".saida-dados__resultado")
      .setAttribute("style", "display: block");
    exibirResultado(resultado, letras.join(""));
    textoResultado = letras.join("");
    return textoResultado;
  } else {
    document
      .querySelector(".saida-dados__erro")
      .setAttribute("style", "display: block");
    document
      .querySelector(".saida-dados__resultado")
      .setAttribute("style", "display: none");
    exibirResultado(resultado, letras.join(""));
    alert("Apenas letras minusculas e sem acento podem ser usadas.");
  }
}

function decodificador() {
  verificacao();
  separador(letras);
  if (verificacaoFeita == "letras corretas") {
    for (let i = 0; i < letras.length; i++) {
      if (letras[i] === "a" && letras[i + 1] === "i") {
        letras.splice(i, 2, "a");
      } else if (
        letras[i] === "e" &&
        letras[i + 1] === "n" &&
        letras[i + 2] === "t" &&
        letras[i + 3] === "e" &&
        letras[i + 4] === "r"
      ) {
        letras.splice(i, 5, "e");
      } else if (
        letras[i] === "i" &&
        letras[i + 1] === "m" &&
        letras[i + 2] === "e" &&
        letras[i + 3] === "s"
      ) {
        letras.splice(i, 4, "i");
      } else if (
        letras[i] === "o" &&
        letras[i + 1] === "b" &&
        letras[i + 2] === "e" &&
        letras[i + 3] === "r"
      ) {
        letras.splice(i, 4, "o");
      } else if (
        letras[i] === "u" &&
        letras[i + 1] === "f" &&
        letras[i + 2] === "a" &&
        letras[i + 3] === "t"
      ) {
        letras.splice(i, 4, "u");
      }
      document
        .querySelector(".saida-dados__erro")
        .setAttribute("style", "display: none");
      document
        .querySelector(".saida-dados__resultado")
        .setAttribute("style", "display: block");
      textoResultado = letras.join("");
      exibirResultado(resultado, letras.join(""));
    }
  } else {
    document
      .querySelector(".saida-dados__erro")
      .setAttribute("style", "display: block");
    document
      .querySelector(".saida-dados__resultado")
      .setAttribute("style", "display: none");
    exibirResultado(resultado, letras.join(""));
    alert("Apenas letras minusculas e sem acento podem ser usadas.");
  }
}

function copiar() {
  navigator.clipboard.writeText(textoResultado);
  alert(`Você copiou o escrito: ${textoResultado}`);
}

function resetarPaginaLogo() {
  location.reload();
}

function modoNoturno() {
  const html = document.documentElement;
  html.classList.toggle("noite");

  const menuLogo = document.querySelector(".menu__logo");
  const menuIcone = document.querySelector(".menu__icone");
  const iconeExclamacao = document.querySelector(
    ".entrada-dados__acao__aviso__icone"
  );
  const imagemMenino = document.querySelector(".saida-dados__erro__imagem");

  if (html.classList.contains("noite")) {
    menuLogo.setAttribute("src", "./assets/logo-alura-laranja.svg");
    menuLogo.setAttribute("alt", "Logo da Alura laranja.");
    menuIcone.setAttribute("name", "sunny-outline");
    iconeExclamacao.setAttribute(
      "src",
      "./assets/icone-exclamacao-cinza-claro.svg"
    );
    iconeExclamacao.setAttribute("alt", "Icone de aviso.");
    imagemMenino.setAttribute("src", "./assets/imagem-menino-lupa-laranja.svg");
    imagemMenino.setAttribute(
      "alt",
      "Menino com uma lupa na mão procurando algo."
    );
  } else {
    menuLogo.setAttribute("src", "./assets/logo-alura-azul.svg");
    menuLogo.setAttribute("alt", "Logo da Alura Azul.");
    menuIcone.setAttribute("name", "moon-outline");
    iconeExclamacao.setAttribute(
      "src",
      "./assets/icone-exclamacao-cinza-escuro.svg"
    );
    iconeExclamacao.setAttribute("alt", "Icone de aviso.");
    imagemMenino.setAttribute("src", "./assets/imagem-menino-lupa-azul.svg");
    imagemMenino.setAttribute(
      "alt",
      "Menino com uma lupa na mão procurando algo."
    );
  }
}
