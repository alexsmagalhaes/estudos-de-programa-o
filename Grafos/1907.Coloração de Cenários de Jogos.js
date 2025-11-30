var input = require("fs").readFileSync("/dev/stdin", "utf8");

function parseData(rawData) {
  var tokens = rawData.trim().split(/\s+/);
  var h = parseInt(tokens[0]);
  var w = parseInt(tokens[1]);
  var size = h * w;
  var rawGrid = tokens.slice(2).join("");
  var grid = new Uint8Array(size);

  for (var i = 0; i < size; i++) {
    grid[i] = rawGrid.charCodeAt(i) === 46 ? 1 : 0;
  }

  return {
    width: w,
    size: size,
    grid: grid,
  };
}

function initializeDisjointSet(size, grid) {
  var parent = new Int32Array(size);
  for (var i = 0; i < size; i++) {
    parent[i] = grid[i] === 1 ? i : -1;
  }
  return parent;
}

function findRoot(parent, i) {
  var root = i;
  while (parent[root] !== root) {
    root = parent[root];
  }

  var curr = i;
  while (curr !== root) {
    var next = parent[curr];
    parent[curr] = root;
    curr = next;
  }
  return root;
}

function unionSets(parent, i, j) {
  var rootA = findRoot(parent, i);
  var rootB = findRoot(parent, j);
  if (rootA !== rootB) {
    parent[rootB] = rootA;
  }
}

function processConnections(data, parent) {
  var w = data.width;
  var size = data.size;
  var grid = data.grid;

  for (var i = 0; i < size; i++) {
    if (grid[i] === 0) continue;

    if (i % w !== 0) {
      var left = i - 1;
      if (grid[left] === 1) {
        unionSets(parent, i, left);
      }
    }

    if (i >= w) {
      var up = i - w;
      if (grid[up] === 1) {
        unionSets(parent, i, up);
      }
    }
  }
}

function countIndependentRegions(data, parent) {
  var count = 0;
  var size = data.size;
  var grid = data.grid;

  for (var i = 0; i < size; i++) {
    if (grid[i] === 1 && parent[i] === i) {
      count++;
    }
  }
  return count;
}

function execute() {
  if (!input) return;

  var data = parseData(input);
  var parent = initializeDisjointSet(data.size, data.grid);

  processConnections(data, parent);

  var result = countIndependentRegions(data, parent);
  console.log(result);
}

execute();
