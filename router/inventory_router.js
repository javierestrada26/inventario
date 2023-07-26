const {Router} = require('express');
const router = Router();

router.post('/', function(req,res){
    res.send('Hola mundo estoy desde inventory POST')
});

router.get('/', function(req,res){
    res.send('Hola mundo estoy desde inventory GET')
});

router.put('/', function(req,res){
    res.send('Hola mundo estoy desde inventory  PUT')
});


module.exports = router;