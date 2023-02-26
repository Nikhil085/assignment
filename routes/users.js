const  mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/facelook');

var userSchema = mongoose.Schema({
    username:'String',
    email:'String',
    password:'String'
    
})

module.exports = mongoose.model('user', userSchema);