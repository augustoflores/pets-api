const { Schema, model } = require('mongoose')
const petSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true
  },
  ageInMonths: {
    type: Number,
    min: 1,
    required: true
  },
  size: {
    type: String,
    enum: [
      'small',
      'medium',
      'large'
    ],
    required: true
  },
  species: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true,
    pattern: /^[a-zA-Z]{2,50}$/
  },
  owner: {
    type: String,
    min: 1,
    required: true
  },
  description: {
    type: String,
    required: false,
    maxLength: 300
  },
  photo: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 300

  },
  isAdopted: {
    type: Boolean,
    default: false
  },
  userId: {
    type: String,
    required: true
  },
  adopterUserId: {
    type: String,
    required: false
  }

})

module.exports = {
  schema: petSchema,
  model: model('Pets', petSchema)
}
