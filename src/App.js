import './App.css';
import LogInForm from './Components/LogInForm';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} /> 
        <Route path='/login' element={< LogInForm/>} /> 
        
        <Route path='/signin' element={<SignUp/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
