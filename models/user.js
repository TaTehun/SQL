const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION,
 { useNewUrlParser: true }, () => 
    console.log('connected to DB')
);

const AddressSchema = new mongoose.Schema({
    building: String,
    street: String
  });

  const GradesSchema = new mongoose.Schema({
    date: Date,
    grade: String,
    score: Number
  });   

const Restaurant = new mongoose.Schema({
    name: String,
    restaurant_id: Number,
    grades: [GradesSchema],
    cuisine: String,
    address: AddressSchema
})

const User = mongoose.model('User', Restaurant);

// console.log( User.findById({_id:'5eb3d668b31de5d588f4293f'}))   

module.exports = User;