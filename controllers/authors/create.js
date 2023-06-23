import Author from "../../models/Author.js"
export default async (req,res)=>{
        try {
            let data = req.body 
            let one = await Author.create(data)
            if(one){
                return res.status(201).json({
                    success:true,
                    response: one,
                    message:'created'
                })
            }else{
                return res.status(400).json({
                    success:false,
                    response: null,
                    message:'Author NOT created'

                })
            }
        } catch (error) {
            return res.status(500).json({
                success:false,
                response: null,  
                message: 'not found!'
            })
        }
    }

