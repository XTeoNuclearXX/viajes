import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/LoginPage.jsx';
import NavBar from './components/NavBar.jsx';
import { Register } from './components/Register.jsx';

function App() {
  return (
   
      <Routes>
        <Route path="/Login" element={< LoginPage />} />
        <Route path="/Register" element={< Register />} />
      </Routes> 
   
  )
}

export default App
