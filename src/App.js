import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Joinn from './Components/Joinn';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import CreateMeeting from './Pages/createMeeting';
import VideoCallPage from './Pages/VideoCallPage';
import ServicePage from './Pages/ServicePage';
import User from './Components/user';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} /> 
        <Route path='/login' element={< LogIn/>} /> 
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/joinn' element={<Joinn/>} /> 
        <Route path='/services'element={<ServicePage/>}/>
        <Route path='/about' element={<AboutPage/>} /> 
        <Route path='/contact' element={<ContactPage/>} /> 
        <Route path="/create-meeting" element={<CreateMeeting />} />
        <Route path="/room/:roomID" element={< VideoCallPage/>} />
        <Route path="/User" element={<User />} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
