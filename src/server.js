/*//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/cesarlog-frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/cesarlog-frontend/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);*/

//Importa as dependências que acabamos de instalar
const express = require("express");
const path = require("path");

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + "/dist/cesarlog-frontend"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/cesarlog-frontend/index.html"));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);