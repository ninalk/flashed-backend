const Category = require('../models/category');

module.exports = {
    create,
    // deleteCard,
    // update
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

