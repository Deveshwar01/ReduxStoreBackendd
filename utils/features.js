import jwt from "jsonwebtoken";
export const sendCookie = (user, res, message, statusCode) => {

    const token = jwt.sign({ _id: user._id },"Deveshwar");


    res
        .status(statusCode)
        .cookie("token", token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
        })
        .json({
            success: true,
            message,
        })
}