const category = require('../models/category');
const Category = require('../models/category');

module.exports = {
    create,
    // deleteCard,
    update
}

async function create(req, res){
    console.log(req.body, ' card create')
    try {
        const category = await Category.findById(req.params.id);
        category.cards.push({
            question: req.body.question, 
            answer: req.body.answer 
        });
        await category.save();
        res.status(201).json({
            status: "SUCCESS",
            message: "Add card successful",
            data: category
        });
    } catch(err){
        console.log(err);
        res.json({
            status: "FAILED",
            message: "An error occured while creating flash card"
        });
    }
}

async function update(req, res) {
    try {
        const category = await Category.findOne({"cards._id": req.params.id});
        const card = category.cards.id(req.params.id);
      
        card.question = req.body.question;
        card.answer = req.body.answer;
        category.save();
        res.status(200).json({
            status: "SUCCESS",
            message: "Edit card successful",
            data: category
        });

    } catch(err) {
        console.log(err);
        res.json({
            status: "FAILED",
            message: "An error occured while editing flash card"
        });
    }
}