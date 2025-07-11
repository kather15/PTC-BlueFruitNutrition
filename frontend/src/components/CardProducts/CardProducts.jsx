import React from "react";

function CartItem({ product }) {
  return (
    <div
      className="card mb-4"
      style={{
        border: "none",
        borderRadius: "15px", // Bordes redondeados
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Sombra sutil y moderna
        overflow: "hidden", // Asegura que los bordes redondeados se vean bien
      }}
    >
      <div className="row g-0 align-items-center">

        {/* Imagen del producto */}
        <div className="col-md-3 d-flex justify-content-center align-items-center p-3">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{
              width: "100%", // Se adapta al contenedordadas
              height: "200px", // Tamaño fijo
              objectFit: "cover", // Mantiene la proporción
              borderRadius: "10px", // Bordes redondeados para la imagen
            }}
          />
        </div>

        {/* Info del producto */}
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title fw-bold text-uppercase text-dark">{product.title}</h5>
            <p className="card-text mb-2">
              <span className="fw-semibold">Collection:</span> {product.collection}
            </p>
            <p className="card-text mb-2">
              <span className="fw-semibold">Size:</span> {product.size}
            </p>
            <p className="card-text mb-2">
              <span className="fw-semibold">Color:</span> {product.color}
            </p>
            <p className="card-text">
              <span className="fw-semibold">Quantity:</span> {product.quantity}
            </p>
          </div>
        </div>

        {/* Precio y botones */}
        <div className="col-md-3 text-end pe-4">
          <h4 className="text-danger fw-bold mb-3">${product.price.toFixed(2)}</h4>

          {/* Botones de cantidad */}
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-outline-secondary btn-sm">
              <span>−</span>
            </button>
            <span className="fw-semibold">{product.quantity}</span>
            <button className="btn btn-outline-secondary btn-sm">
              <span>+</span>
            </button>
          </div>

          {/* Botón de eliminar sin librerías de iconos */}
          <button className="btn btn-danger mt-3" style={{ borderRadius: "50%", padding: "10px" }}>
            <span style={{ fontSize: "18px", color: "#fff" }}>✖</span> {/* Usando un "X" para el icono de eliminar */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
