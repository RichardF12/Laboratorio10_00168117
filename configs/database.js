const mongoose = require('mongoose'); //requerimos la libreria mongoose
const {mongodb} = require('./keys'); //requerimos el archivo de nuestras credenciales
//el metodo connect recibe como parametros la URI de conexion.
mongoose.connect(mongodb.URI,{
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(db=>console.log('Connection success!!'))
.catch(err=>conosle.error(err));

