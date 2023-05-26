import User from '../../models/User.js';

export default async (req,res)=>{
    try {
        let all = await User.find()
        if(all){
            return res.status(200).json({
                response: all,
                message: 'User found'
            })
        }else{
            return res.status(400).json({
                response: all,
                message: 'User NOT found'
            })
        }       
    } catch (error) {
        return res.status(500).json({
            response: null,
            error: 'error'
        })
    }
}