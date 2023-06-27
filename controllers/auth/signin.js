import User from "../../models/User.js"

export default async(req,res,next)=> {
    try {
        await User.findOneAndUpdate(
            { email:req.body.email },       //objeto de busqueda,
            { online:true }                 //objeto con valores a cambiar
        )
        return res.status(200).json({
            success:true,
            response: {
                user: req.user,
                token: req.token
            },
            messages: ['signed in!']
        })
    } catch (error) {
        next(error)
    }
}