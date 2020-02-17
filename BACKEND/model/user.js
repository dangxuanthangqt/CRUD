var mongoose = require('mongoose');
var mongoose = require('mongoose');
var user = new mongoose.Schema({
    name: String,
    price: Number, 
    status: Boolean
}, { collection: 'user' });
module.exports = mongoose.model('user', user);