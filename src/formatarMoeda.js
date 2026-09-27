// Arrow function reaproveitada em toda a aplicação para formatar preços em R$
export const formatarMoeda = (valor) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);
