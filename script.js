let resultado = document.getElementById('resultado');
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let soma = parseInt(numero1) + parseInt(numero2);
    console.log(soma);
    resultado.innerHTML= "resultado:" + soma
    console.log(numero1);
    console.log(numero2);
});

const btnSub = document.getElementById("subtrair");
btnSub.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let sub = parseInt(numero1) - parseInt(numero2);
    resultado.innerHTML= "resultado:" + sub
});

const btnMulti = document.getElementById("multiplicar");
btnMulti.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let multi = parseInt(numero1) * parseInt(numero2);
    resultado.innerHTML= "resultado:" + multi
});

const btnDiv = document.getElementById("dividir");
btnDiv.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let div = parseInt(numero1) / parseInt(numero2);
    resultado.innerHTML= "resultado:" + div
});