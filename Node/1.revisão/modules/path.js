const path = require("path");

//nome do arquivo
console.log(path.basename(__dirname));

//nome do diretorio atual
console.log(path.dirname(__filename));

//extensao do arquivo
console.log(path.extname(__filename));

//criar objeto path
console.log(path.parse(__filename))

//juntar caminhos
console.log(path.join(__dirname, "arquivo.txt "))