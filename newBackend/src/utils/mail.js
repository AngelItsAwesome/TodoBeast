const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "vashthestampede123456789@gmail.com",
        pass: "glju sulo phvh jwyp"
    }
});


exports.sendMail = async (mailDetails, callback) => {
    try{
        const info = await transport.sendMail(mailDetails)
        callback(info);
    }catch(error){
        console.error(error)
    }
}