import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Product2.css';

const Product2 = () => {
  const { id } = useParams();// Obtiene el ID del producto desde la URL
  const navigate = useNavigate();

  // Estados del componente
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);
  // Reseñas iniciales simuladas
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Rodrigo Torres",
      rating: 5,
      comment: "Reppo es un Gel energético de 'recuperación' específico que combina la sacarosa y fructosa con aminoácidos de cadena ramificada (BCAA) y vitamina C. Esta formulado para contribuir con la reconstrucción de las fibras musculares post-ejercicio. De esta manera colabora en evitar el catabolismo muscular, y así mejorando el rendimiento.",
      date: "15 Nov 2024"
    },
    {
      id: 2,
      user: "David Zepeda",
      rating: 4,
      comment: "Reppo es un Gel energético de 'recuperación' específico que combina la sacarosa y fructosa con aminoácidos de cadena ramificada (BCAA) y vitamina C. Esta formulado para contribuir con la reconstrucción de las fibras musculares post-ejercicio. De esta manera colabora en evitar el catabolismo muscular, y así mejorando el rendimiento.",
      date: "10 Nov 2024"
    },
    {
      id: 3,
      user: "Olga Flores",
      rating: 5,
      comment: "Reppo es un Gel energético de 'recuperación' específico que combina la sacarosa y fructosa con aminoácidos de cadena ramificada (BCAA) y vitamina C. Esta formulado para contribuir con la reconstrucción de las fibras musculares post-ejercicio. De esta manera colabora en evitar el catabolismo muscular, y así mejorando el rendimiento.",
      date: "8 Nov 2024"
    }
  ]);

  // Estado para nueva reseña escrita por el usuario
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
        const response = await fetch(`http://localhost:4000/api/products/${id}`, {
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
        // Para demostración, usar datos de ejemplo si hay error
        setProduct({
          _id: id,
          name: "Reppo",
          price: "2.50",
          flavor: "Mango",
          description: "Reppo es un Gel energético de 'recuperación' específico que combina la sacarosa y fructosa con aminoácidos de cadena ramificada (BCAA) y vitamina C. Esta formulado para contribuir con la reconstrucción de las fibras musculares post-ejercicio. De esta manera colabora en evitar el catabolismo muscular, y así mejorando el rendimiento.",
          image: "/image 3.png",
          idNutritionalValues: {
            protein: 5,
            carbs: 25,
            fat: 0,
            calories: 120
          }
        });
        setError(null);
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
        className={`star ${i < Math.floor(rating) ? 'filled' : 'empty'}`}
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

     // Validación: no permite campos vacíos
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

  // Muestra error si no se encuentra el producto
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

  return (
    <div className="product-page">
      <div className="container">
        {/* Botón de volver */}
        <button className="back-button" onClick={() => navigate('/products')}>
          ← Volver a Productos
        </button>

        {/* Layout principal de dos columnas */}
        <div className="product-main">
          {/* Sección de imagen izquierda */}
          <div className="product-image-section">
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
          </div>

          {/* Sección de información derecha */}
          <div className="product-info-section">
            <div className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-price">${product.price}</div>
              
              {product.flavor && (
                <div className="product-flavor">Sabor: {product.flavor}</div>
              )}
              
              <p className="product-description">{product.description}</p>
            </div>

            {/* Información nutricional */}
            {product.idNutritionalValues && (
              <div className="nutrition-info">
                <div className="nutrition-title">Información Nutricional</div>
                <div className="nutrition-grid">
                  <div className="nutrition-item">
                    Proteína: <span className="value">{product.idNutritionalValues.protein}g</span>
                  </div>
                  <div className="nutrition-item">
                    Carbohidratos: <span className="value">{product.idNutritionalValues.carbs}g</span>
                  </div>
                  <div className="nutrition-item">
                    Grasa: <span className="value">{product.idNutritionalValues.fat || product.idNutritionalValues.fats || 0}g</span>
                  </div>
                  <div className="nutrition-item">
                    Calorías: <span className="value">{product.idNutritionalValues.calories}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Controles de cantidad y botones */}
            <div className="product-actions">
              <div className="quantity-control">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                  className="quantity-button"
                >
                  -
                </button>
                <div className="quantity-display">{quantity}</div>
                <button 
                  onClick={() => setQuantity(quantity + 1)} 
                  className="quantity-button"
                >
                  +
                </button>
              </div>

              <button 
                className="add-to-cart" 
                onClick={() => alert(`Agregando ${quantity} unidad(es) de ${product.name} al carrito`)}
              >
                Agregar al Carrito
              </button>
            </div>

            <button 
              className="review-button"
              onClick={() => setShowReviewForm(!showReviewForm)}
            >
              {showReviewForm ? 'Cancelar Reseña' : 'Personalizar Producto'}
            </button>
          </div>
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
          <div className="reviews-header">
            <h2 className="reviews-title">Reseñas</h2>
            <button 
              className="add-review-button"
              onClick={() => setShowReviewForm(!showReviewForm)}
            >
              Agregar Reseña
            </button>
          </div>
          
          <div className="reviews-grid">
            {reviews.length === 0 ? (
              <div className="no-reviews">
                <p>Aún no hay reseñas. ¡Sé el primero en escribir una!</p>
              </div>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">
                        {review.user.charAt(0).toUpperCase()}
                      </div>
                      <div className="reviewer-details">
                        <div className="reviewer-name">{review.user}</div>
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