const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id_p: {type: String, required: false, unique: true},
    email: {type: String, required: true},
    name: {type: String, required: true},
    pass: {type: String, required: true},
    org: {type: String, required: true},
    rollno: {type: String, required: true},
    picture_prof: {type: String, required: false},
    projects: [],
    skills: [],
    bio: {type: String, required: false},
})

const user = mongoose.model('user', userSchema);

module.exports = {user};