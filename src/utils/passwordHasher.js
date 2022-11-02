import bcrypt from "bcrypt";

export const genPassword = async (password) => {
    const noOfRounds = 10;
    const salt = await bcrypt.genSalt(noOfRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}