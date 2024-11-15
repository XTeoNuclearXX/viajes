import React, { useState } from "react";
import './LoginPage.css';
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  // Función para manejar el envío del formulario
  const submit = async (event) => {
    event.preventDefault();

    // Obtén los valores de los inputs
    const correo = event.target.elements.correo.value;
    const pass = event.target.elements.password.value;

    try {
      // Realiza la solicitud a la API
      const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users');
      if (!response.ok) {
        throw new Error("Error al obtener los usuarios");
      }

      const users = await response.json();
      console.log(users);

      // Busca al usuario en la respuesta de la API
      const user = users.find((user) => user.email === correo && user.password === pass);

      if (user) {
        // Si el usuario es válido, redirige a la página de landing
        navigate('/landing');
      } else {
        // Si no encuentra al usuario, muestra un error
        setError(true);
      }
    } catch (err) {
      console.error("Error al autenticar:", err);
      setError(true);
    }
  };

  // Función para redirigir al registro
  const handleRegister = (event) => {
    event.preventDefault();
    navigate("/Register");
  };

  return (
    <form onSubmit={submit} className="login-form">
      <h2>Inicio de sesión</h2>
      {error && <p style={{ color: 'red' }}>Las credenciales son incorrectas :(</p>}
      
      <label htmlFor="correo">Correo</label>
      <input type="email" name="correo" id="correo" placeholder="Ingresa tu correo" required />
      
      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" required />
      
      <button type="submit">Iniciar sesión</button>
      <button type="button" onClick={handleRegister}>Registrarse</button>
    </form>
  );
};