const mongoose = require('mongoose');

const connectDB = async function (){
    try{
        console.log("Connecting");
        await mongoose.connect("mongodb://localhost:27017/Todo", { useNewUrlParser: true })

    }catch(error){
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB;