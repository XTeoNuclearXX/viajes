import React, { useState } from "react";
import './LoginPage.css';

export const Register = () => {
  // Definir el estado para los campos del formulario
  const [formData, setFormData] = useState({
    username: '',
    correo: '',
    password: ''
  });

  const [message, setMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Registro exitoso');
        setFormData({ username: '', correo: '', password: '' }); // Limpiar el formulario
      } else {
        setMessage('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Hubo un problema al conectarse con la API');
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Registro</h2>
        {message && <p>{message}</p>}
        
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Ingresa tu usuario"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          name="correo"
          id="correo"
          placeholder="Ingresa tu correo"
          value={formData.correo}
          onChange={handleChange}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Ingresa tu contraseña"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}