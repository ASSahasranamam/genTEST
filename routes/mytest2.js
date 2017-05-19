var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
var genetic=require('genetic');
var Task = genetic.Task
  , options = { getRandomSolution : getRandomSolution
              , popSize : 500
              , stopCriteria : stopCriteria
              , fitness : fitness
              , minimize : false
              , mutateProbability : 0.1
              , mutate : mutate
              , crossoverProbability : 0.3
              , crossover : crossover
              }
  , util = require('util')

function getRandomSolution(callback) {
    var solution = { a: Math.random(), b: Math.random(), c: Math.random() }
    callback(solution)
  }

  function stopCriteria() {
    return (this.generation == 1000)
  }

  function fitness(solution, callback) {
    callback(solution.a+solution.b+solution.c)
  }

function crossover(parent1, parent2, callback) {
  var child = {}
  if (Math.random()>0.5) {
    child.a = parent1.a
  }
  else {
    child.a = parent2.a
  }
  if (Math.random()>0.5) {
    child.b = parent1.b
  }
  else {
    child.b = parent2.b
  }
  if (Math.random()>0.5) {
    child.c = parent1.c
  }
  else {
    child.c = parent2.c
  }
  callback(child)
}

function mutate(solution, callback) {
  if (Math.random()<0.3) {
    solution.a = Math.random()
  }
  if (Math.random()<0.3) {
    solution.b = Math.random()
  }
  if (Math.random()<0.3) {
    solution.c = Math.random()
  }
  callback(solution)
}



console.log('=== TEST BEGINS === ')
var t = new Task(options)

t.on('error', function (error) { console.log('ERROR - ', error) })
t.run(function (stats) {
  res.send( stats);
  console.log('results', stats)})


});

module.exports = router;
