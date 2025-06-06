const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Hello page!</h1>");
    return;
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "Alex",
        age: 23,
      },
    ];

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
    return;
  }

  res.writeHead(404, { "content-type": "text/plain" });
  res.end("Página não encontrada");
});

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
