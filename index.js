const express = require('express');
const {getConnection} = require('./db/db-connect-mongo')
const app = express();
const port = 3000

getConnection();

app.use(express.json());

app.use('/usuario',require('./router/user_router'))
app.use('/estadoitem',require('./router/statesitem_router'))
app.use('/marca',require('./router/brands_router'))
app.use('/tipoitem',require('./router/typeitem_router'))
app.use('/inventario',require('./router/inventory_router'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });