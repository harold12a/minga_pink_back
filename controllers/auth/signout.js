import User from '../../models/User.js';

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(req.user._id, { online: false },)

        return res.status(200).json({
         responde: 'id: ' + req.user._id,
          messages: 'User sing out !!'

        })
    } catch (error) {
        return next(error);
    }

}