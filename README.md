# dundamentos de React 

## gerenciamento de efeitos colaterais

## 12 gerenciamento de efeitos colaterais

`efeitos colaterais` no react são operações que não tem ligação direta com a renderização do componente, como por exemplo, solicitações de API e manipulação de eventos.

Usamos o **hook** `useEffect` para garantir que esses efeitos colaterais ocorram no momento adequado do cilco de vida do componente, evitando execuções repetitivas e problemas de carregamento e desempenho.

## Informações gerais

A renderização ocorre na seguinte sequência: 

inxex.html <- main.jsx <- App.jsx

## 11 navegação usando rotas
O react suporta a navegação/links como single page application (SPA) usando uma biblioteca adicional chamada **react router dom**.
`npm react-router-dom`

## 06- props

São parâmetros com valores passados para os componentes React, normalmente usados para injeção de dados dinâmicos. As `props` funcionam como objetos, e cada `prop` criada por você passa a ter propriedades deste objeto. 

As `props` são criadas manualmente, embora também exista um `prop` especial chamada `children` que permite ler/transmitir o conteudo que fica entre as tags de abertura e fechamento de um componente.


## 05-styled-components

Biblioteca (ou lib) muito comum para estilização CSS in JS de componentes.

Para instalação, execute: `npm install styled-components`

Para utilização, crie componentes estilizados usando a sintaxe:

```javascript
const StyledNome = styled.tag`
  propriedadecss: valorDaPropriedade;
  propriedadecss: valorDaPropriedade;
`;
```

---

## Resumo/Revisão

JSX -> HTML + JS para criar componentes

- App.jsx (Componente PRINCIPAL)
- main.jsx (Inicialização do React)
- index.html (elemento raíz e chamada do script)

## 04-estilos

### CSS in JS

- CSS inline: aplicado via atributo style da tag usando sintaxe JS, ou seja, objeto com propriedades.

- CSS externo e global usando arquivo.css e importando no main.jsx

- CSS Module: arquivo CSS especial relacionado ao componente que desejamos estilizar. Normalmente, nomeia-se o arquivo como "NomeComponente.module.css". A vantagem de usar CSS Modules é criar um escopo de estilização evitando conflitos de classes com mesmo nome.

---

## 00-projeto-resetado

### Informações gerais

A renderização ocorre na seguinte sequencia:

index.html <- main.jsx <- App.jsx