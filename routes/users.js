var express = require('express');
var router = express.Router();
var Genetics = require("./genetics.js");
var method = Pgen.prototype;


function Pgen() {
    var people;
    var fitness ;
    var serial;
    var reproduced=0;
    for (var i = 0; i < 8; i++) {
        people[i] = new Genetics();
        people[i].synth();
        console.log( 'results',people[i].genes.pop());
    }

}

/* GET users listing. */
router.get('/', function(req, res, next) {
  Pgen();
  res.send("respond!");

});

module.exports = router;
