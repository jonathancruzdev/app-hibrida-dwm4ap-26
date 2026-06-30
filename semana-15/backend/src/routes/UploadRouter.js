import { Router } from "express";
import { uploadController } from "../controllers/UploadController.js";
import { upload } from '../middleware/uploadMiddleware.js'

const router = Router();

router.post('/upload', uploadController);

export default router