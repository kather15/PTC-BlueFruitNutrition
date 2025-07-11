import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Product2.css';

const Product2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "María González",
      rating: 5,
      comment: "¡Excelente producto! El sabor es increíble y se mezcla muy bien. La recomiendo 100%.",
      date: "15 Nov 2024"
    },
    {
      id: 2,
      user: "Carlos López",
      rating: 4,
      comment: "Muy buena calidad, aunque me gustaría que tuviera más variedad de sabores. El precio está bien.",
      date: "10 Nov 2024"
    },
    {
      id: 3,
      user: "Ana Martínez",
      rating: 5,
      comment: "Perfecta para mis entrenamientos. Se disuelve completamente y no deja sabor residual desagradable.",
      date: "8 Nov 2024"
    },
    {
      id: 4,
      user: "Roberto Silva",
      rating: 3,
      comment: "Está bien, pero esperaba un poco más de cremosidad. El envío fue rápido.",
      date: "5 Nov 2024"
    }
  ]);
  const [newReview, setNewReview] = useState({
    user: '',
    rating: 5,
    comment: ''
  });

  // Fetch producto individual desde tu API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/products/${id}`, {
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
        setProduct(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={i < Math.floor(rating) ? 'star-filled' : 'star-empty'}
      >
        ★
      </span>
    ));
  };

  const renderInteractiveStars = (rating, onRatingChange) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`star-interactive ${i < rating ? 'star-filled' : 'star-empty'}`}
        onClick={() => onRatingChange(i + 1)}
      >
        ★
      </span>
    ));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.user.trim() && newReview.comment.trim()) {
      const reviewToAdd = {
        id: reviews.length + 1,
        user: newReview.user,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toLocaleDateString('es-ES', { 
          day: 'numeric', 
          month: 'short', 
          year: 'numeric' 
        })
      };
      setReviews([reviewToAdd, ...reviews]);
      setNewReview({ user: '', rating: 5, comment: '' });
      setShowReviewForm(false);
      alert('¡Reseña agregada con éxito!');
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  if (loading) {
    return (
      <div className="product-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-page">
        <div className="error-container">
          <h2>❌ Error</h2>
          <p>{error || 'Producto no encontrado'}</p>
          <button 
            className="retry-btn"
            onClick={() => navigate('/products')}
          >
            Volver a Productos
          </button>
        </div>
      </div>
    );
  }

  // Crear imágenes múltiples si solo hay una
  const images = product.image ? [product.image, product.image, product.image] : [
    'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop'
  ];

  return (
    <div className="product-page">
      <div className="container">
        {/* Botón de volver */}
        <button className="back-button" onClick={() => navigate('/products')}>
          ← Volver a Productos
        </button>

        {/* Sección de imagen del producto */}
        <div className="image-box">
          <img src={images[currentImageIndex]} alt={product.name} />
          <div className="image-gradient"></div>
          {images.length > 1 && (
            <>
              <button 
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)} 
                className="nav-button left"
              >
                ←
              </button>
              <button 
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)} 
                className="nav-button right"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* Miniaturas */}
        {images.length > 1 && (
          <div className="thumbnail-container">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`thumbnail-button ${index === currentImageIndex ? 'active' : ''}`}
              >
                <img src={img} alt="" />
              </button>
            ))}
          </div>
        )}

        {/* Información del producto */}
        <h1 className="product-title">{product.name}</h1>
        <div className="rating">
          {renderStars(4.5)}
          <span>({reviews.length} reseñas)</span>
          <span className="stock-status">En Stock</span>
        </div>
        <p className="product-description">{product.description}</p>

        {/* Precio */}
        <div className="price-box">
          <div className="price">${product.price}</div>
          <div className="shipping">Envío gratis en pedidos mayores a $50</div>
        </div>

        {/* Sabor */}
        {product.flavor && (
          <>
            <div className="variant-label">Sabor</div>
            <div className="variant-options">
              <button className="variant-button active">
                {product.flavor}
              </button>
            </div>
          </>
        )}

        {/* Información nutricional */}
        {product.idNutritionalValues && (
          <div className="nutrition-box">
            <div className="nutrition-label">Valores Nutricionales</div>
            <div className="nutrition-grid">
              <div>Proteína: <span>{product.idNutritionalValues.protein}g</span></div>
              <div>Carbohidratos: <span>{product.idNutritionalValues.carbs}g</span></div>
              <div>Grasa: <span>{product.idNutritionalValues.fat || product.idNutritionalValues.fats}g</span></div>
              <div>Calorías: <span>{product.idNutritionalValues.calories}</span></div>
            </div>
          </div>
        )}

        {/* Cantidad y botones */}
        <div className="actions">
          <div className="quantity-control">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="quantity-button">-</button>
            <div className="quantity-display">{quantity}</div>
            <button onClick={() => setQuantity(quantity + 1)} className="quantity-button">+</button>
          </div>

          <button className="add-to-cart" onClick={() => alert(`Comprando ${quantity} unidad(es) de ${product.name}`)}>
            🛒 Agregar al Carrito
          </button>

          <button 
            className="review-button"
            onClick={() => setShowReviewForm(!showReviewForm)}
          >
            {showReviewForm ? 'Cancelar Reseña' : 'Escribir Reseña'}
          </button>
        </div>

        {/* Formulario de reseña */}
        {showReviewForm && (
          <div className="review-form-container">
            <h3 className="review-form-title">Escribe tu reseña</h3>
            <form onSubmit={handleReviewSubmit} className="review-form">
              <div className="form-group">
                <label>Tu nombre:</label>
                <input
                  type="text"
                  value={newReview.user}
                  onChange={(e) => setNewReview({...newReview, user: e.target.value})}
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Calificación:</label>
                <div className="rating-input">
                  {renderInteractiveStars(newReview.rating, (rating) => 
                    setNewReview({...newReview, rating})
                  )}
                  <span className="rating-text">({newReview.rating} estrella{newReview.rating !== 1 ? 's' : ''})</span>
                </div>
              </div>
              
              <div className="form-group">
                <label>Tu comentario:</label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  placeholder="Cuéntanos qué te pareció el producto..."
                  rows="4"
                  required
                />
              </div>
              
              <div className="form-buttons">
                <button type="submit" className="submit-review-btn">
                  ✓ Enviar Reseña
                </button>
                <button 
                  type="button" 
                  className="cancel-review-btn"
                  onClick={() => setShowReviewForm(false)}
                >
                  ✗ Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Sección de reseñas */}
        <div className="reviews-section">
          <h2 className="reviews-title">
            Reseñas de Clientes ({reviews.length})
          </h2>
          
          <div className="reviews-container">
            {reviews.length === 0 ? (
              <div className="no-reviews">
                <p>Aún no hay reseñas. ¡Sé el primero en escribir una!</p>
              </div>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <div className="review-user">
                      <div className="user-avatar">
                        {review.user.charAt(0).toUpperCase()}
                      </div>
                      <div className="user-info">
                        <div className="user-name">{review.user}</div>
                        <div className="review-date">{review.date}</div>
                      </div>
                    </div>
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <div className="review-comment">
                    {review.comment}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product2;