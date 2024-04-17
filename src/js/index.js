const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos'); //declramos a variavel constante com o nome de BotaoMostrarProjetos//
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)'); //o all busca todos os elementos que tem essa classe, diferente do que nao tem All, ele so busca uma classe. Mostrar projeto e :nao(not) os do tipo ativo(.ativo)'//

botaoMostrarProjetos.addEventListener('click', () => {
projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo'); //ClassList pega todas as classes de uma div//
});
   botaoMostrarProjetos.classList.add('remover');
}); //adicionar uma "esculta" no botao, se o usuario clicou no botão, adicionar um evento ao click//


