import Chapter from '../../models/Chapter.js'


export default async (req,res,next) => {
    try {
        let data = req.body 
        let one = await Chapter.create(data)

            return res.status(201).json({
                response: one,
                message:'created'
            })

    } catch (error) {
       return next(error)
    }
}