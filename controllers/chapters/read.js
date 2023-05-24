import Chapter from '../../models/Chapter.js';

export default async (req,res)=>{
    try {
        let all = await Chapter.find()
        return res.status(200).json({
            response: all,
            message: 'Chapter found'
        })
    } catch (error) {
        return res.status(500).json({
            response: null,
            error: 'error'
        })
    }
}