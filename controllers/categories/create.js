import Category from '../../models/Category.js'

export default async(req,res)=>{
    try {
        let data = req.body 
        let one = Category.create(data)
        if(one){
            return res.status(201).json({
                response: one,
                message:'created'
            })
        }else{
            return res.status(400).json({
                response: null,
                message:'not found'
            })
        }
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: 'not found!'
        })
    }
}
