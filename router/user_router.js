const {Router} = require('express');
const router = Router();
const Usuario = require('../models/users')

router.post('/', async function(req,res){

    try {
        console.log(req.body);
        
        const existeUsuario = await Usuario.find({email:req.body.email});
        console.log(existeUsuario);
        if(existeUsuario){
            return res.send('Email ya existe');
        }
        let usuario = new Usuario();
        usuario.name = req.body.name;
        usuario.email = req.body.email;
        usuario.state = req.body.state;
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();
    
        usuario = await usuario.save();
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.send('Error ')
    }

});

router.get('/', function(req,res){
    res.send('Hola mundo estoy creando usuarios route GET')
});

router.put('/:usuarioId', async function(req,res){

    try {
        console.log('objeto recibido',req.body, req.params);
        
        let usuario = await Usuario.findById(req.params.usuarioId);

        if(!usuario){
            return res.send('Email ya existe');
        }
        usuario.name = req.body.name;
        usuario.email = req.body.email;
        usuario.state = req.body.state;
    
        usuario = await usuario.save();
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.send('Error ')
    }
});


module.exports = router;