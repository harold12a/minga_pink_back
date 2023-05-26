import Manga from '../../models/Manga.js'

export default async(req,res)=>{
    try {
        let data = req.body 
        let one = Manga.create(data)
        if(one){
            return res.status(201).json({
                response: one,
                message:'created'
            })
        }else{
            return res.status(400).json({
                response: null,

                message:'Mangas NOT created'


            })
        }
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: 'not found!'
        })
    }
}