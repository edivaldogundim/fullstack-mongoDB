const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://localhost:/fseletro", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conectado ao db");
    })
    .catch((error) => {
      console.log(`Erro de conexão${error}`);
    });
}


module.exports = connect()