const {Schema,model} = require('mongoose')

const UserSchema= Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    state:{
        type:String,
        required: true,
        enum:[
            'Activo',
            'Inactivo'
        ]
    },
    fechaCreacion:{
        type:Date,
        require:true
    },
    fechaActualizacion:{
        type:Date,
        required:true
    }
});
  
module.exports = model('Usuarios',UserSchema);