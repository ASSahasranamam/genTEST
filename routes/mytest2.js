var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
var genetic=require('genetic');
var Nt = require('ntseq');
var biomass = require('biomass');
var finalPop = 200;
var Task = genetic.Task;
var initSeq=
var target = (new Nt.Seq()).read('gcggactgtaagaactcgccctccagtgggaacaaatactgtcgatttcggtggtctaaacacatcctcgacagatagccacttacagcgttcttgcta');

for (a=new Array(finalPop),i=0;i<200;++i) a[i]=(new Nt.Seq()).read((biomass.dna({length: 99})));

for (var i =0; i<200;i++){
  console.log(a[i].sequence());

    if (Math.random()<0.1) {
      var Astring=  a[i].sequence();
      var temp = Astring.split("");
      var i = Math.floor(Math.random() * 100);
      temp[i]= biomass.rna({length:1});
      Astring = temp.join('');
      a[i].read(Astring);
        console.log(i + " " + a[i].sequence());
    }
}




  res.send( a.pop());
});

module.exports = router;
