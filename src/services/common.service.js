import { userModel } from "../models/user.schema.js"

export const findUserService = async (data) => {
    const findUser = await userModel.findOne({ email: data});
    return findUser
}