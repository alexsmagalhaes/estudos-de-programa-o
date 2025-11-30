var fs = require("fs");

function solve() {
  var input = fs.readFileSync("/dev/stdin", "utf8");
  var data = input.trim().split(/\s+/);
  var cursor = 0;

  function getNextNumber() {
    return parseInt(data[cursor++], 10);
  }

  if (cursor >= data.length) return;

  var numRooms = getNextNumber();
  var numCorridors = getNextNumber();
  var startRoom = getNextNumber();

  var corridors = [];

  for (var i = 0; i < numCorridors; i++) {
    corridors.push({
      from: getNextNumber(),
      to: getNextNumber(),
      cost: getNextNumber(),
    });
  }

  corridors.sort((a, b) => a.cost - b.cost);

  var parent = new Int32Array(numRooms + 1);
  for (var i = 1; i <= numRooms; i++) {
    parent[i] = i;
  }

  function findGroup(id) {
    if (parent[id] === id) {
      return id;
    }
    parent[id] = findGroup(parent[id]);
    return parent[id];
  }

  function joinGroups(idA, idB) {
    var groupA = findGroup(idA);
    var groupB = findGroup(idB);

    if (groupA !== groupB) {
      parent[groupA] = groupB;
      return true;
    }
    return false;
  }

  var totalDistance = 0;

  for (var i = 0; i < corridors.length; i++) {
    var road = corridors[i];

    if (joinGroups(road.from, road.to)) {
      totalDistance += road.cost;
    }
  }

  console.log(totalDistance * 2);
}

solve();
