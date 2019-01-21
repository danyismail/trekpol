const Mongoose = require('mongoose')
var ErrorSchema = new Mongoose.Schema({ 
    code: 'string', 
    description: 'string' ,
});

module.exports = ErrorSchema