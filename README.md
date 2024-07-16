# Projeto: Codificador e Decodificador de Texto

## Sobre
O **Challenge Decodificador de Texto** foi proposto na trilha **"Iniciante em Programação T7 - ONE (Oracle Next Education)"** desenvolvido pela **Alura** em parceria com a **Oracle**.</br>
Para a resolução do desafio, foi fundamental todo o aprendizado obtido durante as aulas, pois os estudos promoveram bagagem necessária para a conclusão do mesmo.</br>
Como é um desafio onde o aluno deve tomar as próprias decisões, como seria numa situação real de trabalho, existem varios caminhos para se chegar no mesmo resultado.</br>
Como base para desenvolver o desafio foi dado um mapa de objetivos no **Trello**, uma ferramenta de colaboração e gestão, que permite organizar tarefas e gerir o desenvolvimento do projeto, traçando metas e concluindo as etapas. Também foi apresentado o **Figma*** do projeto, que forneceu um design de exemplo como guia.</br>

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

#### Layout:
- Alterar a fonte, tamanho e cor do título.
- Adicione uma cor, gradiente ou imagem como plano de fundo do seu site.
- Mude estilos, cores e bordas dos botões, explore sua criatividade.
- Ou você pode replicar exatamente o mesmo design apresentado, tudo ficará a seu critério.

## Extras
- **Botão Copiar:** Um botão que copie o texto criptografado/descriptografado para a área de transferência, ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos. **(Proposta do desafio)**
- **Botão Modo Claro/Escuro:** Um botão que troque o tema da página, alternando entre o modo claro e o modo escuro. **(Proposta pessoal)**
- **Logo Refresh:** Ao clicar no logo (Logo da Alura) é aplicado um refresh na pagina, voltando a pagina em sua forma nativa e limpando todos os campos. **(Proposta pessoal)**

## Solução dos Requisitos
- **Separador:** Função "separador()" feita para transformar uma string em um array de caracteres.
- **Verificação:** Função "verificacao()" feita para que esse processo seja realizado foi utilizada a função "separador" para que seja verificado cada um dos caracteres, se há um caracter minúsculo, com espaço ou com sinais de pontuação, toda a operação segue e é dada como correta. Caso haja algum caracter maiúsculo, com acento ou especial toda a operação será parada (break) e é mostrado um alerta de erro, cancelando todos os passos seguintes.
- **Codificador:** Função "codificador()" que aplica "separador()", verifica o array com "verificacao()", e após receber a verificação como correta ela aplica a substituição das letras pelas "chaves" propostas, junta os índices do array em uma string e mostra o resultado na caixa de resposta.
- **Decodificador:** Função "decodificador()" que aplica "separador()", verifica o array com "verificacao()", e após receber a verificação como correta ela reconhece se há um conjunto de índices do array que formem as "chaves", ao reconhe-las ela substitui o conjunto pela letra específica, junta os índices do array em uma string e mostra o resultado na caixa de resposta.

## Solução dos Extras

## Tecnologias
