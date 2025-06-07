const mongoose = require("mongoose");

const db = async () => {
  await mongoose.connect("", (error) => {
    if (error) {
      return console.log(error);
    }

    return console.log("conectado com sucesso");
  });
};

module.exports = db;
