const Category = require('../models/category');

module.exports = {
    create,
    index
}

async function index(req, res) {
    try {
        const categories = await Category.find({}).populate('user').exec();
        res.status(200).json({
            status: "SUCCESS",
            message: "Found categories",
            data: categories,
        });
    } catch (err) {
        console.log(err)
        res.json({
            status: "FAILED",
            message: "An error occured while finding categories"
        });
    }
}

async function create(req, res) {
    console.log(req.body)
    try {   
        const category = await Category.create({
            category: req.body.category,
            user: req.user
        });

        // const populatedCategory = await category.populate('user').execPopulate();

        res.status(201).json({
            status: "SUCCESS",
            message: "Create new category successful",
            category: category
        })
    } catch (err) {
        console.log(err);
        res.json({
            status: "FAILED",
            message: "An error occured while creating category"
        });
    }
}