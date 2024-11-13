import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/LoginPage.jsx';
import { Register } from './components/Register.jsx';
import { Leadinpage } from './components/Leadingpage.jsx';

function App() {
  return (
    <>
    
      
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Leadinpage />} />
      </Routes>
    </>
  );
}

export default App;
