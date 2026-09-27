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
  `aplicarDesconto()` e `exibirInfo()`, exportada via ES6 modules.
- `src/index.js` — ponto de entrada que importa `Produto` e demonstra, em
  ordem, todos os pontos do checklist da atividade.

## Checklist

- [x] Variáveis com `var`, `let` e `const`
- [x] Função tradicional e arrow function equivalente
- [x] Objeto literal + classe `Produto` com `aplicarDesconto()` e `exibirInfo()`
- [x] Array de 5 produtos com `map`, `filter` e `reduce`
- [x] Destructuring e template literals
- [x] Módulos ES6 (`Produto.js` importado em `index.js`)
- [x] Operador ternário (status de promoção) e spread operator (clonar catálogo)
