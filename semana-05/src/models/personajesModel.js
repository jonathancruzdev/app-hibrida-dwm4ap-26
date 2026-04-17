import mongoose from 'mongoose';
const collection = 'personajes';

const schema = new mongoose.Schema({
    name: String,
    habilidad: String,
    image: String,
    rango: String,
    description: String
})

export const personajesModel = mongoose.model(collection, schema)