import bcrypt from "bcrypt";
import User from "../models/UserModel.js";
import { generateToken } from "../utils/generateToken.js";



export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Nombre, email y contraseña son obligatorios"
        });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({
            message: "El email ya está registrado"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role: role || "user"
    });

    res.status(201).json({
        message: "Usuario registrado correctamente",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
  } catch (error) {
        res.status(500).json({
            message: "Error al registrar usuario"
        });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email y contraseña son obligatorios"
        });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({
            message: "Credenciales inválidas"
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Credenciales inválidas"
        });
    }

    const token = generateToken(user);

    res.json({
        message: "Login correcto",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
  } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Error al iniciar sesión"
        });
  }
};