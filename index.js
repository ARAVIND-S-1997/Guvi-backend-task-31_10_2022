import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mongooseConnection } from "./src/utils/mongoConnection.js";
import { authRoutesHandler } from "./src/routes/auth.routes.js";
import { emailRoutesHandler } from "./src/routes/email.routes.js";
dotenv.config();

const app = express();
export const App = async () => {
    try {
        await mongooseConnection();
        initializeMiddleware();
        app.use("/auth", authRoutesHandler);
        app.use("/email", emailRoutesHandler);
        listen();
    } catch (err) {
        console.log('err in app connection', err)
    }
}
const initializeMiddleware = () => {
    app.use(express.json());
    app.use(cors());
}
const listen = () => {
    app.listen(process.env.PORT, () => console.log(`App is connected on port:${process.env.PORT}`));
}
App();