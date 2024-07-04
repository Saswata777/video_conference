import express from 'express'
import { Connection } from './database/db.js';
import router from './routes/routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { User } from './schema/user.js';


const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', router);
// API endpoint to get data
app.get('/getUsers', async (req, res) => {
    try {
      const data = await User.find();
      res.json(data);
    } catch (err) {
      res.status(400).send('Error: ' + err);
    }
  });

// API endpoint to delete data
app.delete('/getUsers/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('Data deleted.');
    } catch (err) {
      res.status(400).send('Error: ' + err);
    }
  });
Connection();
const PORT = 8000;
app.listen(PORT,()=>{
    console.log("App is Connected to PORT: "+ PORT)
})