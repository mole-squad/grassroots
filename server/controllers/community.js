const BaseController = require('./base')
const Community = require('../models/community');

class CommunityController extends BaseController {
	constructor(app, basePath) {
		super(app);

		app.get(`${basePath}/community`, this.index)
		app.post(`${basePath}/community`, this.create)
	}

	index(req, res) {
		Community.find().limit(25).then((data) => res.json({ items: data }))
	}

	create(req, res) {
		Community.create({ name: 'Occupy Billyburg'}, (err, instance) => {
			res.status(201).end();
		});
	}
}

let instance;
module.exports = function(app, basePath) {
	if (!instance) {
		instance = new CommunityController(app, basePath);
	}

	return () => instance;
};