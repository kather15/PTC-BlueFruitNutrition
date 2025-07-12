import React, { useState } from "react";
import "./AddProduct.css";

const API_URL = "http://localhost:4000/api/products";

function ProductInsert({ onAdded }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    flavor: "",
    price: "",
    idNutritionalValues: "",
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
      price: "",
      idNutritionalValues: "",
      image: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in form) {
      if (form[key]) formData.append(key, form[key]);
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        onAdded();
        handleReset();
        alert("Producto agregado correctamente");
      } else {
        alert("Error al agregar el producto.");
      }
    } catch (err) {
      console.error("Error al enviar:", err);
    }
  };

  return (
    <div>
      <h2>Añadir un nuevo Producto</h2>
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
            id="imageUploadInsert"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
          <label htmlFor="imageUploadInsert" className="upload-btn">
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
            required
          />
          <textarea
            name="description"
            placeholder="Descripción:"
            value={form.description}
            onChange={handleChange}
            rows="4"
            required
          />
          <div className="row-fields">
            <input
              type="text"
              name="flavor"
              placeholder="Sabor:"
              value={form.flavor}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Precio:"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="idNutritionalValues"
            placeholder="ID Valores Nutricionales (opcional)"
            value={form.idNutritionalValues}
            onChange={handleChange}
          />
          <div className="form-buttons">
            <button
              type="button"
              onClick={handleReset}
              className="clear-btn"
            >
              Limpiar
            </button>
            <button type="submit" className="submit-btn">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductInsert;
