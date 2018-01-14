const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({
	name: String
});

module.exports = mongoose.model('Community', CommunitySchema);