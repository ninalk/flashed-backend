const User = require('../models/user');

module.exports = {
    signup,
    login
};

async function signup(req, res) {
    console.log(req.body);
    const user = new User(req.body);
    try {
        await user.save();
    } catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({email: req.body.email});
        console.log(user, ' this user in login')
        if (!user) return res.status(401).json({err: 'bad credentials'});

    } catch(err) {
        return res.status(401).json(err);
    }
}