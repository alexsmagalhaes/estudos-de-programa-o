var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(/\s+/);

class GestaoTreno {
  constructor(qtd) {
    this.pai = new Int32Array(qtd);
    for (let i = 0; i < qtd; i++) this.pai[i] = i;
  }

  buscar(i) {
    if (this.pai[i] === i) return i;
    this.pai[i] = this.buscar(this.pai[i]);
    return this.pai[i];
  }

  unir(i, j) {
    let raizA = this.buscar(i);
    let raizB = this.buscar(j);
    if (raizA !== raizB) {
      this.pai[raizA] = raizB;
      return true;
    }
    return false;
  }
}

let pos = 0;

while (pos < lines.length) {
  let m = parseInt(lines[pos++]);
  let n = parseInt(lines[pos++]);

  if (!m && !n) break;

  let rotas = [];
  for (let i = 0; i < n; i++) {
    let x = parseInt(lines[pos++]);
    let y = parseInt(lines[pos++]);
    let z = parseInt(lines[pos++]);
    rotas.push({ x, y, z });
  }

  rotas.sort((a, b) => a.z - b.z);

  let sistema = new GestaoTreno(m);
  let custo = 0;

  for (let rota of rotas) {
    if (sistema.unir(rota.x, rota.y)) {
      custo += rota.z;
    }
  }

  console.log(custo);
}
