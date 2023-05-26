import User from '../../models/User.js'

export default async(req,res)=>{
    try {
        let data = req.body 
        let all = User.create(data)
        if(all){
            return res.status(201).json({
                response: all,
                message:'created'
            })
        }else{
            return res.status(400).json({
                response: null,
                message:'User Not created '
            })
        }
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: 'not found!'
        })
    }
}