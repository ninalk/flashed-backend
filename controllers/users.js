const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    signup,
    login
};


async function signup(req, res) {
    let {username, email, password} = req.body;
    username = username.trim();
    email = email.trim();
    password = password.trim();

    if (username == "" || email == "" || password == "") {
        res.json({
            status: "FAILED",
            message: " Empty input field!"
        });
    } else if (!/^[a-zA-Z]*$/.test(username)) {
        res.json({
            status: "FAILED",
            message: "Invalid username entered"
        });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        })
    } else if (password.length < 8) {
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        })
    } else {
        await User.find({email}).then(result => {
            if (result.length) {
                // a user already exists
                res.json({
                    status: "FAILED",
                    message: "User with provided email already exists"
                })
            } else {
                // try to create the new user

                // password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        username,
                        email,
                        password: hashedPassword
                    })
                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "Signup successful",
                            data: result,
                        })
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An error occured while saving user account"
                        })
                    })
                })
            }
        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occured while checking for existing user"
            })
        })
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