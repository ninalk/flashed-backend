const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/cards')

/*---------- Public Routes ----------*/
router.post('/categories/:id/cards', cardsCtrl.create)

/*---------- Protected Routes ----------*/
router.put('/cards/:id', cardsCtrl.update);
// router.delete('/:id', cardsCtrl.deleteCard);


module.exports = router;