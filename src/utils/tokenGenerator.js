import jwt from "jsonwebtoken"

export const token = (value) => {
    const genToken = jwt.sign(value, process.env.SECRET_KEY);
    return genToken
}