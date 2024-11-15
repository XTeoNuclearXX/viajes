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

  // Manejador para la carga de archivos
  const handleFileChange = (e) => {
    setFormData({ ...formData, foto: e.target.files[0] });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    setSubmitted(true);
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
              type="file"
              id="foto"
              name="foto"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            

            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </>
  );
};