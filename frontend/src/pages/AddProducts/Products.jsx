import React, { useState } from "react"; 
import "./Products.css";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    flavor: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleReset = () => {
    setForm({
      name: "",
      description: "",
      flavor: "",
      content: "",
      image: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto enviado:", form);
    // Aquí va la llamada a la API si se requiere
  };

  return (
    <div className="main-container">
      <h2 className="title">Añadir un nuevo Producto</h2>
      <div className="card-form">
        <div className="form-left">
          <div className="image-preview">
            {form.image ? (
              <img src={URL.createObjectURL(form.image)} alt="preview" />
            ) : (
              <img src="/producticon.png" alt="placeholder" />
            )}
          </div>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
          <label htmlFor="imageUpload" className="upload-btn">
            Subir Imagen
          </label>
        </div>

        <form className="form-right" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre:"
            value={form.name}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Descripción:"
            value={form.description}
            onChange={handleChange}
            rows="4"
          />
          <div className="row-fields">
            <input
              type="text"
              name="flavor"
              placeholder="Sabor:"
              value={form.flavor}
              onChange={handleChange}
            />
            <input
              type="text"
              name="content"
              placeholder="Contenido Neto:"
              value={form.content}
              onChange={handleChange}
            />
          </div>
          <div className="form-buttons">
            <button type="button" onClick={handleReset} className="clear-btn">
              Limpiar Formulario
            </button>
            <button type="submit" className="submit-btn">
              Agregar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
