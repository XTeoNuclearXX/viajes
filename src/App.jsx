import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/LoginPage.jsx';
import { Register } from './components/Register.jsx';
import { Leadinpage } from './components/Leadingpage.jsx';
import { MisAventuras } from './components/MisAventuras.jsx';
import { OtrasAventuras } from './components/OtrasAventuras.jsx';
import { UsuariosPage } from './components/UsuariosPage.jsx';

function App() {
  return (
    <>
    
      
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Leadinpage />} />
        <Route path="/mis-aventuras" element={<MisAventuras/>} />
        <Route path="/otras-aventuras" element={<OtrasAventuras/>} />
        <Route path="/usuarios" element={<UsuariosPage/>} />


      </Routes>
      
    </>
  );
}

export default App;
