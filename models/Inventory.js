const {Schema,model} = require('mongoose')

const InventorySchema = Schema({
    serial:{
        type:String,
        required: true
    },
    categoria:{
        type:String,
        required: true   
    },
    descripcion:{
        type:String,
        required: true   
    },
    color:{
        type:String,
        required: true   
    },
    foto:{
        type:String,
        required: true   
    },
    fechaCompra:{
        type:Date,
        required: true   
    },
    cantidad:{
        type:Number,
        required: true  
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        required:false
    },
    marca:{
        type: Schema.Types.ObjectId,
        ref:'Marca',
        required:true,
    },
    tipoItem:{
        type: Schema.Types.ObjectId,
        ref:'TipoItem',
        required: true
    },
    estadoItem:{
        type: Schema.Types.ObjectId,
        ref:'EstadoItem',
        required:'true'
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

module.exports = module('Inventario',InventorySchema)