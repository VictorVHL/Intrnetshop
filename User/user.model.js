const mongoose = require('mongoose');

const Userschema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
     require : true
 },
    email : {
        type: String,
        require: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    pasword : {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('User', Userschema);