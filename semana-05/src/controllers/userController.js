import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { userModel } from "../models/userModel.js";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const get = async (req, res) => {
    try {
        const users = await userModel.find();
        console.log(users);
        res.json({ status: 'ok', data: users});
    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
}

export const getById = async (req, res) => {
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
}

export const updateById = async (req, res) => { 
const { id } = req.params;     
const { name , email } = req.body ;
console.log(id , name , email);
const actualizar = await userModel.updateById( id , { name , email } )
if(!actualizar) return res.status(404).json({ status: 'error', data: []});
res.json(actualizar);
}

export const save = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hash = await bcrypt.hash( password, 10 );
        const usuario = new userModel({ name, email, password: hash})
        const data = await usuario.save();

        res.json({ status: 'ok', data});
    } catch (error) {        
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
}

export const auth = async(req, res) => {
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


}