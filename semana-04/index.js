import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "./models/User.js";
import chalk from "chalk";

dotenv.config();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;

const userModel = new User();

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

app.get('/api/users', async (req, res) => {
    try {
        const users = await userModel.find();
        console.log(users);
        res.json({ status: 'ok', data: users});
    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})


app.get('/api/users/:id', async (req, res) => {
    try {
     
        const id = req.params.id
        const user = await userModel.findById(id);
        if( user){
            res.json({ status: 'ok', data: user });

        } else {
            res.status(404).json({ status: 'Not Found', data: user });

        }
    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})

app.patch('/api/users/:id', async (req, res) => { 
const { id } = req.params;     
const { name , email } = req.body ;
console.log(id , name , email);
const actualizar = await userModel.updateById( id , { name , email } )
if(!actualizar) return res.status(404).json({ status: 'error', data: []});
res.json(actualizar);
});

app.post('/api/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hash = await bcrypt.hash( password, 10 );
        const id = await userModel.save({ name, email, password:hash });
        res.json({ status: 'ok', data: id});
    } catch (error) {        
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})

app.post('/api/users/auth', async(req, res) => {
    const { email, password } = req.body;
    // Buscamos el email
    const user = await userModel.findByEmail(email);
    if( !user){
        return res.status(404).json({ status: 'error', msg: 'Email Invalido'});
    }
    // Comparamos la contraseña
    const passOk = await bcrypt.compare(password, user.password);
    if( !passOk){
        return res.status(404).json({ status: 'error', msg: 'Contraseña Invalida'});
    }

    const data = { _id: user.id, name: user.name };
    const token = jwt.sign( data, SECRET_KEY, { expiresIn: '1h'} );

    res.json({ status: 'ok', data: token});


})

app.listen( PORT, () => {
    console.log( chalk.green(`Servidor Web en el puerto ${PORT}`) );
})