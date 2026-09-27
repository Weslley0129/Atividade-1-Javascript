# Catálogo de Produtos — Atividade Unidade 1

Projeto de estudo em JavaScript puro (console) aplicando os conceitos de ES6
revisados na Unidade 1: variáveis, funções/arrow functions, objetos, classes,
arrays (map/filter/reduce), destructuring, template literals, módulos ES6 e
operadores (ternário/spread).

## Como rodar

Requer [Node.js](https://nodejs.org/) instalado.

```bash
node src/index.js
```

ou

```bash
npm start
```

## Estrutura

- `src/Produto.js` — classe `Produto` (nome, preco, categoria) com os métodos
  `aplicarDesconto()`, `statusPromocao()` e `exibirInfo()`. Importa
  `formatarMoeda.js` e é exportada via ES6 modules.
- `src/formatarMoeda.js` — arrow function utilitária que formata valores em
  R$ usando `Intl.NumberFormat`, reaproveitada em toda a aplicação.
- `src/index.js` — ponto de entrada que importa os dois módulos acima e
  demonstra, seção por seção, todos os pontos do checklist da atividade,
  com um catálogo de 8 produtos em 3 categorias e saída organizada no
  console (incluindo `console.table`).

## Checklist

- [x] Variáveis com `var`, `let` e `const` (incluindo reatribuição de `let`)
- [x] Função tradicional e arrow function equivalente
- [x] Objeto literal + classe `Produto` com `aplicarDesconto()`, `statusPromocao()` e `exibirInfo()`
- [x] Array de produtos com `map`, `filter` e `reduce` (incluindo `console.table`)
- [x] Destructuring de objeto e de array (com rest) + template literals
- [x] Módulos ES6 (`Produto.js` e `formatarMoeda.js` importados em `index.js`)
- [x] Operador ternário (status de promoção) e spread operator (clonar array e objeto)
