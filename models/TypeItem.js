const {Schema,model} = require('mongoose')

const TypeItemSchema = Schema({
    name:{
        type:String,
        required:true
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
})

module.exports = model('TipoItem',TypeItemSchema)