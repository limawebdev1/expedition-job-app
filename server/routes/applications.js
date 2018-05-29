const express = require('express');
const router = express.Router();

const authentication = require('../middleware/authentication');
const Applications = require('../controllers/applications');

router.get('/', authentication.requireAuthedJwt, Applications.getApplication);
router.post('/', authentication.requireAuthedJwt, Applications.submitApplication);

module.exports = router;
