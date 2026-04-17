import mongoose from 'mongoose';
const collection = 'weapons';

const schema = new mongoose.Schema({
    name: String,
    color: String,
    image: String,
    type: String,
    description: String
})

export const weaponsModel = mongoose.model(collection, schema)