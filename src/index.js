import { Produto } from "./Produto.js";

// ============================================================
// 1. Variáveis (var, let, const)
// ============================================================
const nomeLoja = "Tech Store";
let desconto = 0.1;
var categoriaPrincipal = "Eletrônicos";

console.log("\n=== 1. Variáveis ===");
console.log(
  `Loja: ${nomeLoja} | Desconto padrão: ${desconto * 100}% | Categoria principal: ${categoriaPrincipal}`
);

// ============================================================
// 2. Funções e Arrow Functions
// ============================================================
function calcularPrecoFinal(preco, desconto) {
  return preco - preco * desconto;
}

const calcularPrecoFinalArrow = (preco, desconto) => preco - preco * desconto;

console.log("\n=== 2. Funções e Arrow Functions ===");
console.log(`Função tradicional: R$${calcularPrecoFinal(200, desconto).toFixed(2)}`);
console.log(`Arrow function:     R$${calcularPrecoFinalArrow(200, desconto).toFixed(2)}`);

// ============================================================
// 3. Objetos e Classes
// ============================================================
const produtoLiteral = {
  nome: "Fone Bluetooth",
  preco: 150,
  categoria: "Eletrônicos",
};

console.log("\n=== 3. Objetos e Classes ===");
console.log("Objeto literal:", produtoLiteral);

const produtoTeste = new Produto("Mouse Gamer", 120, "Eletrônicos");
console.log(`Instância da classe Produto: ${produtoTeste.exibirInfo()}`);
console.log(`aplicarDesconto(10%): R$${produtoTeste.aplicarDesconto(0.1).toFixed(2)}`);

// ============================================================
// 4. Arrays e Manipulação de Arrays (map, filter, reduce)
// ============================================================
const catalogo = [
  new Produto("Notebook", 3500, "Eletrônicos"),
  new Produto("Mouse Gamer", 120, "Eletrônicos"),
  new Produto("Cadeira de Escritório", 800, "Móveis"),
  new Produto("Camiseta", 60, "Vestuário"),
  new Produto("Fone Bluetooth", 150, "Eletrônicos"),
];

console.log("\n=== 4. Arrays e Manipulação de Arrays ===");

const nomesProdutos = catalogo.map((produto) => produto.nome);
console.log("map -> nomes dos produtos:", nomesProdutos);

const produtosEletronicos = catalogo.filter((produto) => produto.categoria === "Eletrônicos");
console.log(
  "filter -> produtos da categoria 'Eletrônicos':",
  produtosEletronicos.map((p) => p.nome)
);

const precoTotal = catalogo.reduce((total, produto) => total + produto.preco, 0);
console.log(`reduce -> preço total do catálogo: R$${precoTotal.toFixed(2)}`);

// ============================================================
// 5. Destructuring e Template Literals
// ============================================================
console.log("\n=== 5. Destructuring e Template Literals ===");
const { nome, preco } = catalogo[0];
console.log(`${nome} custa R$${preco}`);

// ============================================================
// 6. Módulos ES6
// ============================================================
console.log("\n=== 6. Módulos ES6 ===");
console.log("Classe Produto importada de Produto.js com sucesso (import/export).");

// ============================================================
// 7. Operadores (ternário e spread)
// ============================================================
console.log("\n=== 7. Operadores ===");

catalogo.forEach((produto) => {
  const status = produto.preco < 200 ? "Em promoção" : "Preço normal";
  console.log(`${produto.nome}: ${status}`);
});

const novoProduto = new Produto("Teclado Mecânico", 250, "Eletrônicos");
const catalogoAtualizado = [...catalogo, novoProduto];

console.log(`\nCatálogo original: ${catalogo.length} produtos.`);
console.log(`Catálogo atualizado (spread operator): ${catalogoAtualizado.length} produtos.`);
console.log(
  "Novo catálogo:",
  catalogoAtualizado.map((p) => p.nome)
);
