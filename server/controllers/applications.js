const Users = require('../models/users');
const Applications = require('../models/applications');

exports.submitApplication = async (req, res, next) => {
	const { userId } = req;
	try {
		const user = await Users.findUser({ id: userId });
		if (!user) {
			return res.status(404).send({ error: 'User not found' });
    }
    await Applications.createApplication({ user_id: userId, ...req.body });
		return res.sendStatus(200);
	} catch (e) {
		return next(e);
	}
};