let botaoCriarConta = document.querySelector('#btnSubmit');
let inputNome = document.querySelector('#nome');
let inputSobrenome = document.querySelector('#sobrenome');
let spanMensagem = document.querySelector('#mensagens');

botaoCriarConta.addEventListener('click', event => {
  event.preventDefault();
  const nome = inputNome.value;
  const sobrenome = inputSobrenome.value;
  const arrayNomeCompleto = [nome, sobrenome];

  spanMensagem.innerHTML = `
    <p>Nome: ${nome.trim()}</p>
    <p>Nome: ${sobrenome.trim()}</p>
    <p>Nome Completo: ${arrayNomeCompleto.concat()},</p>
    <p>Nome Maíusculo: ${nome.toUpperCase()}</p>
    <p>Nome Minusculo: ${nome.toLowerCase()}</p>
    <p>Nome tratado: ${nome.replace('a', '@').replace('e', '3').trim()}</p>
  `

})