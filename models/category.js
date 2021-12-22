const mongoose = require('mongoose');


const cardSchema = mongoose.Schema({
    question: String,
    answer: String
}, {
    timestamp: true
});

const categorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: String,
    cards: [cardSchema]
}, {
    timestamp: true
});



module.exports = mongoose.model('Category', categorySchema);