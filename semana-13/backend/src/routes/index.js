import PointRouter from "./PointRoute.js";
import AuthRouter from "./AuthRoute.js";

const routerAPI = (app) => {
    app.use('/api/points', PointRouter);
    app.use('/api/auth', AuthRouter);
    
}
export default routerAPI;