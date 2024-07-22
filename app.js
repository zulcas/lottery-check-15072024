


// Importar el paquete de terceros que acabamos de instalar. Fijaos que como se encuentra en la carpeta node_modules NO hace falta especificar ninguna ruta (al igual que pasa con los built-in modules)
const express = require('express');
const logger = require('morgan');




//Cargar JSON base de datos de lottery.json
const lottery = require('./data/lottery.json');

// Es generarme un objeto para gestionar el enrutamiento y otros aspectos de la aplicación
const app = express();

// Añadimos el middleware de morgan para loguear todas las peticiones que haga un cliente
app.use(logger('dev'));

// nos gustaría que también gestionaras los datos de tipo JSON (entre ellos los POST que nos lleguen)
app.use(express.urlencoded({ extended: true }));  // Middleware para parsear datos de formularios
//Hacer publica la carpeta public
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/api/check-date', (req, res)=>{
    //1. Informar endpoint tipo get de una fecha en concreto (usamos query string): /api/check-date?date=2020-09-25. Capturar/extrar informacion necesaria
    const {date} = req.query;
    //2. Buscar base de datos lottery.json
    console.log(date);
    const date_found = lottery.find(n => n.draw_date.includes(date));
    //3. Construir respuesta JSON y enviarla
    if(date_found){
    
        const response = {
            message: "Draw found", 
            winningNumbers: `${date_found.winning_numbers} ${date_found.supplemental_numbers} ${date_found.super_ball}`
        };
        res.json(response);
    }else{
        res.send({
            message: "Draw not found for the given date",
        })
    }


})



// Levantar el servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000.");
});

