import express from 'express';
import 'dotenv/config.js'
import './config/database.js'
import indexRouter from './router/index.js';
import cors from 'cors';
import morgan from 'morgan';

const server = express(); // Crear servidor
const PORT = process.env.PORT || 8080 // establecer PORT
const ready = () => console.log('ready  on '+ PORT);

// middleware
server.use(express.json())                          // permite entradas y tambien trabajar con formato json             
server.use(express.urlencoded({ extended: true }))  // permite capturar consultas complejas
server.use(cors())                                  //para permitir orígenes cruzados (front/back)
server.use(morgan('dev'))                           //para registrar peticiones HTTP 

//router
server.use('/api', indexRouter)

// Router + server
server.listen(PORT, ready);