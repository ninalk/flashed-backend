const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/cards')

/*---------- Public Routes ----------*/
router.post('/categories/:id/cards', cardsCtrl.create)

/*---------- Protected Routes ----------*/
// router.delete('/:id', cardsCtrl.deleteCard);
// router.put('/:id', cardsCtrl.update);


module.exports = router;