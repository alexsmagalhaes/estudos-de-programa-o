var input = `4 6
1 2 1
1 3 10
1 4 1
2 3 1
2 4 10
3 4 1`;

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var tokens = input.trim().split(/\s+/);
var pos = 0;

function lerNumero() {
  return parseInt(tokens[pos++]);
}

function lerMapa() {
  var cidades = lerNumero();
  var rodovias = lerNumero();
  var conexoes = [];
  for (var i = 0; i < rodovias; i++) {
    conexoes.push([lerNumero(), lerNumero(), lerNumero()]);
  }
  return { cidades, rodovias, conexoes };
}

function criarUnionFind(n) {
  var pai = Array.from({ length: n + 1 }, (_, i) => i);
  var rank = Array(n + 1).fill(0);
  return { pai, rank };
}

function encontrarCidadeLider(uf, cidade) {
  if (uf.pai[cidade] !== cidade) {
    uf.pai[cidade] = encontrarCidadeLider(uf, uf.pai[cidade]);
  }
  return uf.pai[cidade];
}

function unirCidades(uf, cidade1, cidade2) {
  var raiz1 = encontrarCidadeLider(uf, cidade1);
  var raiz2 = encontrarCidadeLider(uf, cidade2);
  if (raiz1 === raiz2) return false;

  if (uf.rank[raiz1] < uf.rank[raiz2]) {
    uf.pai[raiz1] = raiz2;
  } else if (uf.rank[raiz1] > uf.rank[raiz2]) {
    uf.pai[raiz2] = raiz1;
  } else {
    uf.pai[raiz2] = raiz1;
    uf.rank[raiz1]++;
  }
  return true;
}

function calcularMST(cidades, conexoes) {
  conexoes.sort((a, b) => a[2] - b[2]);
  var uf = criarUnionFind(cidades);
  var comprimentoTotal = 0;

  for (var i = 0; i < conexoes.length; i++) {
    var [origem, destino, comprimento] = conexoes[i];
    if (unirCidades(uf, origem, destino)) comprimentoTotal += comprimento;
  }
  return comprimentoTotal;
}

var { cidades, rodovias, conexoes } = lerMapa();
console.log(calcularMST(cidades, conexoes));
