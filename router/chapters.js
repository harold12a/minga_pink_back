import { Router } from "express"
import read from "../controllers/chapters/read.js"
import create from "../controllers/chapters/create.js"
import next_order from "../middlewares/next_order.js"
import add_cover_photo from "../middlewares/add_cover_photo.js"
import has_permition from "../middlewares/has_permition.js"
import is_active from "../middlewares/is_active.js"
import is_property_of from "../middlewares/is_property_of.js"
import exists_order from "../middlewares/exists_order.js"
import passport from "../middlewares/passport.js"

let chaptersRouter = Router()

chaptersRouter.get('/', read)
chaptersRouter.post('/',
    passport.authenticate('jwt', { session: false }),     //verifico que el usuario haya iniciado sesión y esté autenticado
    exists_order,
    next_order,
    is_active,
    is_property_of,
    has_permition,
    add_cover_photo,
    create)

export default chaptersRouter
