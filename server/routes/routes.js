import express from 'express';
import {User} from '../schema/user.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const router = express.Router();
const JWT_SECRET = 'your_jwt_secret'; // Use a strong secret in production

// router.post('/add', async (req, res) => {
//     try {
//         if (await User.findOne({ username: req.body.username })) {
//             return res.status(400).json('This User is already Resigistered');
//         } else {
//             const user = new User();
//                 user.firstName = req.body.firstName,
//                 user.lastName = req.body.lastName,
//                 user.username = req.body.username,
//                 user.password = req.body.password
            
            
//             await user.save(); // Save the user to the database

//             return res.status(201).json({
//                 message: 'Data Successfully Inserted',
//                 user
//             });
//         }
//     } catch (error) {
//         console.error('Error inserting data:', error);
//         return res.status(500).json('Internal Server Error');
//     }
//   });

//   export default router;

// Signup route
router.post('/signup', async (req, res) => {
    try {
      if (await User.findOne({ username: req.body.username })) {
        return res.status(400).json('This User is already Registered');
      } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          password: hashedPassword
        });
  
        await user.save();
  
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  
        res.status(201).json({
          message: 'Data Successfully Inserted',
          user,
          token
        });
      }
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json('Internal Server Error');
    }
  });
  
  // Login route
  router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).json('Invalid username or password');
      }
  
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).json('Invalid username or password');
      }
  
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  
      res.cookie('token', token, { httpOnly: true, secure: true });
      res.json({
        message: 'Login successful',
        token
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json('Internal Server Error');
    }
  });

  export default router;