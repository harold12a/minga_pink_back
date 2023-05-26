import { Router } from "express";
import read from '../controllers/auths/read.js';
import create from '../controllers/auths/create.js';

let authsRouter = Router();

authsRouter.get('/',read)
authsRouter.post('/',create) 

export default authsRouter
