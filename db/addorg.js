const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
    id_o: String,
    name: String,
    email: String,
    pass: String,
    students: Array,
    projects: Array,
    hackathons_p: Array,
    hackathons_w: Array,
    ranking: Number,
    picture: String,
    description: String,
    wlist_p: Array,
    wlist_u: Array
})

const org = mongoose.model('org', orgSchema);

module.exports = {org}