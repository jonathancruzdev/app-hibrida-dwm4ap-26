export const uploadController = ( req, res) => {
    try {
        if( !req.file ){
         return res.status(400).json({ message: "No pudimos subir el Archivo" });

        }

        res.json({ message: "Archivo subido Correctamente" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al subir el archvio" });

    }
}

