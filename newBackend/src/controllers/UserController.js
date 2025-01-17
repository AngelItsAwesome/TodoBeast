const User = require('../models/User');
const bcrypt = require("bcrypt");
const mail = require('../utils/mail');
const session = require('express-session');

exports.registerUser = async (req, res) => {
    const errors = [];
    try{
        const salt = await bcrypt.genSalt(10);
        const { username, email, password, celphone } = req.body;
        const user = new User({username, email, password: password,celphone});
        const sendMail = mail.sendMail;
        let send = false
        const mailOptions = {
            from: 'Stepbrosite.com',
            to: email,
            subject: 'Sending Email using Node.js (EXPRESS)',
            text: `Helloooo ${username}!`,
        };
        await user.save();
        await sendMail(mailOptions, (info) => {
            console.log("Message sent! nice nice");
            console.log("MESSAGER ID: ", info.messageId);
            send = true;
        });
        res.status(200).redirect('http://localhost:5173/check')
    }catch(error){
        if(error.name === 'ValidationError'){
            for(let field in error.errors){
                console.log(error.errors[field].message);
                const err = error.errors[field].message;
                errors.push(err);
            }
        }
        res.status(400).send(errors)
    }
}