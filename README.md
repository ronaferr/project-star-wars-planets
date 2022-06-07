# Boas-vindas ao repositório do projeto Star Wars Planets Search!

![img](projectIntro.gif)

Para realizar o projeto, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu projeto você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Você vai desenvolver uma lista com filtros de planetas do universo de Star Wars usando **Context API e Hooks** para controlar os estados globais.

  **Segue link deploy do modelo do projeto:**
  https://trybe-starwars.surge.sh/

  **IMPORTANTE**: O modelo serve apenas para fins de ilustração. Para desenvolver o projeto, é mandatório que você siga os requisitos apontados no Readme.
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Nesse projeto, você será capaz de:

  * Utilizar a _Context API_ do **React** para gerenciar estado.
  * Utilizar o _React Hook useState_;
  * Utilizar o _React Hook useContext_;
  * Utilizar o _React Hook useEffect_;
  * Criar _React Hooks_ customizados.
</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary><br />

  * Este projeto é individual;
  * São `X` dias de projeto;
  * Data para entrega final do projeto: `23/06/2022 14:10`.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/sd-020-a-project-starwars-planets-search.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-020-a-project-starwars-planets-search`

  2. Instale as dependências

  - `npm install`.

  3. Crie uma branch a partir da branch `master`

  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-sd-020-a-project-starwars-planets-search`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-020-a-project-starwars-planets-search`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-020-a-project-starwars-planets-search/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-020-a-project-starwars-planets-search/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-020-a`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Para garantir a qualidade do seu código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto o linter `ESLint` e o `Stylelint`. Para rodar o linter localmente no seu projeto, execute o comando abaixo:

  ```bash
  npm run lint
  npm run lint:styles
  ```

  ⚠ **PULL REQUESTS COM ERROS DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Neste projeto utilizamos a [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes.

  Em alguns dos [Requisitos do projeto](#requisitos-do-projeto) será pedido que você coloque o atributo `data-testid` nos elementos HTML. Isso acontece pois a RTL utiliza esse atributo para poder verificar a solução proposta.

  Por exemplo, se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`", você poderá criar:

  ```html
  <button data-testid="my-action"></button>
  ```

  ou

  ```html
  <a data-testid="my-action"><a/>
  ```

  O atributo `data-testid="my-action"` servirá para a React Testing Library identificar o elemento e, dessa forma, será possível realizar os testes focados no comportamento da aplicação.

  **Importante:** Em alguns requisitos, utilizamos o método `getByRole` para poder selecionar os elementos de forma semântica. Portanto atente-se às instruções de cada requisito. Por exemplo, se o requisito pedir explicitamente um button, você deverá utilizar exatamente esse elemento.

  Para verificar se seu projeto atende aos requisitos, você pode executar todos os testes localmente, executando o comando:

  ```bash
  npm test
  ```

  ### Dica: desativando testes

  Para rodar apenas um teste, basta a utilização da função `.only` após o describe. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

  ![image](describe-only.png)
  ![image](only-all-green.png)

  Caso queira avaliar apenas um tópico do requisito, você também pode usar o `.only` após o `it`.

  ![image](it-only.png)
  ![image](only-one-green.png)

  ⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**
</details>

<details>
  <summary><strong>:convenience_store: Desenvolvimento </strong></summary><br />

  Neste projeto você utilizará **Context API e Hooks** para desenvolver uma lista com filtros de planetas do universo de Star Wars.

  Este repositório já contém um _template_ de uma aplicação React criado e configurado. Após clonar o projeto e instalar as dependências, você poderá criar a sua branch e iniciar o trabalho.

  O modelo do projeto pode ser acessado através [deste link](https://trybe-starwars.surge.sh/).

  :warning: **IMPORTANTE**: O modelo serve apenas para fins de ilustração. Para desenvolver o projeto, é mandatório que você siga os requisitos apontados no Readme.
</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.
</details>

# Requisitos

:warning: **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.** :warning:

:warning: Os gifs são meramente ilustrativos para visualizar o fluxo da aplicação, os nomes devem seguir os requisitos e não o gif. :warning:

---

## 1 - Faça uma requisição para o endpoint `/planets` da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos da coluna `residents`

> :bulb: Observação: Para evitar erros no avaliador, na preparação do seu ambiente de trabalho para o uso do Context API, é necessário que o `<Provider>` seja usado dentro do componente `App.js` e não no arquivo `index.js`. Esta orientação tem finalidade exclusiva para os testes deste projeto.

<details><summary> Ilustração da tabela:</summary>

  ![image](req-1.png)
</details><br />

<details><summary> A tabela deve ser renderizada por um componente chamado <code>Table</code>:</summary>

  - Os dados recebidos da API devem ser salvos em um campo chamado `data` do contexto **e é daí que a tabela deve lê-los**;
  - A requisição deve ser feita num componente separado do componente da tabela.
  - A API a ser consultada está [nesse link](https://swapi-trybe.herokuapp.com/api/planets/). Ou seja, você deverá fazer um fetch para a URL `https://swapi-trybe.herokuapp.com/api/planets/`;
  - A tabela deve ter uma primeira linha com os headers e as demais com as informações de cada campo.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Realiza uma requisição para a API
- Preenche a tabela com os dados retornados
- Verifica se a tabela tem 13 colunas
- Verifica se a tabela tem uma linha para cada planeta retornado
</details>

---

## 2 - Filtre a tabela através de um texto, inserido num *campo de texto*, exibindo somente os planetas cujos nomes incluam o texto digitado

<details><summary> A tabela deve ser atualizada com os planetas que se encaixam no filtro à medida que o nome é digitado, sem ter que apertar em um botão para efetuar a filtragem. Por exemplo, se for digitado "Tatoo" no campo de texto, o planeta "Tatooine" deve ser exibido, como demonstrado na <b>ilustração</b>:</summary>

  ![img](req-2.gif)
</details><br />

<details><summary> Requisitos técnicos:</summary>

  - Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação;
  - O campo de texto deve possuir a propriedade `data-testid='name-filter'` para que a avaliação automatizada funcione;
  - <details><summary> O texto digitado deve ser salvo num campo <code>{ filterByName: { name } }</code>. Por exemplo:</summary>

    ```javascript
    {
      filterByName: {
        name: 'Tatoo'
      }
    }
    ```
  </details>
</details>


<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Renderiza o campo de texto para o filtro de nomes
- Filtra os planetas que possuem a letra "o" no nome
- Filtra planetas que possuem a letra "oo" no nome
- Realiza os dois filtros acima em sequência e após, testa a remoção do filtro por texto
</details>

---

## 3 - Crie um filtro para valores numéricos

<details><summary> O filtro funcionará com três seletores:</summary>

  - O primeiro deve abrir um dropdown que permita a quem usa selecionar uma das seguintes colunas: `population`, `orbital_period`, `diameter`, `rotation_period` e `surface_water`. Deve ser uma tag `select` com a propriedade `data-testid='column-filter'`;
  - O segundo deve determinar se a faixa de valor será `maior que`, `menor que` ou `igual a` o numero que virá a seguir. Uma tag `select` com a propriedade `data-testid='comparison-filter'`;
  - O terceiro deve ser uma caixa de texto que só aceita números. Essa caixa deve ser uma tag `input` com a propriedade `data-testid='value-filter'`;
  - Deve haver um botão para acionar o filtro, com a propriedade `data-testid='button-filter'`
</details>

<details><summary> A combinação desses três seletores, ao clicar no botão, deve filtrar os dados da tabela de acordo com a coluna correspondente e com os valores escolhidos. Por exemplo:</summary>

  - A seleção `population | maior que | 100000` - Seleciona somente planetas com mais de 100000 habitantes.
  - A seleção `diameter | menor que | 8000` - Seleciona somente planetas com diâmetro menor que 8000.
</details>

<details><summary><b>Ilustração do filtro:</b></summary>

  ![img](req-3.gif)
</details><br />


<details><summary> Requisitos técnicos:</summary>

  * Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação;
  * <details><summary> No contexto, esses valores devem ser salvos em um outro campo <code>{ filterByNumericValues: [{ column, comparison, value }] }</code>. Por exemplo:</summary>

    ```javascript
    {
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        }
      ]
    }
    ```
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Renderiza o select de coluna e suas opções
- Renderiza o select de comparação e suas opções
- Renderiza o input para o valor do filtro
- Renderiza o botão para executar a filtragem
- Verifica se os valores iniciais de cada campo são (`population` | `maior que` | `0`)
- Utiliza o botão de filtrar sem alterar os valores iniciais dos inputs de filtro
- Filtra utilizando a comparação "menor que"
- Filtra utilizando a comparação "maior que"
- Filtra utilizando a comparação "igual a"
</details>

---

## 4 - Implemente múltiplos filtros numéricos

<details><summary> Deverá ser possível adicionar múltiplos filtros numéricos. Todos os filtros adicionados devem funcionar de forma conjunta:</summary>

  ![img](req-4.gif)
</details><br />

Por exemplo, você pode filtrar pelos planetas que possuam _Orbital period maior que 400_  **e** _Diameter menor que 10000_.

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Adiciona dois filtros e verifica se a tabela foi atualizada com as informações filtradas.
- Adiciona três filtros e verifica se a tabela foi atualizada com as informações filtradas.
</details>

---

## 5 - Não utilize filtros repetidos

<details><summary> Caso um filtro seja totalmente preenchido, um novo filtro de valores numéricos deve ser carregado.</summary>

  * Este novo filtro não deve incluir quaisquer colunas que já tenham sido selecionadas em filtros de valores numéricos anteriores;
  * Caso todas as colunas já tenham sido inclusas em filtros anteriores, não deve ser carregado um novo filtro;
  * Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação.
</details>

<details><summary> Ilustração:</summary>

  ![img](req-5.gif)
</details><br />

<details><summary> Exemplificando:</summary>

  - O primeiro filtro tem as seguintes seleções: `population | maior que | 100000`;
  - Um segundo filtro deve aparecer após essas seleções serem todas feitas;
  - No primeiro dropdown deste segundo filtro, a opção `population` deve estar ausente;
  - <details><summary> Se no segundo filtro fosse selecionado `diameter | menor que | 8000`, o estado ficaria assim:</summary>

    ```javascript
    {
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
        {
          column: 'diameter',
          comparison: 'menor que',
          value: '8000',
        }
      ]
    }
    ```
  </details>


<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Filtra por população e o remove das opções
</details>

---

## 6 - Apague um filtro de valor numérico ao clicar no ícone de `X` de um dos filtros e apague todas filtragens numéricas simultaneamente ao clicar em outro botão de `Remover todas filtragens`

* <details><summary> O <code>button</code> que permite exclusão de um filtro deve existir em todos os filtros de valores numéricos:</summary>

  - Cada linha que demonstra o filtro já utilizado deve possuir a propriedade `data-testid='filter'`, com um `button` que deve ser filho direto da tag onde foi utilizado o `data-testid='filter'`.
  - Após a exclusão, a coluna que este filtro selecionava deve passar a ficar disponível nos dropdowns dos demais filtros já presentes na tela;
  - Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação.
  - <details><summary> Exemplo:</summary>

    ```html
    data-testid='filter'
        ⬑ column
        ⬑ comparison
        ⬑ value
        ⬑ button
    ```
  </details>
</details>


* O `button` de `Remover todas filtragens` deverá possuir o `data-testid='button-remove-filters'`, e ele será responsável pela remoção de todos os filtros numéricos simultaneamente.

<details><summary> Ilustração do requisito:</summary>

  ![img](req-6.gif)
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Adiciona um filtro e verifica se a tabela foi atualizada com as informações filtradas, depois remove o filtro e verifica se os valores da tabela voltaram ao original.
- Adiciona dois filtros e verifica se a tabela foi atualizada com as informações filtradas, depois remove os filtros e verifica se os valores da tabela voltaram ao original.
- Adiciona três filtros e verifica se a tabela foi atualizada com as informações filtradas, depois remove os filtros utilizando o botão `button-remove-filters` e verifica se os valores da tabela voltaram ao original.
</details>

---

# Requisito Bônus

## 7 - Ordene as colunas de forma ascendente ou descendente

* Essa ordenação deve ser feita via filtro: um dropdown selecionará a coluna a basear a ordenação e um par de radio buttons determinará se é ascendente ou descendente.

* <details><summary> A informação acerca da ordenação das colunas deve ser armazenada em um novo campo <code>{ order: { column: 'population', sort: 'ASC'} }</code>:</summary>

  - O campo `column` representa o nome da coluna a ordenar;
  - O campo `sort` representa a ordenação, sendo 'ASC' ascendente e 'DESC' descendente;
  - <details><summary> Por padrão, a tabela começa ordenada por ordem alfabética. Por exemplo:</summary>

    ```javascript
    {
      order: {
        column: 'population',
        sort: 'ASC',
      }
    }
    ```
  </details>
</details>

* <details><summary> O dropdown deve ser um elemento <code>select</code>:</summary>

  - O `dropdown` precisa ter a propriedade `data-testid='column-sort'`;
  - <details><summary> As colunas selecionáveis através deste <code>dropdown</code> são:</summary>

    - 'population';
    - 'orbital_period';
    - 'diameter';
    - 'rotation_period';
    - 'surface_water'.
    </details>
</details>

* <details><summary> É necessário ter dois <code>inputs</code> de tipo <code>radio</code>:</summary>

  - O primeiro deve possuir o atributo `data-testid='column-sort-input-asc'` e `value` sendo `ASC`;
  - O segundo deve possuir o atributo `data-testid='column-sort-input-desc'` e `value` sendo `DESC`;
</details>

* :bulb: Caso a coluna ordenada possua planetas com valores `unknown`, você deverá ordená-los de forma que valores `unknown` ficarão em último lugar na ordenação.

* Por fim, crie um botão para submeter a ordenação, com uma tag `button` e a propriedade `data-testid='column-sort-button'`.

* Adicione o atributo `data-testid` com o valor `planet-name` em todos os elementos da tabela que possuem o nome de um planeta.

<details><summary><b> Ilustração do requisito:</b></summary>

  ![img](req-7.gif)
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary><br />

- Verifica ordenação inicial
- Ordena os planetas do maior período orbital para o menor período orbital
- Ordena os planetas do menor diametro para o maior diametro
- Ordena os planetas do mais populoso para o menos populoso
    - Verifica se os oito primeiros planetas estão ordenados corretamente
    - Verifica se os dois últimos planetas possuem os valores unknown na coluna population

</details>
