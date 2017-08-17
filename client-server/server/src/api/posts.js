import resource from 'resource-router-middleware';
import posts from '../models/posts';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'post',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let post = posts.find( post => post.id===id ),
			err = post ? null : 'Not found';
		callback(err, post);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(posts);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = posts.length.toString(36);
		posts.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({ post }, res) {
		res.json(post);
	},

	/** PUT /:id - Update a given entity */
	update({ post, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				post[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ post }, res) {
		console.log(post)
		posts.splice(posts.indexOf(post), 1);
		res.sendStatus(204);
	}
});
