// 6. Módulos ES6: classe exportada para ser importada no index.js
export class Produto {
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  aplicarDesconto(desconto) {
    return this.preco - this.preco * desconto;
  }

  exibirInfo() {
    return `${this.nome} - R$${this.preco.toFixed(2)}`;
  }
}
