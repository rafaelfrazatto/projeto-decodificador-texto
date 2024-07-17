# Projeto: Codificador e Decodificador de Texto

<div>
  <img src="./assets/imagens%20do%20projeto/modo%20claro/Decodificador%20-%201%20Desktop.svg" alt="Layout do projeto desktop no modo claro." width=400px style="margin-right: 25px; margin-left: 25px;">
  <img src="./assets/imagens do projeto/modo escuro/Decodificador - 3 Desktop.svg" alt="Layout do projeto desktop no modo escuro." width=400px style="margin-right: 25px; margin-left: 25px;">
</div>

## Sobre

O **Challenge Decodificador de Texto** foi proposto na trilha **"Iniciante em Programação T7 - ONE (Oracle Next Education)"** desenvolvido pela **Alura** em parceria com a **Oracle**.</br>
Para a resolução do desafio, foi fundamental todo o aprendizado obtido durante as aulas, pois os estudos promoveram bagagem necessária para a conclusão do mesmo.</br>
Como é um desafio onde o aluno deve tomar as próprias decisões, como seria numa situação real de trabalho, existem varios caminhos para se chegar no mesmo resultado.</br>
Como base para desenvolver o desafio foi dado um mapa de objetivos no **Trello**, uma ferramenta de colaboração e gestão, que permite organizar tarefas e gerir o desenvolvimento do projeto, traçando metas e concluindo as etapas. Também foi apresentado o **Figma\*** do projeto, que forneceu um design de exemplo como guia.</br>

## Requisitos

#### Geral:

O projeto consiste em desenvolver um codificador/decodificador de texto em uma pagina web.</br>

As "chaves" de criptografia que foram propostas:

- Letra "a" é convertida para "ai"
- Letra "e" é convertida para "enter"
- Letra "i" é convertida para "imes"
- Letra "o" é convertida para "ober"
- Letra "u" é convertida para "ufat"

Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.</br>

Por exemplo:

- "gato" => "gaitober"
- "gaitober" => "gato"

Deve funcionar apenas com letras minúsculas.</br>
Não devem ser utilizados letras com acentos, nem caracteres especiais.</br>
A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções.</br>
O resultado deve ser exibido na tela.</br>

<div>
  <img src="./assets/imagens do projeto/modo claro/Decodificador - 2 Desktop.svg" alt="Layout do projeto desktop no modo claro." width=200px style="margin-right: 25px; margin-left: 25px;">
  <img src="./assets/imagens do projeto/modo escuro/Decodificador - 4 Desktop.svg" alt="Layout do projeto desktop no modo escuro." width=200px style="margin-right: 25px; margin-left: 25px;">
  <img src="./assets/imagens do projeto/modo claro/Decodificador - 2 Tablet.svg" alt="Layout do projeto tablet no modo claro." width=100px style="margin-right: 25px; margin-left: 25px;">
  <img src="./assets/imagens do projeto/modo escuro/Decodificador - 4 Tablet.svg" alt="Layout do projeto tablet no modo escuro." width=100px style="margin-right: 25px; margin-left: 25px;">
  <img src="./assets/imagens do projeto/modo claro/Decodificador - 2 Celular.svg" alt="Layout do projeto celular no modo claro." width=50px style="margin-right: 25px; margin-left: 25px;">
  <img src="./assets/imagens do projeto/modo escuro/Decodificador - 4 Celular.svg" alt="Layout do projeto celular no modo escuro." width=50px style="margin-right: 25px; margin-left: 25px;">
</div>

#### Layout:

- Alterar a fonte, tamanho e cor do título.
- Adicione uma cor, gradiente ou imagem como plano de fundo do seu site.
- Mude estilos, cores e bordas dos botões, explore sua criatividade.
- Ou você pode replicar exatamente o mesmo design apresentado, tudo ficará a seu critério.
- Responsividade de telas.

