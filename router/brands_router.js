const {Router} = require('express');
const router = Router();

router.post('/', function(req,res){
    res.send('Hola mundo estoy desde brand POST')
});

router.get('/', function(req,res){
    res.send('Hola mundo estoy desde brand GET')
});

router.put('/', function(req,res){
    res.send('Hola mundo estoy desde brand PUT')
});


module.exports = router;