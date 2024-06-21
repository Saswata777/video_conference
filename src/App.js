import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import Joinn from './Components/Joinn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} /> 
        <Route path='/login' element={< SignIn/>} /> 
        <Route path='/joinn' element={<Joinn/>} /> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
