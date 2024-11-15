import React, { useState } from "react";
import Header from "./header";
import "./MisAventuras.css";

export const MisAventuras = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    ubicacion: '',
    resena: '',
    ranking: '',
    foto: null,
  });

  const [submitted, setSubmitted] = useState(false);

  // Manejador de cambios en los campos de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejador del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      // Enviar los datos a la API
      console.log(JSON.stringify(formData))
      
      const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(formData),
      });
      console.log(response)

      // Verificar si la solicitud fue exitosa
      if (response.ok) {
        setSubmitted(true);  // Mostrar mensaje de éxito
      } else {
        console.error('Error al enviar los datos:', response.status);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <>
      {/* Componente Header */}
      <Header />
      
      {/* Formulario */}
      <div className="form-container">
        {submitted ? (
          <div className="success-message">
            <h2>¡Formulario enviado con éxito!</h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Deja tu Reseña</h2>

            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresa tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <label htmlFor="ubicacion">Ubicación:</label>
            <input
              type="text"
              id="ubicacion"
              name="ubicacion"
              placeholder="Ingresa tu ubicación"
              value={formData.ubicacion}
              onChange={handleChange}
              required
            />

            <label htmlFor="resena">Reseña:</label>
            <textarea
              id="resena"
              name="resena"
              rows="4"
              placeholder="Escribe tu reseña..."
              value={formData.resena}
              onChange={handleChange}
              required
            />

            <label htmlFor="ranking">Ranking (1-5):</label>
            <input
              type="number"
              id="ranking"
              name="ranking"
              min="1"
              max="5"
              value={formData.ranking}
              onChange={handleChange}
              required
            />

            <label htmlFor="foto">Sube una Foto:</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Ingresa url de imagen"
              value={formData.foto}
              onChange={handleChange}
              required
            />
            
            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </>
  );
};