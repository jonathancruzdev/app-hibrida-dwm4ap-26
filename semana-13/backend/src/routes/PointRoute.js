import { Router } from "express";

import {
    getPoints,
    getPointById,
    createPoint,
    updatePoint,
    deletePoint
} from "../controllers/PointController.js";

const router = Router();

router.get("/", getPoints);
router.get("/:id", getPointById);
router.post("/", createPoint);
router.put("/:id", updatePoint);
router.delete("/:id", deletePoint);

export default router;