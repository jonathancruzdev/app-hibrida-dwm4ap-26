import { Router } from "express";
import { uploadController } from "../controllers/UploadController";
import { upload } from '../middleware/uploadMiddleware'

const router = Router();

router.post('/upload', upload, uploadController);

export default router