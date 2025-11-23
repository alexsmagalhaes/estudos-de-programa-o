var fs = require("fs");

class GestorDeRede {
  constructor(totalRoteadores) {
    this.conexoes = new Int32Array(totalRoteadores + 1);
    for (let i = 0; i <= totalRoteadores; i++) {
      this.conexoes[i] = i;
    }
  }

  buscarControladorPrincipal(roteador) {
    if (this.conexoes[roteador] === roteador) {
      return roteador;
    }
    const lider = this.buscarControladorPrincipal(this.conexoes[roteador]);
    this.conexoes[roteador] = lider;
    return lider;
  }

  estabelecerRota(roteadorA, roteadorB) {
    const raizA = this.buscarControladorPrincipal(roteadorA);
    const raizB = this.buscarControladorPrincipal(roteadorB);

    if (raizA !== raizB) {
      this.conexoes[raizA] = raizB;
      return true;
    }
    return false;
  }
}

function executarOtimizacao() {
  const entrada = fs.readFileSync("/dev/stdin", "utf8");
  const tokens = entrada.trim().split(/\s+/);
  let cursor = 0;

  const lerNumero = () => parseInt(tokens[cursor++]);

  if (tokens.length < 2) return;

  const qtdRoteadores = lerNumero();
  const qtdCabosDisponiveis = lerNumero();

  const listaDeOrcamentos = [];

  for (let i = 0; i < qtdCabosDisponiveis; i++) {
    listaDeOrcamentos.push({
      origem: lerNumero(),
      destino: lerNumero(),
      custo: lerNumero(),
    });
  }

  listaDeOrcamentos.sort((a, b) => a.custo - b.custo);

  const infraestrutura = new GestorDeRede(qtdRoteadores);

  let custoFinal = 0;
  let conexoesFeitas = 0;

  for (let cabo of listaDeOrcamentos) {
    const sucesso = infraestrutura.estabelecerRota(cabo.origem, cabo.destino);

    if (sucesso) {
      custoFinal += cabo.custo;
      conexoesFeitas++;
    }

    if (conexoesFeitas === qtdRoteadores - 1) break;
  }
  console.log(custoFinal);
}

executarOtimizacao();
