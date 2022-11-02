import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = (request, response, next) => {
    try {
        const { token } = request.headers;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        if (verifyToken) {
            next()
        }
    }
    catch (error) {
        response.status(400).json({ message: "Unauthorized user" })
    }
}