const { Router } = require('express');
const ctrl = require('./ctrl');

const router = Router();

router.get('/result', ctrl.findByTag);
router.post('/', ctrl.register);
router.put('/:id', ctrl.updateUser);
router.delete('/:age', ctrl.deleteByAge);

module.exports = router;
