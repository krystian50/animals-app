const jwt = require('jsonwebtoken');


module.exports = ({ roles } = {}) => (req, res, next) => {
  const token = req.headers['authorization']

  try {
    const { role } = jwt.verify(token, 'secret')

    if (!roles || roles.includes(role)) {
      next()
      return
    }

    res.status(401).end()
  } catch (error) {
    res.status(401).end()
  }
}