const express = require('express');
const router = express.Router();
const uuid = require('uuid')
const { animals } = require('../db/db')
const authMiddleware = require('../middlewares/auth')

router.get('/', authMiddleware(), function(req, res) {
  res.json(animals);
});

router.post('/', authMiddleware({ roles: ['admin'] }), function(req, res) {
  const animal = {
    id: uuid.v1(),
    name: req.body.name
  }

  animals.push(animal)
  res.json(animal);
});

router.delete('/:id', authMiddleware({ roles: ['admin'] }), function(req, res) {
  const index = animals.findIndex(({ id }) => req.params.id === id)

  animals.splice(index, 1)

  res.status(204).end();
});

module.exports = router;
