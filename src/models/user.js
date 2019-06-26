const { Schema, model } = require('mongoose')
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 250,
    unique: true
  },
  name: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true
  },
  lastname: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true
  },
  type: {
    type: String,
    default: 'adopter',
    enum: [
      'admin',
      'adopter'
    ]
  },
  password: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 200
  },
  address: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 200
  },
  age: {
    type: Number,
    min: 18
  },
  phone: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 13
  }

})

module.exports = {
  schema: userSchema,
  model: model('users', userSchema)
}
