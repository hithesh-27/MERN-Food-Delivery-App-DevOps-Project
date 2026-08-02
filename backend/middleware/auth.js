import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    if (!token){
        return res.json({success:false,message:"Not Authorized Login Again"})
    }
    try{
        const token_decode = jwt.verify(token, process.env.JWT_SECRET || "dev_jwt_secret_food_delivery");
        if (!req.body) {
            req.body = {};
        }
        req.body.userId = token_decode.id;
        next();
    } catch(error){
        console.log("auth error", error);
        res.json({success:false,message:"Not Authorized. Please login again."})


    }

}
export default authMiddleware;