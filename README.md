# WEME - 2020
### TechForGood / Assistência Social

#### Apresentação 

As instituições de caridades sempre estão precisando de doações, tanto as mais famosas quanto as de menor expressão. Com a Covid-19, esse problema se agravou ainda mais, as pessoas não podem ir até as instituições para doar, e em outros casos nem conhecem as mais próximas de suas casas. Além disso, a grande maioria das doações estão indo para instituições maiores, sendo que elas precisam menos do que outras menores em muitos casos.

Pesquisas mostram que a pandemia já alterou a vida de 97% das pessoas que vivem em comunidade, a maioria trabalhadores autônomos (71%) 
Após um mês sem trabalhar, 86% teria dificuldade para comprar comida e outros itens básicos de sobrevivência.

Uma reportagem do G1 informou que 92% das mães de comunidade terão dificuldade de comprar alimentos após um mês sem renda.

#### O Produto
O **WEME** é um aplicativo mobile, que tem como objetivo interligar pessoas que querem doar e, instituições ou pessoas que precisem de doações.

![TelaInicialUsuarioLogado](https://user-images.githubusercontent.com/53228524/82758724-a53ff280-9dbe-11ea-9645-643d6ff43a2f.PNG)

Após fazer o cadastro no aplicativo, o doador terá a opção de doar para as instituições mais próximas a ele, ou para as instituições que mais estão precisando no momento.
O usuário doador terá uma lista de instituições que estão precisando de doação de acordo com o filtro inicial, e ao clicar terá uma breve descrição do que faz a instituição e as informações necessárias para quem quer doar como endereço, itens que mais estão precisando, conta bancária para transferências, links de vaquinha online além, claro, dos dados para contato.

![TelaOpcoesDoador](https://user-images.githubusercontent.com/53228524/82758759-dfa98f80-9dbe-11ea-9c1e-3e508b73fac9.PNG) ![ListaInstituicoes](https://user-images.githubusercontent.com/53228524/82758985-572bee80-9dc0-11ea-8270-81ae1c687e34.PNG) ![DadosInstituicao](https://user-images.githubusercontent.com/53228524/82758965-2ba90400-9dc0-11ea-9493-b7f8000ae01e.PNG)

#### Tecnologia
Para colocar a ideia em prática nós utilizamos:

* Ionic - Como SDK do nosso projeto e toda sua vasta documentação e componentes

* Angular - Framework de JS para aprimorar nosso projeto

* SASS - Linguagem de CSS para organização

* IonIcon - Ícones do app

* Capacitor - Para tornar o projeto compilado nativo no Android e IOS


#### Padronização

* Padrão de git commit - https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716

* Padrão de SASS - Sempre utilizando SCSS ao invez do SASS(lang="scss") (Usar o padrão BEM(http://getbem.com/introduction/) sempre que possível para a organização do projeto)

#### Instalação e comandos
O App WEME requer Node.js e Ionic para rodar.

$npm install -g ionic - Para instalar o Ionic

$ionic serve - Comando para rodar o projeto

$ionic generate page pages/nome da página - Comando para criação de novas páginas

#### Informações adicionais 

Minimizar a distância entre o doador e a doação ao receptor, além de dar maior visibilidade para as instituições que mais precisam, são os principais focos desse projeto.



#### Bibliografia
BETIM, Felipe. **Sem ações específicas, 86% dos moradores de favelas vão passar fome por causa do coronavírus**.EL PAÍS, 2020.
Disponível em:
https://brasil.elpais.com/sociedade/2020-03-28/sem-acoes-especificas-86-dos-moradores-de-favelas-vao-passar-fome-por-causa-do-coronavirus.html

BORTOLOTTO, Bernardo. **Coronavírus: Comunidades de SP temem não ter dinheiro para comprar alimento durante quarentena e pedem doações**. G1, 2020.
Disponível em:
https://g1.globo.com/sp/sao-paulo/noticia/2020/04/03/coronavirus-comunidades-de-sp-temem-nao-ter-dinheiro-para-comprar-alimento-durante-quarentena-e-pedem-doacoes.ghtml
