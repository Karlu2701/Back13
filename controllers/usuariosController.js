const usuario = require("../models/usuario")

export.crearUsuario = async (req, res) => {
    console.log(req.body);
    res.json({ msg: "desde controller post"})
};

