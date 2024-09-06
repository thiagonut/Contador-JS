<h1>Contador incrementador</h1>

<h2>HTML:</h2> 

<p>O HTML inclui uma div principal com a classe container-contador, que organiza o contador e aplica o CSS. Dentro dessa div, há duas tags de título (h1 e h2), que podem ser usadas para exibir o título da página e o contador.</p>

<p>Outra div filha é responsável por conter os botões de controle, como "Incrementar", "Decrementar" e "Resetar". Esta div recebe uma classe para aplicar as estilizações necessárias aos botões.</p>

<h2>JavaScript:</h2> 

<p>Há uma variável chamada contador que é inicializada com o valor 0. Um método utilizado no código é o getElementById, que captura elementos HTML com base em seus IDs, como os botões "Incrementar", "Decrementar" e "Resetar".</p>

<p>O método addEventListener é responsável por adicionar um evento a esses botões. Quando um botão é clicado, ele dispara uma função que manipula a variável contador da seguinte maneira:</p>

<p>O botão "Incrementar" incrementa o valor de contador com contador++, aumentando o valor em 1.</p>

<p>O botão "Decrementar" possui uma função que contém uma condição if, onde verifica se o valor de contador é maior que 0. Se for, ele decrementa o valor com contador--, reduzindo o valor em 1.</p>

<p>O botão "Resetar" redefine o valor da variável contador para 0 com contador = 0.</p>

<p>Uma função chamada atualizarContador é responsável por exibir o valor atualizado da variável contador, ela usa o getElementById para acessar o HTML onde o valor do contador é exibido e atualiza seu conteúdo conforme o valor de contador muda.</p>
