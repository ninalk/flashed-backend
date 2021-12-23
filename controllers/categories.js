const Category = require('../models/category');

module.exports = {
    create,
    index
}

async function index(req, res) {
    try {
        const categories = await Category.find({}).populate('user').exec();
        console.log(categories, ' in index')
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
    try {   
        const newCategory = await Category.create({
            category: req.body.category,
            user: req.body.user
        });
        console.log(newCategory, ' newCategory')
        // We have to populate the user on the category we just created
        // on a document you have to call execPopulate()
        const populatedCategory = await newCategory.populate('user').execPopulate();

        res.status(201).json({
            status: "SUCCESS",
            message: "Create new category successful",
            category: populatedCategory
        })
    } catch (err) {
        console.log(err);
        res.json({
            status: "FAILED",
            message: "An error occured while creating category"
        });
    }
}