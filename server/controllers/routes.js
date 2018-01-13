const communityRoutes = require('./community');
const API_BASE = '/api'

module.exports = function(app) {
	communityRoutes(app, API_BASE);
};