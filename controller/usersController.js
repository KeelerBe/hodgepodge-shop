const mongoose = require('mongoose')
require('../models/userSchema')

const User = mongoose.model('users')

module.exports.test = (req, res) => {
  res.send({ success: true })
}

module.exports.createUser = (req, res, next) => {
  const userProps = req.body
  new User(userProps).save()
    .then((user) => res.send(user))
    .catch(next)
}

module.exports.fetchUser = (req, res, next) => {
  const userId = req.params.userId

  User.findById(userId)
    .populate([{ path: 'cartProducts' }, { path: 'inventoryProducts' }])
    .then((user) => res.send(user))
    .catch(next)
}

module.exports.updateUser = (req, res, next) => {
  const userId = req.params.userId
  const userProps = req.body

  User.findByIdAndUpdate(userId, userProps)
    .then((user) => res.send(user))
    .catch(next)
}

module.exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId

  User.findByIdAndDelete(userId)
    .then((user) => res.send(user))
    .catch(next)
}
