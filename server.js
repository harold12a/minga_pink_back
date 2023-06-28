import express from 'express';
import 'dotenv/config.js'
import './config/database.js'
import indexRouter from './router/index.js';
import cors from 'cors';
import morgan from 'morgan';
// time
// import time from './middlewares/time.js';
import not_found_hanlder from './middlewares/not_found_handler.js';
import error_handler from './middlewares/error.handler.js';


const server = express(); // Crear servidor
const PORT = process.env.PORT || 8080 // establecer PORT
const ready = () => console.log('ready  on '+ PORT);

// middleware(solicitudes)
server.use(express.json())                          // permite entradas y tambien trabajar con formato json             
server.use(express.urlencoded({ extended: true }))  // permite capturar consultas complejas
server.use(cors())                                  //para permitir orígenes cruzados (front/back)
server.use(morgan('dev'))                           //para registrar peticiones HTTP 
// time
// server.use(time)


//router
server.use('/api', indexRouter)

// despues del  router
server.use(not_found_hanlder)

// de bajo del router porque depente de las peticiones
server.use(error_handler)

// Router + server
server.listen(PORT, ready);