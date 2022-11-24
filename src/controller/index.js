const { Router } = require('express');
const router = Router();

router.use('/users', require('./users'));
router.use('/auth', require('./auth'));

module.exports = router;
