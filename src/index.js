import { Produto } from "./Produto.js";
import { formatarMoeda } from "./formatarMoeda.js";

// Pequeno helper só para deixar a saída do console organizada por seção
const secao = (titulo) => console.log(`\n${"=".repeat(60)}\n${titulo}\n${"=".repeat(60)}`);

// ============================================================
// 1. Variáveis (var, let, const)
// ============================================================
secao("1. Variáveis (var, let, const)");

const nomeLoja = "Tech Store";
let desconto = 0.1;
var categoriaPrincipal = "Eletrônicos";

console.log(`Loja: ${nomeLoja}`);
console.log(`Desconto padrão (let, pode mudar): ${desconto * 100}%`);
console.log(`Categoria principal (var): ${categoriaPrincipal}`);

desconto = 0.15; // let permite reatribuição
console.log(`Desconto atualizado: ${desconto * 100}%`);

// ============================================================
// 2. Funções e Arrow Functions
// ============================================================
secao("2. Funções e Arrow Functions");

function calcularPrecoFinal(preco, desconto) {
  return preco - preco * desconto;
}

const calcularPrecoFinalArrow = (preco, desconto) => preco - preco * desconto;

console.log(`Função tradicional (200, 10%): ${formatarMoeda(calcularPrecoFinal(200, 0.1))}`);
console.log(`Arrow function     (200, 10%): ${formatarMoeda(calcularPrecoFinalArrow(200, 0.1))}`);

// ============================================================
// 3. Objetos e Classes
// ============================================================
secao("3. Objetos e Classes");

const produtoLiteral = {
  nome: "Fone Bluetooth",
  preco: 150,
  categoria: "Eletrônicos",
};
console.log("Objeto literal:", produtoLiteral);

const produtoTeste = new Produto("Mouse Gamer", 120, "Eletrônicos");
console.log(`Instância da classe Produto -> exibirInfo(): ${produtoTeste.exibirInfo()}`);
console.log(`aplicarDesconto(10%): ${formatarMoeda(produtoTeste.aplicarDesconto(0.1))}`);
console.log(`statusPromocao(): ${produtoTeste.statusPromocao()}`);

// ============================================================
// 4. Arrays e Manipulação de Arrays (map, filter, reduce)
// ============================================================
secao("4. Arrays e Manipulação de Arrays");

const catalogo = [
  new Produto("Notebook", 3500, "Eletrônicos"),
  new Produto("Mouse Gamer", 120, "Eletrônicos"),
  new Produto("Teclado Mecânico", 250, "Eletrônicos"),
  new Produto("Cadeira de Escritório", 800, "Móveis"),
  new Produto("Mesa para Computador", 650, "Móveis"),
  new Produto("Camiseta", 60, "Vestuário"),
  new Produto("Tênis Esportivo", 320, "Vestuário"),
  new Produto("Fone Bluetooth", 150, "Eletrônicos"),
];

console.table(
  catalogo.map((p) => ({ Nome: p.nome, Categoria: p.categoria, Preço: formatarMoeda(p.preco) }))
);

const nomesProdutos = catalogo.map((produto) => produto.nome);
console.log("map -> nomes dos produtos:", nomesProdutos);

const produtosEletronicos = catalogo.filter((produto) => produto.categoria === "Eletrônicos");
console.log(
  "filter -> produtos da categoria 'Eletrônicos':",
  produtosEletronicos.map((p) => p.nome)
);

const precoTotal = catalogo.reduce((total, produto) => total + produto.preco, 0);
console.log(`reduce -> preço total do catálogo: ${formatarMoeda(precoTotal)}`);

const produtoMaisCaro = catalogo.reduce((maisCaro, atual) =>
  atual.preco > maisCaro.preco ? atual : maisCaro
);
console.log(`reduce -> produto mais caro: ${produtoMaisCaro.exibirInfo()}`);

// ============================================================
// 5. Destructuring e Template Literals
// ============================================================
secao("5. Destructuring e Template Literals");

const { nome, preco } = catalogo[0];
console.log(`${nome} custa R$${preco}`);

const [primeiroProduto, segundoProduto, ...restanteCatalogo] = catalogo;
console.log(`Destructuring de array -> primeiro: ${primeiroProduto.nome}, segundo: ${segundoProduto.nome}`);
console.log(`Restante do catálogo (${restanteCatalogo.length} produtos):`, restanteCatalogo.map((p) => p.nome));

// ============================================================
// 6. Módulos ES6
// ============================================================
secao("6. Módulos ES6");
console.log("Produto.js exporta a classe Produto e importa formatarMoeda.js.");
console.log("formatarMoeda.js exporta a função formatarMoeda.");
console.log("index.js importa ambos os módulos com 'import { ... } from ...'.");

// ============================================================
// 7. Operadores (ternário e spread)
// ============================================================
secao("7. Operadores (ternário e spread)");

catalogo.forEach((produto) => console.log(`${produto.nome}: ${produto.statusPromocao()}`));

const novoProduto = new Produto("Smartwatch", 999, "Eletrônicos");
const catalogoAtualizado = [...catalogo, novoProduto];

console.log(`\nCatálogo original (spread não altera o array original): ${catalogo.length} produtos.`);
console.log(`Catálogo atualizado (spread operator): ${catalogoAtualizado.length} produtos.`);
console.log("Novo catálogo:", catalogoAtualizado.map((p) => p.nome));

// Spread também para clonar e atualizar um único produto de forma imutável
const produtoComNovoPreco = { ...produtoLiteral, preco: produtoLiteral.preco * 0.9 };
console.log("Objeto original:", produtoLiteral);
console.log("Clone com novo preço (spread em objeto):", produtoComNovoPreco);

secao("Fim da demonstração ✔");
