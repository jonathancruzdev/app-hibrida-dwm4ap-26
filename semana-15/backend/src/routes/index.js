import PointRouter from "./PointRoute.js";
import AuthRouter from "./AuthRoute.js";
import UploadRouter from "./UploadRouter.js";

import { protect} from "../middleware/authMiddleware.js"


const routerAPI = (app) => {
    app.use('/api/points',protect, PointRouter);
    app.use('/api/auth', AuthRouter);
    //app.use('/api/upload', UploadRouter);
    
}
export default routerAPI;