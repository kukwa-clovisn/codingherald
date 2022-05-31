const mongoose = require('mongoose');

/**
 * creating users schema
 */

const userSchema = new mongoose.Schema({
     username: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true
     },
     password: {
          type: String,
          required: true
     },
     token: {
          type: String,
          required: true
     },
     todos: Array
}, {
     collection: 'clients'
})


/**
 * creating a users model
 */

const userModel = mongoose.model('userSchema', userSchema)

/**
 * exporting the user model
 */

module.exports = userModel;