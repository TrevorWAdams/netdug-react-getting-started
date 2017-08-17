import { version } from '../../package.json';
import { Router } from 'express';
import posts from './posts'

export default ({ config, db }) => {
	let api = Router();

	// mount the posts resource
	api.use('/posts', posts({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
