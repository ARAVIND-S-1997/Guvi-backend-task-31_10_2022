import { Router } from "express";
import { emailController } from "../controllers/email.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const emailRoutesHandler = Router();

emailRoutesHandler.post('/send', authMiddleware, emailController.sendEmail);

