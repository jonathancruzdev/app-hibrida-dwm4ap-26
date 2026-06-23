import Point from "../models/PointModel.js";

export const getPoints = async (req, res) => {
    try {
        const points = await Point.find()
                                    .populate("createdBy", "name email")
                                    .sort({ createdAt: -1 });
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
    const { title, lat, lng } = req.body;


    const { _id} = req.user;

    console.log({ _id})

    if (!title  || lat === undefined || lng === undefined) {
        return res.status(400).json({
            message: "Título, latitud y longitud son obligatorios"
        });
    }

    const newPoint = new Point({
        title,
        lat,
        lng,
        createdBy: _id
    });

    await newPoint.save();

    res.status(201).json(newPoint);
  } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el punto" });
  }
};

export const updatePoint = async (req, res) => {
    try {
        const point = await Point.findById(req.params.id );
        if (!point) {
            return res.status(404).json({ message: "Punto no encontrado" });
        }
        // Solo el Creador o el admin puede editar
        const isOwner = point.createdBy.toString() === req.user._id.toString();
        const idAdmin = req.user.role == "admin";

        if( !isOwner && !idAdmin ){
            return res.status(403).json({ 
                message: "No tenés permisos para modificar" 
            });
        }

        const updatePoint = await Point.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        )



        res.json(updatePoint);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el punto" });
    }
};

export const deletePoint = async (req, res) => {
    try {

        const point = await Point.findById(req.params.id );

        if (!point) {
            return res.status(404).json({ message: "Punto no encontrado" });
        }

        // Solo el Creador o el admin puede Eliminiar
        if( req.user.role !== "admin"){
            return res.status(403).json({ 
                message: "No tenés permisos para eliminar" 
            });
        }

        await Point.findByIdAndDelete( req.params.id);

        res.json({ message: "Punto eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el punto" });
    }
};