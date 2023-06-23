import User from '../../models/User.js'

export default async(req,res)=>{
    try {
        let data = req.body 
        let all = await User.create(data)
       
            return res.status(201).json({
                response: all,
                message:'created'
            })
   
    } catch (error) {
        return res.status(500).json({
            response: null,
            success: false,
            message: 'not found!'
        })
    }
}