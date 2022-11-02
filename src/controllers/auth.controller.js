import bcrypt from "bcrypt";
import { authServices } from "../services/auth.service.js";
import { findUserService } from "../services/common.service.js";
import { token } from "../utils/tokenGenerator.js";
import {randomPassword} from "../utils/randomPasword.js"
import { genPassword } from "../utils/passwordHasher.js";
import { emailSender } from "../utils/mailSender.js";

export const authControllers = {
    signUp: async (request, response) => {
        try {
            const user = await findUserService(request.body.email);
            if (user !== null) {
                response.status(403).json({ message: "User already exist" })
            } else {
                const hashedPassword = await genPassword(request.body.password);
                const FinalData = {
                    name: request.body.name,
                    email: request.body.email,
                    hashedPassword: hashedPassword
                }
                await authServices.createUser(FinalData);
                response.status(200).json({ message: "Signed up successfully" })
            }
        } catch (err) {
            console.log("err in signup function", err)
        }
    },
    login: async (request, response) => {
        try {
            const user = await findUserService(request.body.email);
            if (user !== null) {
                const { _id, password } = user;
                const checkPassword = await bcrypt.compare(request.body.password, password);
                if (checkPassword) {
                    const authToken = token({ _id });
                    response.status(200).json({ data: authToken, message: "Log in successfull" },)
                } else {
                    response.status(400).json({ message: "Enter the valid credentials" })
                }
            } else {
                response.status(200).json({ message: "User dosen't exist please signup" })
            }
        } catch (err) {
            console.log("err in login function", err)
        }
    },
    resetPassword: async (request, response) => {
        try {
            const email = request.body.email;
            const user = await findUserService(email);
            if (user !== null) {
                const tempPassword = randomPassword();
                const hashedPassword = await genPassword(tempPassword);
                const updatePassword = await authServices.updatePassword({ hashedPassword, email });
                if (updatePassword.modifiedCount === 1) {
                    const sendEmail = await emailSender({
                        toaddress: email,
                        subject: 'New password',
                        text: `Your new password is: ${tempPassword}. Use this password to login.`,
                    });
                    if (sendEmail.messageId) {
                        response.status(200).json({ message: "New password has send to your registerd email" })
                    }
                }
            }
            else {
                response.status(200).json({ message: "User dosen't exist please signup" })
            }
        } catch (err) {
            console.log("err in login function", err)
        }
    }
}
