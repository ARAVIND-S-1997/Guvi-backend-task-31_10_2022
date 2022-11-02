import { userModel } from "../models/user.schema.js"

export const authServices = {
    createUser: async (data) => {
        const userData = new userModel({
            name: data.name,
            email: data.email,
            password: data.hashedPassword
        });
        const createUser = await userData.save()
        return createUser
    },
    updatePassword: async (data) => {
        const updatePassword = await userModel.updateOne({ email: data.email }, { $set: { password: data.hashedPassword } });
        return updatePassword;
    }

}