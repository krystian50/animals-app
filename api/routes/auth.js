const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { users } = require('../db/db')

router.post('/login', function(req, res, next) {
  const user = users.find(({ login, password }) => req.body.login === login && req.body.password === password)

  if (!user) {
    res.status(401).end()
    return
  }

  const token = jwt.sign({
    login: user.login,
    role: user.role,
  }, 'secret', { expiresIn: 60 * 60 });

  res.send({ 
    token
  })
});

module.exports = router;
