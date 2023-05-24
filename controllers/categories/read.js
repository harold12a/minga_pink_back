import Category from '../../models/Category.js'

export default async (req,res)=>{
    try {
        let all = await Category.find()
        return res.status(200).json({
            response: all,
            message: 'Category found'
        })
    } catch (error) {
        return res.status(500).json({
            response: null,
            error: 'error'
        })
    }
}