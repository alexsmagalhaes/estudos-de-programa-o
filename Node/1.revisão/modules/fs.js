const fs = require("fs");
const path = require("path");

//criar pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) return console.log("Error:", error);

  console.log("Pasta criada com sucesso");
});

//criar aquivo
fs.writeFile(
  path.join(__dirname, "/teste", "arquivo.txt"),
  "conteudo",
  (error) => {
    if (error) return console.log("Error:", error);

    console.log("Arquivo criada com sucesso");

    //adiciona a um arquivo
    fs.appendFile(
      path.join(__dirname, "/teste", "arquivo.txt"),
      "Novo conteudo",
      (error) => {
        if (error) return console.log("Error:", error);

        console.log("Arquivo atualizado com sucesso");
      }
    );

    fs.readFile(
      path.join(__dirname, "/teste", "arquivo.txt"),
      "utf-8",
      (error, data) => {
        if (error) return console.log("Error:", error);

        console.log(data);
      }
    );
  }
);
