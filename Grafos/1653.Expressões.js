var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var cursor = { index: 0 };

function main() {
  var countStr = getNextLine();
  if (!countStr) return;

  var totalTests = parseInt(countStr, 10);

  for (var i = 0; i < totalTests; i++) {
    var expression = getNextLine();
    if (expression) {
      processTestCase(expression);
    }
  }
}

function getNextLine() {
  while (cursor.index < lines.length) {
    var line = lines[cursor.index++].trim();
    if (line.length > 0) return line;
  }
  return null;
}

function processTestCase(str) {
  var treeRoot = buildExpressionTree(str);
  var depthMap = [];

  mapLevelsRecursively(treeRoot, 0, depthMap);

  var output = generateReversedString(depthMap);
  console.log(output);
}

function buildExpressionTree(postfix) {
  var nodeStack = [];

  for (var i = 0; i < postfix.length; i++) {
    var char = postfix[i];

    if (isOperand(char)) {
      nodeStack.push(createNode(char, null, null));
    } else {
      var rightChild = nodeStack.pop();
      var leftChild = nodeStack.pop();
      nodeStack.push(createNode(char, leftChild, rightChild));
    }
  }

  return nodeStack[0];
}

function createNode(value, left, right) {
  return {
    v: value,
    l: left,
    r: right,
  };
}

function isOperand(char) {
  return char >= "a" && char <= "z";
}

function mapLevelsRecursively(node, level, storage) {
  if (!node) return;

  if (!storage[level]) {
    storage[level] = "";
  }

  storage[level] += node.v;

  mapLevelsRecursively(node.l, level + 1, storage);
  mapLevelsRecursively(node.r, level + 1, storage);
}

function generateReversedString(levels) {
  var flatString = levels.join("");
  return flatString.split("").reverse().join("");
}

main();
