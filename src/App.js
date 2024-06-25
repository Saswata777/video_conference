import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LogInForm from './Components/LogInForm';
import SignUp from './Pages/SignUp';
import Joinn from './Components/Joinn';
import AboutPage from './Pages/AboutPage';
import CreateMeeting from './Pages/createMeeting';
import VideoCallPage from './Pages/VideoCallPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} /> 
        <Route path='/login' element={< LogInForm/>} /> 
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/joinn' element={<Joinn/>} /> 
        <Route path='/about' element={<AboutPage/>} /> 
        <Route path="/create-meeting" element={<CreateMeeting />} />
        <Route path="/room/:roomID" element={< VideoCallPage/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
