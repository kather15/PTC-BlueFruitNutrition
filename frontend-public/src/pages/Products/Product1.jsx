import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product1.css';

const Products1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch productos desde tu API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:4000/api/products', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Error al cargar los productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleBuyProduct = (product) => {
    alert(`Comprando: ${product.name} - $${product.price}`);
  };

  if (loading) {
    return (
      <div className="products-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-page">
        <div className="error-container">
          <h2>❌ Error</h2>
          <p>{error}</p>
          <button 
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="page-title">Nuestros Productos</h1>
        
        {products.length === 0 ? (
          <div className="no-products">
            <p>No hay productos disponibles</p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product._id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={product.image || '/placeholder-product.png'} 
                    alt={product.name}
                    className="product-image"
                    onError={(e) => {
                      e.target.src = '/placeholder-product.png';
                    }}
                  />
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  
                  {product.flavor && (
                    <p className="product-flavor">Sabor: {product.flavor}</p>
                  )}
                  
                  <div className="product-price">
                    ${product.price}
                  </div>
                  
                  {/* Información nutricional si existe */}
                  {product.idNutritionalValues && (
                    <div className="nutrition-preview">
                      <small>
                        🥄 Proteína: {product.idNutritionalValues.protein}g
                      </small>
                    </div>
                  )}
                </div>
                
                <div className="product-buttons">
                  <button 
                    className="review-button"
                    onClick={() => handleViewProduct(product._id)}
                  >
                    Ver Producto
                  </button>
                  
                  <button 
                    className="btn-buy"
                    onClick={() => handleBuyProduct(product)}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products1;