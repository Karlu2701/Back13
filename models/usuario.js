const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
    nombre: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true,  unique: true},
    password: { type: String, required: true, trim: true},
    registro: { type: Date, default: Date.now()},
});

//Definir modelo
module.exports = mongoose.model("usuario", UsuarioSchema);