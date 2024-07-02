import express from 'express'
import { Connection } from './database/db.js';
const app = express();
app.get('/',(req, res)=>{
    res.send("This is Home page");
})
Connection();
const PORT = 8000;
app.listen(PORT,()=>{
    console.log("App is Connected to PORT: "+ PORT)
})