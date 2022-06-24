"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.json({
        msg: "getUsuarios",
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getUsuario",
        id,
    });
};
exports.getUsuario = getUsuario;
const createUsuario = (req, res) => {
    const { body } = req;
    console.log("Body", body);
    res.json({
        msg: "createUsuario",
        body,
    });
};
exports.createUsuario = createUsuario;
//# sourceMappingURL=usuarios.js.map