var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

class NodoEstrutural {
  constructor(conteudo) {
    this.conteudo = conteudo;
    this.viaEsquerda = null;
    this.viaDireita = null;
  }
}

class MapeadorHierarquico {
  constructor() {
    this.pontoInicial = null;
  }

  registrarValor(num) {
    if (this.pontoInicial === null) {
      this.pontoInicial = new NodoEstrutural(num);
    } else {
      this._inserirRecursivo(this.pontoInicial, num);
    }
  }

  _inserirRecursivo(noAtual, num) {
    if (num < noAtual.conteudo) {
      if (noAtual.viaEsquerda === null) {
        noAtual.viaEsquerda = new NodoEstrutural(num);
      } else {
        this._inserirRecursivo(noAtual.viaEsquerda, num);
      }
    } else {
      if (noAtual.viaDireita === null) {
        noAtual.viaDireita = new NodoEstrutural(num);
      } else {
        this._inserirRecursivo(noAtual.viaDireita, num);
      }
    }
  }

  gerarRelatorioEmNiveis() {
    if (!this.pontoInicial) return "";

    const sequenciaSaida = [];
    const filaProcessamento = [this.pontoInicial];
    let cursorLeitura = 0;

    while (cursorLeitura < filaProcessamento.length) {
      const noEmAnalise = filaProcessamento[cursorLeitura];
      cursorLeitura++;

      sequenciaSaida.push(noEmAnalise.conteudo);

      if (noEmAnalise.viaEsquerda) {
        filaProcessamento.push(noEmAnalise.viaEsquerda);
      }

      if (noEmAnalise.viaDireita) {
        filaProcessamento.push(noEmAnalise.viaDireita);
      }
    }

    return sequenciaSaida.join(" ");
  }
}

var buffer = input.trim().split(/\s+/);
var ponteiroBuffer = 0;

var lerProximoInteiro = function () {
  if (ponteiroBuffer >= buffer.length) return null;
  return parseInt(buffer[ponteiroBuffer++]);
};

var numCasosTeste = lerProximoInteiro();

for (var caso = 1; caso <= numCasosTeste; caso++) {
  var qtdElementos = lerProximoInteiro();
  var mapa = new MapeadorHierarquico();

  for (var k = 0; k < qtdElementos; k++) {
    mapa.registrarValor(lerProximoInteiro());
  }

  console.log("Case " + caso + ":");
  console.log(mapa.gerarRelatorioEmNiveis());
  console.log("");
}
