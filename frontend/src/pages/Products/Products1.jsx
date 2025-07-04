import React, { useState, useEffect } from "react";
import "./Products1.css";

const API_URL = "http://localhost:4000/api/products"; // Cambia si usás otra base URL

function ProductManager() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    flavor: "",
    price: "",
    idNutritionalValues: "",
    image: null,
  });

  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProducts(data);
  };

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
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in form) {
      if (form[key]) formData.append(key, form[key]);
    }

    try {
      const res = await fetch(
        editingId ? `${API_URL}/${editingId}` : API_URL,
        {
          method: editingId ? "PUT" : "POST",
          body: formData,
        }
      );

      if (res.ok) {
        await fetchProducts();
        handleReset();
      } else {
        alert("Error al guardar el producto.");
      }
    } catch (err) {
      console.error("Error al enviar:", err);
    }
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      flavor: product.flavor,
      price: product.price,
      idNutritionalValues: product.idNutritionalValues || "",
      image: null,
    });
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      await fetchProducts();
    }
  };

  return (
    <div className="main-container">
      <h2 className="title">
        {editingId ? "Editar Producto" : "Añadir un nuevo Producto"}
      </h2>

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
              name="price"
              placeholder="Precio:"
              value={form.price}
              onChange={handleChange}
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
            <button type="button" onClick={handleReset} className="clear-btn">
              Limpiar
            </button>
            <button type="submit" className="submit-btn">
              {editingId ? "Actualizar" : "Agregar"}
            </button>
          </div>
        </form>
      </div>

      {/* Lista */}
      {products.length > 0 && (
        <div className="product-list">
          <h3>Productos</h3>
          <ul>
            {products.map((p) => (
              <li key={p._id} className="product-item">
                <img
                  src={p.image || "/producticon.png"}
                  alt="producto"
                  className="thumb"
                />
                <div>
                  <strong>{p.name}</strong> - {p.flavor} - ${p.price}
                  <p>{p.description}</p>
                </div>
                <div className="actions">
                  <button onClick={() => handleEdit(p)}>Editar</button>
                  <button onClick={() => handleDelete(p._id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductManager;
