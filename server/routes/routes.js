import express from 'express';
import {User} from '../schema/user.js'


const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        if (await User.findOne({ username: req.body.username })) {
            return res.status(400).json('This User is already Resigistered');
        } else {
            const user = new User();
                user.firstName = req.body.firstName,
                user.lastName = req.body.lastName,
                user.username = req.body.username,
                user.password = req.body.password
            
            
            await user.save(); // Save the user to the database

            return res.status(201).json({
                message: 'Data Successfully Inserted',
                user
            });
        }
    } catch (error) {
        console.error('Error inserting data:', error);
        return res.status(500).json('Internal Server Error');
    }
  });

  export default router;