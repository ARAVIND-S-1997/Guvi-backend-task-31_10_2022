import { emailSender } from "../utils/mailSender.js";

export const emailController = {
    sendEmail: async (request, response) => {
        try {
            const emailInfo = {
                toaddress: request.body.toaddress,
                subject: request.body.subject,
                text: request.body.text,
            }
            const emailReq = await emailSender(emailInfo);
            if (emailReq.messageId) {
                response.status(200).json({ message: "Mail has sent successfully" });
            }
        } catch (error) {
            response.status(400).json({ message: "something went wrong try again later" });
        }
    }
}