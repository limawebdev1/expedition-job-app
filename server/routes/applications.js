const express = require('express');
const router = express.Router();

const authentication = require('../middleware/authentication');
const Applications = require('../controllers/applications');

router.post('/', authentication.requireAuthedJwt, Applications.submitApplication);

module.exports = router;
