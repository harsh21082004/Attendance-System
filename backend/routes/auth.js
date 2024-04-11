const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            console.log(user, 'User already exists');
            return res.status(400).json({ msg: 'User already exists' });
        }

        console.log(name, email, password);

        user = new User({
            name,
            email,
            password
        });

        await user.save();
        res.send('User saved');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
})

module.exports = router;