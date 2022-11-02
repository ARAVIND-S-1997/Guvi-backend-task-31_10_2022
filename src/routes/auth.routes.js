import { Router } from "express";
import { authControllers } from "../controllers/auth.controller.js";

export const authRoutesHandler = Router();

authRoutesHandler.post('/signup', authControllers.signUp);

authRoutesHandler.get('/login', authControllers.login);

authRoutesHandler.post('/resetpassword', authControllers.resetPassword);
