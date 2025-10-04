var express = require('express');
var router = express.Router();


cols = ["Id","Nome", "Sexo", "Idade", "Matrícula", "Peso"]

// BANDO DE DADOS -----------------------------------
nome = 'Clara'

url = "https://sturdy-chainsaw-v9499vw6gvg266jx-3000.app.github.dev/"
dadosCols = ""
fetch(url)
.then((res)=>{return res.json()})
.then((alunos)=>{
  console.log(alunos)
  dadosCols = alunos
})

// -------------------------------------

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dados:{nome, cols, dadosCols}});
});

module.exports = router;
