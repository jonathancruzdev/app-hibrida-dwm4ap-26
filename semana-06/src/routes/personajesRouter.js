import express from 'express';
import { personajesModel } from '../models/personajesModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const personajes = await personajesModel.find();
        res.json({ status: 'ok', data: personajes});
    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})


router.post('/', async (req, res) => {
    try {
        const { name, habilidad, image, rango, description } = req.body;
        const personajes = new personajesModel({ name, habilidad, image, rango, description})
        const data = await personajes.save();

        res.json({ status: 'ok', data});
    } catch (error) {        
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})

export default router