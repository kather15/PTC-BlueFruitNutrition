import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Agrega este import
import "./Products1.css";

const API_URL = "http://localhost:4000/api/products";

function ProductManager() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
    flavor: "",
    price: "",
    idNutritionalValues: "",
    image: null,
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate(); // Hook para navegación

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProducts(data);
  };

  const openEditModal = (product) => {
    setEditForm({
      name: product.name,
      description: product.description,
      flavor: product.flavor,
      price: product.price,
      idNutritionalValues: product.idNutritionalValues || "",
      image: null,
    });
    setEditingId(product._id);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditingId(null);
    setEditForm({
      name: "",
      description: "",
      flavor: "",
      price: "",
      idNutritionalValues: "",
      image: null,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditImageChange = (e) => {
    setEditForm({ ...editForm, image: e.target.files[0] });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in editForm) {
      if (editForm[key] !== null && editForm[key] !== "") {
        formData.append(key, editForm[key]);
      }
    }

    try {
      const res = await fetch(`${API_URL}/${editingId}`, {
        method: "PUT",
        body: formData,
      });

      if (res.ok) {
        await fetchProducts();
        closeEditModal();
        alert("Producto actualizado correctamente");
      } else {
        alert("Error al actualizar el producto.");
      }
    } catch (err) {
      console.error("Error al actualizar:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      await fetchProducts();
    }
  };

  return (
    <div>
      <h2>Editar / Eliminar Productos</h2>
      <button
        className="add-product-btn"
        onClick={() => navigate("/addProduct")}
        style={{ marginBottom: "20px" }}
      >
        Agregar Producto
      </button>
      {products.length > 0 ? (
        <ul className="product-list">
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
                <button onClick={() => openEditModal(p)}>Editar</button>
                <button onClick={() => handleDelete(p._id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos para mostrar.</p>
      )}

      {/* Modal edición */}
      {showEditModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h3>Editar Producto</h3>
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre:"
                value={editForm.name}
                onChange={handleEditChange}
                required
              />
              <textarea
                name="description"
                placeholder="Descripción:"
                value={editForm.description}
                onChange={handleEditChange}
                rows="4"
                required
              />
              <div className="row-fields">
                <input
                  type="text"
                  name="flavor"
                  placeholder="Sabor:"
                  value={editForm.flavor}
                  onChange={handleEditChange}
                  required
                />
                <input
                  type="text"
                  name="price"
                  placeholder="Precio:"
                  value={editForm.price}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <input
                type="text"
                name="idNutritionalValues"
                placeholder="ID Valores Nutricionales (opcional)"
                value={editForm.idNutritionalValues}
                onChange={handleEditChange}
              />
              <div className="image-preview">
                {editForm.image ? (
                  <img
                    src={URL.createObjectURL(editForm.image)}
                    alt="preview"
                  />
                ) : (
                  <img
                    src={
                      products.find((p) => p._id === editingId)?.image ||
                      "/producticon.png"
                    }
                    alt="placeholder"
                  />
                )}
              </div>
              <input
                type="file"
                id="imageUploadEdit"
                accept="image/*"
                onChange={handleEditImageChange}
              />
              <div className="form-buttons" style={{ marginTop: 10 }}>
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="clear-btn"
                >
                  Cancelar
                </button>
                <button type="submit" className="submit-btn">
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductManager;
