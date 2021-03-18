// cria referência aos elementos a serem manipulados pelo programa
const outFrutas = document.getElementById("outFrutas");

const imgMaca = document.getElementById("imgMaca");
const imgLaranja = document.getElementById("imgLaranja");
const imgKiwi = document.getElementById("imgKiwi");
const imgMorango = document.getElementById("imgMorango");
const imgUva = document.getElementById("imgUva");

const divJogo = document.getElementById("divJogo");

const btVerificar = document.getElementById("btVerificar");
const btNovamente = document.getElementById("btNovamente");

const mensaOk = document.getElementById("mensaOk");
const mensaErro = document.getElementById("mensaErro");

// contador, para exibir o botão verificar após a 1ª jogada
let num = 0;

function adicionarFrutas(fruta) {
  // cria um novo elemento (imagem) a ser inserida na página
  const novaImagem = document.createElement("img");

  // muda as propriedades do elemento
  novaImagem.src = fruta + ".jpg";
  novaImagem.textAlt = "Imagem da " + fruta;
  novaImagem.className = "img-" + fruta;

  // adiciona "um elemento filho" ao divJogo
  divJogo.appendChild(novaImagem);

  // quando adicionou a 1ª fruta, exibe o botão verificar
  num = num + 1;
  if (num == 1) {
    btVerificar.className =
      "btn btn-primary btn-lg px-4 float-right mr-3 d-inline";
  }
}
imgMaca.addEventListener("click", function () {
  adicionarFrutas("maca");
});
imgLaranja.addEventListener("click", function () {
  adicionarFrutas("laranja");
});
imgKiwi.addEventListener("click", function () {
  adicionarFrutas("kiwi");
});
imgMorango.addEventListener("click", function () {
  adicionarFrutas("morango");
});
imgUva.addEventListener("click", function () {
  adicionarFrutas("uva");
});

// cria variáveis globais com o número de frutas a serem colocadas na salada
let numMaca;
let numLaranja;
let numKiwi;
let numMorango;
let numUva;

function sorteiaFrutas() {
  // gera um valor aleatório (entre 1 e 5) para cada fruta
  numMaca = Math.ceil(Math.random() * 5);
  numLaranja = Math.ceil(Math.random() * 5);
  numKiwi = Math.ceil(Math.random() * 5);
  numMorango = Math.ceil(Math.random() * 5);
  numUva = Math.ceil(Math.random() * 5);

  outFrutas.textContent =
    numMaca +
    " Maçã(s) :: " +
    numLaranja +
    " Laranja(s) :: " +
    numKiwi +
    " Kiwi(s) :: " +
    numMorango +
    " Morango(s) :: " +
    numUva +
    " Uva(s)";
}
window.addEventListener("load", sorteiaFrutas);

function verificarResultado() {
  // captura todas os elementos img (imagens) filhas de divJogo
  // cria um vetor em imagens
  let imagens = divJogo.getElementsByTagName("img");

  let contaMaca = 0;
  let contaLaranja = 0;
  let contaKiwi = 0;
  let contaMorango = 0;
  let contaUva = 0;

  // percorre o vetor e verifica a classe de cada imagem capturada
  for (let i = 0; i < imagens.length; i++) {
    if (imagens[i].className == "img-maca") {
      contaMaca++;
    } else if (imagens[i].className == "img-laranja") {
      contaLaranja++;
    } else if (imagens[i].className == "img-kiwi") {
      contaKiwi++;
    } else if (imagens[i].className == "img-morango") {
      contaMorango++;
    } else {
      contaUva++;
    }
  }

  let misturado = true;

  for (let i = 0; i < imagens.length - 1; i++) {
    if (imagens[i].className == imagens[i + 1].className) {
      misturado = false;
      break;
    }
  }

  if (
    numMaca == contaMaca &&
    numLaranja == contaLaranja &&
    numKiwi == contaKiwi &&
    numMorango == contaMorango &&
    numUva == contaUva &&
    misturado
  ) {
    mensaOk.className = "display-2 text-primary d-inline";
  } else {
    mensaErro.className = "display-4 text-danger d-inline";
  }
  btNovamente.className =
    "btn btn-danger btn-lg px-4 float-right mr-3 d-inline";
}
btVerificar.addEventListener("click", verificarResultado);

function jogarNovamente() {
  window.location.reload();
}
btNovamente.addEventListener("click", jogarNovamente);
