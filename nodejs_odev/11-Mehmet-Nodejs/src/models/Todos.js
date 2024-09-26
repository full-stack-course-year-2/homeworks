const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    isim:{
        type:String,
        required:true
    },
    surname: {
        type: String,
        required: true,
        min:6,
        max:20
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        min:6,
        max:30
    },
    password: {
        type: String,
        required: true,
        min:6,
        max:1000
    },
    isMarried: {
        type: Boolean,
    },
    date:{
        type: Date,
        default: Date.now
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },     
})


const User = mongoose.model('User', todoSchema);

module.exports = User;

//  const userModel = mongoose.model('user', todoSchema);

//  module.export = userModel;

