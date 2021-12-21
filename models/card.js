const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: String,
    question: String,
    answer: String
}, {
    timestamp: true
});

module.exports = mongoose.model('Card', cardSchema);