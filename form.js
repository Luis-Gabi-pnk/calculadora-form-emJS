const btnCadastrar = document.getElementById('cadastrar');
const btnLimpar = document.getElementById('limpar');

btnCadastrar.addEventListener("click", () => {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = document.getElementById('data').value;
 
    let item1 = document.getElementById('item1');
    let item2 = document.getElementById('item2');
    let item3 = document.getElementById('item3');

    item1.innerHTML = "Nome: " + nome
    item2.innerHTML = "E-mail: " + email
    item3.innerHTML = "Data de nascimento: " + data

});

btnLimpar.addEventListener("click", () => {
    nome.value = ""
    email.value = ""
    data.value = ""

    valor1.innerHTML = "Nome:"
    valor2.innerHTML = "E-mail:"
    valor3.innerHTML = "Data de nascimento:"
});