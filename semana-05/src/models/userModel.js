import mongoose from 'mongoose';
const collection = 'users';

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

export const userModel = mongoose.model(collection, schema)