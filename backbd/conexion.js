const admin = require("firebase-admin");
const keys = require("../keys.json");

admin.initializeApp({
    credential: admin.credential.cert(keys)
});

const bd = admin.firestore();

const usuariosBD = bd.collection("miejemplobd");
const productosBD = bd.collection("producto");

module.exports = {
    usuariosBD,
    productosBD,
};
