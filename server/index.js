import express from 'express'
import { Connection } from './database/db.js';
import router from './routes/routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
// app.get('/',(req, res)=>{
//     res.send("This is Home page");
// })
Connection();
const PORT = 8000;
app.listen(PORT,()=>{
    console.log("App is Connected to PORT: "+ PORT)
})