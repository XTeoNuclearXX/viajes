import React from "react";
import './LoginPage.css';
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    navigate("/Register");
  };
   return (
     <form className="login-form">
       <h2>Inicio de sesión</h2>
       <label htmlFor="username">Usuario</label>
       <input type="text" name="username" id="username" placeholder="Ingresa tu usuario" />
       
       <label htmlFor="password">Contraseña</label>
       <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" />
       
       <button type="submit">Iniciar sesión</button>
       <button type="button" onClick={handleRegister}>Registrarse</button>
     </form>
   );
 };
