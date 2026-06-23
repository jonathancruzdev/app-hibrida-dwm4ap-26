import Point from "../models/PointModel.js";

export const getPoints = async (req, res) => {
    try {
        const points = await Point.find().sort({ createdAt: -1 });
        res.json(points);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los puntos" });
    }
};

export const getPointById = async (req, res) => {
    try {
        const point = await Point.findById(req.params.id);

        if (!point) {
            return res.status(404).json({ message: "Punto no encontrado" });
        }

        res.json(point);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar el punto" });
    }
};

export const createPoint = async (req, res) => {
  try {
    const { title, description, category, lat, lng } = req.body;

    if (!title  || lat === undefined || lng === undefined) {
        return res.status(400).json({
            message: "Título, latitud y longitud son obligatorios"
        });
    }

    const newPoint = new Point({
        title,
        description,
        category,
        lat,
        lng
    });

    await newPoint.save();

    res.status(201).json(newPoint);
  } catch (error) {
        res.status(500).json({ message: "Error al crear el punto" });
  }
};

export const updatePoint = async (req, res) => {
    try {
        const point = await Point.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!point) {
            return res.status(404).json({ message: "Punto no encontrado" });
        }

        res.json(point);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el punto" });
    }
};

export const deletePoint = async (req, res) => {
    try {
        const point = await Point.findByIdAndDelete(req.params.id);

        if (!point) {
            return res.status(404).json({ message: "Punto no encontrado" });
        }

        res.json({ message: "Punto eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el punto" });
    }
};