
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model('User',UserSchema)