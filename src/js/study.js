// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - Nesse primeiro passo, utilizamos o método 'querySelectorAll' para montar uma lista que pega todos os elementos HTML que possuem a classe 'personagem'

const personagens = document.querySelectorAll('.personagem');

// passo 2 - Nesse segundo passo, adicionamos a classe responsável por dar o estilo do personagem selecionado. Para isso, iteramos sobre a lista utilizando o método 'forEach' na lista 'personagens'. Dessa forma, utilizamos a ação () => {} com o parâmetro 'personagem' para cada elemento da lista e adicionamos uma escuta de eventos em cada um utilizando o método 'addEventListener'. Nos utilizando desse método, primeiramente definimos qual o evento que será responsável pela próxima ação e para isso deifinimos que o evento será 'mouseenter', ou seja, a entrada do mouse no elemento desejado. ENTRAR != CLICAR. Após isso, definimos a ação a ser executada quando ocorrer o evento. A ação será adicionar uma classe 'selecionado' ao elemento personagem sobre o qual o mouse estiver passando.

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        // passo 3 -Aqui utilizamos o 'querySelector' para pegar o último elemento que tinha a classe 'selecionado' e remoê-la do elemento. Logo abaixo nó a adicionamos novamente no elemento que atender ao requisito do evento 'mouseenter'.
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        // Parte do passo 2
        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        // passo 1 - Selecionamos a classe da imagem do personagem
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        // passo 2 - Vamos alterar a imagem utilizando '.src'. Esse método nos possibilita alterar atributos do elemento, no nosso caso, temos um elemento img que possui 'src' como atributo, indicando a origem do arquivo de imagem. 
        // Ao alterá-lo conseguimos mudar a imagem que é exibida com a realização do evento 'mouseenter'.
        // Para que a imagem se altere de acordo com o personagem sobre o qual estiver posicionado o mouse, podemos fazer o uso de uma template string.
        // Primeiro criamos uma constante para armazenar o VALOR do ID do personagem que estiver atendendo à condição do evento.
        // Depois, inserimos essa variável dentro da fonte da imagem através da template string, fazendo com que o valor do id que especifará a imagem a ser utilizada se altere de acordo com o personagem que estivermos selecionando.
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // passo 3 - Vamos alterar o nome da imagem grande do personagem. Para isso, vamos armazenar em uma variável o ID de cada nome de personagem
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        
    });
})


