import User from '../../models/User.js'

export default async(req,res,next)=>{
    try {
        let data = req.body 
        let all = await User.create(data)
       
            return res.status(201).json({
                response: all,
                message:'created'
            })
    } catch (error) {
        return next(error)
    }
}