const mongoose = require('mongoose');

const { Schema } = mongoose;


const studentSchema = new Schema({
    name: String,
    roll_no: Number,
    class: Number,
    section: String,
});


const Strudent = mongoose.model('Student', studentSchema);
module.exports = Strudent;