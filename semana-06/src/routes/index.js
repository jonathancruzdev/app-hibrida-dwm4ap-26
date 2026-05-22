// Importa todas las Rutas, exporta el RouterAPI
import userRouter from './userRouter.js';
import personajesRouter from './personajesRouter.js';
import weaponsRouter from './weaponsRouter.js';

import  validarToken  from '../middlewares/auth.js';

const routerAPI = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/personajes', personajesRouter);
    app.use('/api/weapons', validarToken, weaponsRouter);
}

export default routerAPI;