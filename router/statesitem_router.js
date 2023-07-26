const {Router} = require('express');
const router = Router();

router.post('/', function(req,res){
    res.send('Hola mundo estoy en estado item POST')
});

router.get('/', function(req,res){
    res.send('Hola mundo estoy en estado item  GET')
});

router.put('/', function(req,res){
    res.send('Hola mundo estoy en estado item  PUT')
});


module.exports = router;