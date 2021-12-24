const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/cards')

router.post('/categories/:id/cards', cardsCtrl.create)
// router.delete('/cards/:id', cardsCtrl.deleteCard)

module.exports = router;