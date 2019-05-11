var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: {type:String, default: '', required:true},
    age: {type:Number, default: 10},
    dept: {type:String}
});

var User = mongoose.model("User", userSchema);

module.exports = User;
