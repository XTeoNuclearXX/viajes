import React from "react";
import './LoginPage.css';

export const Register = () => {
return(
<>
<form className="login-form">
       <h2>Registro</h2>
       <label htmlFor="username">Usuario</label>
       <input type="text" name="username" id="username" placeholder="Ingresa tu usuario" />
       
       <label htmlFor="password">Contraseña</label>
       <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" />
       
       <button type="submit">Registrase</button>
     </form> 
</>
);
};