<div>
  <img src="./assets/imagens do projeto/modo claro/Decodificador - 1 Tablet.svg" alt="Layout do projeto tablet no modo claro." width=200px style="margin-right: 25px; margin-left: 25px;">
  <img src="./assets/imagens do projeto/modo escuro/Decodificador - 3 Tablet.svg" alt="Layout do projeto tablet no modo escuro." width=200px style="margin-right: 25px; margin-left: 25px;">
  <img src="./assets/imagens do projeto/modo claro/Decodificador - 1 Celular.svg" alt="Layout do projeto celular no modo claro." width=100px style="margin-right: 25px; margin-left: 25px;">
  <img src="./assets/imagens do projeto/modo escuro/Decodificador - 3 Celular.svg" alt="Layout do projeto celular no modo escuro." width=100px style="margin-right: 25px; margin-left: 25px;">
</div>

## Extras

- **Botão Copiar:** Um botão que copie o texto criptografado/descriptografado para a área de transferência, ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos. **(Proposta do desafio)**
- **Botão Modo Claro/Escuro:** Um botão que troque o tema da página, alternando entre o modo claro e o modo escuro. **(Proposta pessoal)**
- **Logo Refresh:** Ao clicar no logo (Logo da Alura) é aplicado um refresh na pagina, voltando a pagina em sua forma nativa e limpando todos os campos. **(Proposta pessoal)**
- **Rodapé com Links:** Colocar links das redes sociais do desenvolvedor. **(Proposta pessoal)**

## Solução dos Requisitos

- **Separador:** Função "separador()" feita para transformar uma string em um array de caracteres.
- **Verificação:** Função "verificacao()" feita para que esse processo seja realizado foi utilizada a função "separador" para que seja verificado cada um dos caracteres, se há um caracter minúsculo, com espaço ou com sinais de pontuação, toda a operação segue e é dada como correta. Caso haja algum caracter maiúsculo, com acento ou especial toda a operação será parada (break) e é mostrado um alerta de erro, cancelando todos os passos seguintes.
- **Exibir Resultado na Tela:** Função "exibirResultado(variavel, texto)" feita para que seja exibido o resultado na caixa de resposta.
- **Codificador:** Função "codificador()" que aplica "separador()", verifica o array com "verificacao()", e após receber a verificação como correta ela aplica a substituição das letras pelas "chaves" propostas, junta os índices do array em uma string e aplica "exibirResultado(variavel, texto)".
- **Decodificador:** Função "decodificador()" que aplica "separador()", verifica o array com "verificacao()", e após receber a verificação como correta ela reconhece se há um conjunto de índices do array que formem as "chaves", ao reconhe-las ela substitui o conjunto pela letra específica, junta os índices do array em uma string e aplica "exibirResultado(variavel, texto)".

O layout proposto é o que foi utilizado, pensando em uma situação real de trabalho em equipe, onde um time desenvolveu a UI/UX/design do projeto e o outro time desenvolveu a aplicação do mesmo em uma pagina web.</br>
A responsividade foi aplicada seguindo os padrões oferecidos pelo Figma do projeto.</br>

## Solução dos Extras

- **Botão Copiar:** Função "copiar()" feita com base na documentação oferecida no Trello e adicionada que ao copiar o texto, é exibido um alerta mostrando qual foi o texto copiado.
- **Botão Modo Claro/Escuro:** A pagina tem como forma nativa o "modo claro", sabendo disso foi feita a função "modoNoturno()" que adiciona a classe "noite" no HTML e altera as imagens da pagina deixando elas tematizadas com o modo aplicado. No CSS foram aplicadas as mudanças de cores, relacionada a classe do HTML, tematizando por completo o modo noturno.
- **Logo Refresh:** Para realizar essa proposta foi realizada uma busca pela documentação, com isso foi feita uma função chamada "resetarPaginaLogo()", que ao ser clicada a página é recarregada e volta em seu estado nativo e com os campos limpos.
- **Rodapé com Links:** Foram colocadas tags para vincular os links das redes sociais com os icones.

## Tecnologias

- HTML
- CSS
- JavaScript
