import express from 'express';
import dotenv from 'dotenv';
import  connectDB  from './config/db.js'

connectDB()

import chalk from "chalk";


import userRouter from './routes/userRouter.js';
import weaponsRouter from './routes/weaponsRouter.js';
import personajesRouter from './routes/personajesRouter.js';

dotenv.config();
const PORT = process.env.PORT;


const app = express();
app.use( express.json());

app.use(  express.static('public'));
// Middleware
app.use(  (req, res, next) => {
    console.log('Soy el middleware!');
    next();
})

app.get('/', (request, response) => {
    response.send(``);
})

app.use('/api/users', userRouter);
app.use('/api/weapons', weaponsRouter);
app.use('/api/personajes', personajesRouter);


app.listen( PORT, () => {
    console.log( chalk.green(`Servidor Web en el puerto ${PORT}`) );
})