const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/categories');

/*---------- Public Routes ----------*/
router.post('/new', categoriesCtrl.create);
router.get('/', categoriesCtrl.index);


module.exports = router;