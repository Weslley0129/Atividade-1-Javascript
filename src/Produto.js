// 6. Módulos ES6: importa de outro módulo e exporta a própria classe
import { formatarMoeda } from "./formatarMoeda.js";

export class Produto {
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  aplicarDesconto(desconto) {
    return this.preco - this.preco * desconto;
  }

  // Operador ternário embutido no método: decide o status com base num limite de preço
  statusPromocao(limite = 200) {
    return this.preco < limite ? "Em promoção" : "Preço normal";
  }

  exibirInfo() {
    return `${this.nome} (${this.categoria}) - ${formatarMoeda(this.preco)}`;
  }
}
