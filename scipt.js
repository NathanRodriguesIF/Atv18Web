//Variáveis dos SPANS
var q1 = document.getElementById("n1");
var q2 = document.getElementById("n2");
var q3 = document.getElementById("n3");
var q4 = document.getElementById("n4");
var q5 = document.getElementById("n5");
var q6 = document.getElementById("n6");
var q7 = document.getElementById("n7");
var q8 = document.getElementById("n8");
var q9 = document.getElementById("n9");

//Variáveis dos INPUTS
var botao1 = document.getElementById("X");
var botao2 = document.getElementById("O");

var valor = null;
var resultadon1 = "";
var resultadon2 = "";
var resultadon3 = "";
var resultadon4 = "";
var resultadon5 = "";
var resultadon6 = "";
var resultadon7 = "";
var resultadon8 = "";
var resultadon9 = "";
var alterna = "";

//Remover partes da página
var elemento = document.getElementById("footer")
function remover() {
    elemento.parentNode.removeChild(elemento)
}


//Selecionar item para jogar
function select1() {
    valor = "X";
    remover()
}
function select2() {
    valor = "O";
    remover()
}

contagem = []
function clicar1() {
    q1.innerText = valor;
    resultadon1 = valor;
    contagem.push(1);
    validar();
    alternar();
    alterna = valor;
}
function clicar2() {
    q2.innerText = valor;
    resultadon2 = valor;
    contagem.push(1);
    validar();
    alternar();
    alterna = valor;
}
function clicar3() {
    q3.innerText = valor;
    resultadon3 = valor;
    contagem.push(1);
    validar();
    alternar();
    alterna = valor;
}
function clicar4() {
    q4.innerText = valor;
    resultadon4 = valor;
    contagem.push(1);
    validar();
    alternar();
    alterna = valor;
}
function clicar5() {
    q5.innerText = valor;
    resultadon5 = valor;
    contagem.push(1);
    validar();
    alternar();
    alterna = valor;
}
function clicar6() {
    q6.innerText = valor;
    resultadon6 = valor;
    contagem.push(1);
    validar();
    alternar();
    alterna = valor;
}
function clicar7() {
    q7.innerText = valor;
    resultadon7 = valor;
    contagem.push(1);
    validar();
    alternar();
    alterna = valor;
}
function clicar8() {
    q8.innerText = valor;
    resultadon8 = valor;
    contagem.push(1);
    validar();
    alternar();
    alterna = valor;
}
function clicar9() {
    q9.innerText = valor;
    resultadon9 = valor;
    contagem.push(1);
    validar();
    alternar();
    alterna = valor;
}

//Alternar valores
function alternar() {
    if (contagem.length > 0) {
        if (valor == "X") {
            valor = "O"
        } else if (valor == "O") {
            valor = "X"
        }
    }
}

//Funcionamento do placar
placar1 = document.getElementById("placarX");
placar2 = document.getElementById("placarO");
valorX = 0;
function placarX() {
    valorX += 1;
    placar1.innerText = valorX;
}

valorO = 0;
function placarO() {
    valorO += 1;
    placar2.innerText = valorO;
}

//Funcionamento limpar
function limpar() {
    q1.innerText = "";
    q2.innerText = "";
    q3.innerText = "";
    q4.innerText = "";
    q5.innerText = "";
    q6.innerText = "";
    q7.innerText = "";
    q8.innerText = "";
    q9.innerText = "";
    resultadon1 = "";
    resultadon2 = "";
    resultadon3 = "";
    resultadon4 = "";
    resultadon5 = "";
    resultadon6 = "";
    resultadon7 = "";
    resultadon8 = "";
    resultadon9 = "";
}


//Funcionamento para quando dar velha
function velha() {
    window.alert("O jogo deu velha!!!");
    limpar();
}

function validar() {
    if (resultadon1 =="X" && resultadon2 == "X" && resultadon3 == "X") {
        setTimeout(() => {
            window.alert("O X ganhou");
            limpar();
            placarX();
        }, 50);
    } else if (resultadon4 =="X" && resultadon5 == "X" && resultadon6 == "X") {
        setTimeout(() => {
            window.alert("O X ganhou");
            limpar();
            placarX();
        }, 50);
    } else if (resultadon7 =="X" && resultadon8 == "X" && resultadon9 == "X") {
        setTimeout(() => {
            window.alert("O X ganhou");
            limpar();
            placarX();
        }, 50);
    } else if (resultadon1 =="X" && resultadon4 == "X" && resultadon7 == "X") {
        setTimeout(() => {
            window.alert("O X ganhou");
            limpar();
            placarX();
        }, 50);
    } else if (resultadon2 =="X" && resultadon5 == "X" && resultadon8 == "X") {
        setTimeout(() => {
            window.alert("O X ganhou");
            limpar();
            placarX();
        }, 50);
    } else if (resultadon3 =="X" && resultadon6 == "X" && resultadon9 == "X") {
        setTimeout(() => {
            window.alert("O X ganhou");
            limpar();
            placarX();
        }, 50);
    } else if (resultadon1 =="X" && resultadon5 == "X" && resultadon9 == "X") {
        setTimeout(() => {
            window.alert("O X ganhou");
            limpar();
            placarX();
        }, 50);
    } else if (resultadon3 =="X" && resultadon5 == "X" && resultadon7 == "X") {
        setTimeout(() => {
            window.alert("O X ganhou");
            limpar();
            placarX();
        }, 50);
    } else if (resultadon1 =="O" && resultadon2 == "O" && resultadon3 == "O") {
        setTimeout(() => {
            window.alert("O O ganhou");
            limpar();
            placarO();
        }, 50);
    } else if (resultadon4 =="O" && resultadon5 == "O" && resultadon6 == "O") {
        setTimeout(() => {
            window.alert("O O ganhou");
            limpar();
            placarO();
        }, 50);
    } else if (resultadon7 =="O" && resultadon8 == "O" && resultadon9 == "O") {
        setTimeout(() => {
            window.alert("O O ganhou");
            limpar();
            placarO();
        }, 50);
    } else if (resultadon1 =="O" && resultadon4 == "O" && resultadon7 == "O") {
        setTimeout(() => {
            window.alert("O O ganhou");
            limpar();
            placarO();
        }, 50);
    } else if (resultadon2 =="O" && resultadon5 == "O" && resultadon8 == "O") {
        setTimeout(() => {
            window.alert("O O ganhou");
            limpar();
            placarO();
        }, 50);
    } else if (resultadon3 =="O" && resultadon6 == "O" && resultadon9 == "O") {
        setTimeout(() => {
            window.alert("O O ganhou");
            limpar();
            placarO();
        }, 50);
    } else if (resultadon1 =="O" && resultadon5 == "O" && resultadon9 == "O") {
        setTimeout(() => {
            window.alert("O O ganhou");
            limpar();
            placarO();
        }, 50);
    } else if (resultadon3 =="O" && resultadon5 == "O" && resultadon7 == "O") {
        setTimeout(() => {
            window.alert("O O ganhou");
            limpar();
            placarO();
        }, 50);
    } else if (resultadon1 !="" && resultadon2 != "" && resultadon3 != "" && resultadon4 != "" && resultadon5 != "" && resultadon6 != "" && resultadon7 != "" && resultadon8 != "" && resultadon9 != "") {
        setTimeout(() => {
            velha()
        }, 50);
    }
    
}