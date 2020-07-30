const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/JobsDb');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        required: 'Email cannot be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Email cannot be empty'
    } 
});
var Userdata = mongoose.model('user',UserSchema);
module.exports = Userdata;