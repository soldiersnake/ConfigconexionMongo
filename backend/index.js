import Express  from "express";
import dotenv from 'dotenv';
import conectarDB from "./config/db.js";

const app = Express();
dotenv.config();

conectarDB();

app.use('/', (req, res) => {
    res.send('Hola Mundo');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto 4000 ${PORT}`);
});
