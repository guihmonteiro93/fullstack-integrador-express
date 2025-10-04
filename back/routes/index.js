var express = require('express');
var router = express.Router();

    alunos = [
        {"id": 1, "nome": "Henning", "idade": 40, "sexo": "Masculino", "mat": 12346, "peso":80},
        {"id":2, "nome": "Jailton", "idade": 40, "sexo": "Masculino", "mat": 12346, "peso":80},
        {"id":3, "nome": "Marcos", "idade": 40, "sexo": "Masculino", "mat": 12346, "peso":80}
    ]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(alunos);
});

module.exports = router;
