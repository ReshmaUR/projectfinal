const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/JobsDb');
const Schema = mongoose.Schema;
var JobSchema = new Schema({
    name: String,
    role: String,
    vacancy: Number,
    location: String,
    organisation: String,
    updation: String,
    lastdate: String,
    description: String,
    link: String
});
var Jobdata = mongoose.model('job',JobSchema);
module.exports = Jobdata; 