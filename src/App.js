
import './App.css';
import Join from './Components/Join';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} /> 
        <Route path='/login' element= {<h1>Login</h1>} /> 
        {/* <Route path='/join' element={<Join/>}/> */}
      </Routes>
      </BrowserRouter>
      <Join/>
    </div>
  );
}

export default App;
