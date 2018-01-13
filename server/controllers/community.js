const BaseController = require('./base')

class CommunityController extends BaseController {
	constructor(app, basePath) {
		super(app);
		app.get(`${basePath}/community`, this.index)
	}

	index(req, res) {
		res.json(['lol', 'hey']);
	}
}

let instance;
module.exports = function(app, basePath) {
	if (!instance) {
		instance = new CommunityController(app, basePath);
	}

	return () => instance;
};