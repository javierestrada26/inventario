const mongoose = require('mongoose');

const getConnection = async ()=>{
    try {
        const url = 'mongodb+srv://admin:admin@cluster0.2gqycvr.mongodb.net/?retryWrites=true&w=majority'
        await mongoose.connect(url);
        console.log('conexion exitosa');
    } catch (error) {
        console.log(error); 
    }
}

module.exports={
    getConnection
}

