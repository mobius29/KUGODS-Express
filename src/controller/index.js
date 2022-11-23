const { Router } = require('express');
const router = Router();

const users = require('./users');
const auth = require('./auth');
router.use('/users', users);
router.use('/auth', auth);

module.exports = router;
