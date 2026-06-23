import PointRouter from "./PointRoute.js";
import AuthRouter from "./AuthRoute.js";

const routerAPI = (app) =>{
    app.use('/api/points', PointRouter)
    
}
export default routerAPI;