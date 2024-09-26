const diasDaSemana = [
    "domingo", "segunda-feira", "terça-feira",
    "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
];

diasDaSemana.splice(2,1);
console.log(diasDaSemana)

diasDaSemana.splice(1,3);
console.log(diasDaSemana)

/* MANIPULAÇÃO */
const produtos = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
  ];
  
function imprimirProduto (produto, index) {
    console.log( index + ' - ' + produto.nome );
}

produtos.forEach(imprimirProduto);

const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'Chevrolet', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },

];

/* O PARAMETRO CARRO É PASSADO AUTOMATICAMENTE PELA FUNÇÃO DO ARRAY */

/* FILTER */
function retornarCarroFiat(carro) {
    return (carro.marca == 'Fiat');
}

const carrosFiat = carros.filter( retornarCarroFiat );

console.log(carrosFiat);

/* MAP */
function retornaCarro(carro) {
    return carro.marca + ' ' + carro.modelo + ' ' + carro.anoFabricacao;
}

const novosCarros = carros.map(retornaCarro);
console.log(novosCarros);

/* REDUCER */
const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
  ];
  
function somarValor (total, itemCarrinho) {
  const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;

  return total + valorTotal;
}

const valorAPagar = itensCarrinho.reduce(somarValor, 0);

console.log(valorAPagar);

/* SORT */
let tabela = [
    {equipe: 'Time Azul', pontos: 25 },
    {equipe: 'Time Verde', pontos: 47 },
    {equipe: 'Time Amarelo', pontos: 39 },
    {equipe: 'Time Vermelho', pontos: 16 },
];

function ordenaMaisPontos(a, b){
    return b.pontos - a.pontos;
}

tabela.sort(ordenaMaisPontos);

tabela.forEach( (dado, posicao) => {
    console.log(`${posicao+1} | ${dado.equipe} - ${dado.pontos} pts`)
} )