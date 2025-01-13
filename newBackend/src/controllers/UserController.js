const User = require('../models/User');
const bcrypt = require("bcrypt");
const mail = require('../utils/mail');
exports.registerUser = async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const { username, email, password, celphone } = req.body;
        let send = false;
        const user = new User({username, email, password: password,celphone});
        const sendMail = mail.sendMail;
        const mailOptions = {
            from: 'Stepbrosite.com',
            to: email,
            subject: 'Sending Email using Node.js (EXPRESS)',
            text: `Helloooo ${username}!`,
        };
        await sendMail(mailOptions, (info) => {
            console.log("Message sent! nice nice");
            console.log("MESSAGER ID: ", info.messageId);
            send = true;
        });
        if(send){
            await user.save();
        }
        res.status(200).redirect('http://localhost:5173/check')
    }catch(error){
        res.status(500).redirect('http://localhost:5173/register')
        console.log("ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRROOOOOOOOO");
    }
}