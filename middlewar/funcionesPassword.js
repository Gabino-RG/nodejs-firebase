const { log } = require("console");
const crypto = require("crypto");

function encriptarPassword(password) {
    const salt = crypto.randomBytes(32).toString("hex");
    const hash = crypto.scryptSync(password, salt, 100000, 64, "sha512").toString("hex");
    return { salt, hash };
}

function validarPassword(password, salt, hash) {
    const hashEvaluar = crypto.scryptSync(password, salt, 100000, 64, "sha512").toString("hex");
    return hashEvaluar == hash;
}

function usuarioActualizado() {
    // Lógica futura para actualizar un usuario
}

function adminAutorizado() {
    // Lógica futura para verificar permisos de administrador
}

module.exports = {
    encriptarPassword,
    validarPassword,
    usuarioActualizado,
    adminAutorizado,
};
