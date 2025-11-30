var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

class DisjointSet {
  constructor(size) {
    this.parent = new Int32Array(size);
    this.initialize();
  }

  initialize() {
    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i;
    }
  }

  find(i) {
    let root = i;
    while (root !== this.parent[root]) {
      root = this.parent[root];
    }
    let curr = i;
    while (curr !== root) {
      let next = this.parent[curr];
      this.parent[curr] = root;
      curr = next;
    }
    return root;
  }

  union(i, j) {
    const rootI = this.find(i);
    const rootJ = this.find(j);
    if (rootI !== rootJ) {
      this.parent[rootI] = rootJ;
      return true;
    }
    return false;
  }
}

class MazeSolver {
  constructor() {
    this.lineIdx = 0;
  }

  solve() {
    while (this.lineIdx < lines.length) {
      let line = lines[this.lineIdx++];
      if (typeof line === "undefined") break;

      line = line.trim();
      if (line === "") continue;

      const N = parseInt(line, 10);
      if (isNaN(N)) break;

      const gridStrings = [];
      const linesToRead = 2 * N - 1;

      for (let i = 0; i < linesToRead; i++) {
        if (this.lineIdx < lines.length) {
          let nextLine = lines[this.lineIdx++];
          if (nextLine !== undefined) {
            gridStrings.push(nextLine.trim());
          }
        }
      }

      console.log(this.calculate(N, gridStrings));
    }
  }

  calculate(N, gridStrings) {
    const vRows = 2 * N + 1;
    const vCols = 2 * N + 2;
    const totalNodes = vRows * vCols;

    const dsu = new DisjointSet(totalNodes);
    const getNode = (r, c) => r * vCols + c;

    for (let c = 0; c < vCols - 1; c++) {
      dsu.union(getNode(0, c), getNode(0, c + 1));
      dsu.union(getNode(vRows - 1, c), getNode(vRows - 1, c + 1));
    }
    for (let r = 0; r < vRows - 1; r++) {
      dsu.union(getNode(r, 0), getNode(r + 1, 0));
      dsu.union(getNode(r, vCols - 1), getNode(r + 1, vCols - 1));
    }
    dsu.union(getNode(0, 0), getNode(vRows - 1, 0));

    const edges0 = [];
    const edges1 = [];

    for (let i = 0; i < gridStrings.length; i++) {
      const rowStr = gridStrings[i];
      if (!rowStr) continue;

      const lineIdx = i + 1;

      for (let j = 0; j < rowStr.length; j++) {
        const char = rowStr[j];
        const colIdx = j + 1;

        let rCenter, cCenter;
        if (lineIdx % 2 !== 0) {
          rCenter = lineIdx;
          cCenter = 2 * colIdx - 1;
        } else {
          rCenter = lineIdx;
          cCenter = 2 * colIdx;
        }

        const u_H = getNode(rCenter, cCenter - 1);
        const v_H = getNode(rCenter, cCenter + 1);
        const u_V = getNode(rCenter - 1, cCenter);
        const v_V = getNode(rCenter + 1, cCenter);

        if (char === "H") {
          edges0.push({ u: u_H, v: v_H });
          edges1.push({ u: u_V, v: v_V });
        } else {
          edges0.push({ u: u_V, v: v_V });
          edges1.push({ u: u_H, v: v_H });
        }
      }
    }

    let swaps = 0;
    for (const edge of edges0) {
      dsu.union(edge.u, edge.v);
    }
    for (const edge of edges1) {
      if (dsu.union(edge.u, edge.v)) {
        swaps++;
      }
    }

    return swaps;
  }
}

const solver = new MazeSolver();
solver.solve();
