import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const weapons = await weaponsModel.find();
        res.json({ status: 'ok', data: weapons});
    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})


router.post('/', async (req, res) => {
    try {
        const { name, color, image, type, description } = req.body;
        const weapons = new weaponsModel({ name, color, image, type, description})
        const data = await weapons.save();

        res.json({ status: 'ok', data});
    } catch (error) {        
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }
})

export default router