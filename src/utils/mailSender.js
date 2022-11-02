import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const emailSender = async (data) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SERVER_EMAIL,
                pass: process.env.SERVER_EMAIL_KEY,
            },
        });

        const mailContents = {
            from: process.env.SERVER_EMAIL,
            to: data.toaddress,
            subject: data.subject,
            html: `
            <h3>Hi,</h3>
            <p>${data.text}</p>
            `,
        }

        return transporter.sendMail(mailContents)

    } catch (err) {
        console.log("Error in node mailer", err)
    }

}