const { Router } = require('express');
const ctrl = require('./ctrl');

const router = Router();

router.get('/', ctrl.getAllUser);
router.get('/:id', ctrl.findByID);
router.get('/results', ctrl.includeNick);
router.put('/:id', ctrl.updateByID);
router.delete('/:id', ctrl.deleteByID);

module.exports = router;
