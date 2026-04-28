import dotenv from 'dotenv';

import { personajesModel } from "../models/personajesModel";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const savePesonaje = async (req, res) => {
    try {
        const { name, habilidad, image, rango, description } = req.body;
        const personaje = new personajesModel({ name, habilidad, image, rango, description});
        const data = await personaje.save();
        res.json({ status: 'ok', data});
    } catch (error) {        
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
}
