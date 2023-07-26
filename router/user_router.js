const {Router} = require('express');
const router = Router();
const Usuario = require('../models/users')

router.post('/', async function(req,res){

    try {
        console.log(req.body);
        console.log(req.body);
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

router.put('/', function(req,res){
    res.send('Hola mundo estoy creando usuarios route PUT')
});


module.exports = router;