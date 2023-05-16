import express from 'express';
import 'dotenv/config.js'
import './config/database.js'

const server = express(); // Crear servidor
const PORT = process.env.PORT || 8080 // establecer PORT
const ready = () => console.log('ready  on '+ PORT);

// middleware
server.use(express.json())                            
server.use(express.urlencoded({ extended: false }))

// Router + server
server.listen(PORT, ready);