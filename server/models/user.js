const Mongoose = require('mongoose')
var UserSchema = new Mongoose.Schema({ 
    username: 'string', 
    email: 'string' ,
    password : 'string',
    role : 'boolean'
});

const User = Mongoose.model('User', UserSchema);

module.exports = User