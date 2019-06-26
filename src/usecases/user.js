const { model: User } = require('../models/user')
const bcrypt = require('../lib/bcrypt')
const jwt = require('jsonwebtoken')

const signUp = async (userData = {}) => {
  const {
    email,
    name,
    lastname,
    age,
    password,
    type,
    address,
    phone
  } = userData
  console.log('El password', password)

  const hash = await bcrypt.hash(password)

  const user = new User({
    email,
    name,
    lastname,
    age,
    password: hash,
    type,
    address,
    phone
  })
  const error = user.validateSync()
  if (error) throw error
  user.save((error, user) => {
    if (error) console.log(error)
    return user
  })
}
const getAll = async () => {
  const allUsers = await User.find().lean()
  const cleanUsers = allUsers.map((user) => {
    const { password, ...cleanUser } = user
    return cleanUser
  })
  return cleanUsers
}
const getById = async (userId) => {
  const user = await User.findById(userId).lean()
  const { password, ...cleanUser } = user
  return cleanUser
}
const deleteById = (userId) => User.findByIdAndDelete(userId)

const updateById = (userId, userData) => User.findByIdAndUpdate(userId, userData)
const login = async (email, password) => {
  const user = await User.findOne({ email }).lean()
  if (!user) throw new Error('Invalid data')
  console.log('Compara: ', typeof (password), typeof user.password)
  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) throw new Error('Invalid data')
  return token = jwt.sign({ id: user._id }, 'ELsecreto', { expiresIn: '1d' })
}
const verifyJwt = token => jwt.verify(token, 'ELsecreto')

module.exports = {
  signUp,
  getAll,
  getById,
  deleteById,
  updateById,
  login,
  verifyJwt
}
