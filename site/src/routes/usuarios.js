var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar-end", function (req, res) {
    usuarioController.cadastrarEnd(req,res);
})

router.post("/cadastrar-emp", function (req, res) {
    usuarioController.cadastrarEmp(req,res);
})

router.post("/cadastrar-server", function (req, res) {
    usuarioController.cadastrardata(req,res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

// router.post("/cadastrar", function (req, res) {
//     usuarioController.cadastrarEnd(req,res);
//     usuarioController.cadastrarEmp(req,res);
//     usuarioController.cadastrardata(req,res);
// })


module.exports = router;