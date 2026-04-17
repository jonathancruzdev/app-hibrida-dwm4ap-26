import express from 'express'

const router = express.Router();

import { 
    get, 
    getById,
    updateById,
    save,
    auth
} from '../controllers/userController.js';

router.get('/', get)

router.get('/:id', getById)

router.patch('/:id', updateById);

router.post('/', save)

router.post('/auth', auth)

export default router;