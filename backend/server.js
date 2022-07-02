import express from 'express';
const app = express()
import dbconnect from './config/dbConnection.js';
import 'dotenv/config';

dbconnect()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = process.env.PORT || 8000

app.listen(port, (req,res)=>{
    console.log("8000 port run")
})