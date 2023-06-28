const error_handler = (error,req,res,next) =>{
    console.log(error)
    return res.status(500).json({
        response: null,
        message: 'not created!'
    })
}

export default error_handler