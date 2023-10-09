const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/Car_crashes", {useNewUrlParser : true});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectado a la Base de Datos"));

module.exports = db

