const formatter = Intl.NumberFormat('pt-BR');
const formatterMoney = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

// Função para formatar moeda para padrão brasileiro.
function formatMoney(value){
  return formatterMoney.format(value);
}

//formatar numero
function formatNumber(value){
  return formatter.format(value)
}

export { formatMoney }