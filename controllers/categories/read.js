import Category from '../../models/Category.js'

export default async (req,res)=>{
    try {
        let all = await Category.find()
        if(all){
            return res.status(200).json({
                response: all,
                message: 'Category found'
            })
        }else{
            return res.status(404).json({
                response: null,
                message:'Category NOT founds!'
            });
        }     
    } catch (error) {
        return res.status(500).json({
            response: null,
            error: 'error'
        })
    }
}
