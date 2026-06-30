import multer from "multer";

//  Configuramos multer
const storage = multer.diskStorage({
  destination: ( req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: ( req, file, cb) => {
    const name = Date.now() + `-${ file.originalname}`;
    cb(null, name)
  }
})

// Definimos Filtros para imagenes
const filterFile = (req, file, cb) => {
  if( file.mimetype.startsWith("images/") ){
    cb(null, true);
  } else {
    cb( new Error("Solo se permiten archivos de imagenes"), false);
  }
}

export const upload = multer({ storage, filterFile})