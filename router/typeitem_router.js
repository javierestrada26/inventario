const {Router} = require('express');
const router = Router();

router.post('/', function(req,res){
    res.send('Hola mundo estoy desde tipoitem POST')
});

router.get('/', function(req,res){
    res.send('Hola mundo estoy desde tipoitem GET')
});

router.put('/', function(req,res){
    res.send('Hola mundo estoy desde tipoitem  PUT')
});


module.exports = router;