import React, { useState } from 'react';
import { Star, StarHalf, ShoppingCart, Heart } from 'lucide-react';

const ProductScreens = () => {
  const [currentView, setCurrentView] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(2);
  const [selectedFlavor, setSelectedFlavor] = useState('🍑');

  const products = [
    {
      id: 1,
      name: 'Carbo Upp',
      image: '/image 3.png',
      price: 2.50,
      description: 'Reppo es un Gel energético de "recuperación" específico, que combina la dextrosa y Palatinose® con aminoácidos de cadena ramificada (BCAA) y vitamina C. Está formulado para combatir una reconstrucción de las fibras musculares post-ejercicio. De esta manera colabora a evitar el catabolismo muscular y dar mejorante al rendimiento.'
    },
    {
      id: 2,
      name: 'Ener Kik',
      image: '/image 2.png',
      price: 2.50,
      description: 'Reppo es un Gel energético de "recuperación" específico, que combina la dextrosa y Palatinose® con aminoácidos de cadena ramificada (BCAA) y vitamina C. Está formulado para combatir una reconstrucción de las fibras musculares post-ejercicio. De esta manera colabora a evitar el catabolismo muscular y dar mejorante al rendimiento.'
    },
    {
      id: 3,
      name: 'Reppo',
      image: '/image 4.png',
      price: 2.50,
      description: 'Reppo es un Gel energético de "recuperación" específico, que combina la dextrosa y Palatinose® con aminoácidos de cadena ramificada (BCAA) y vitamina C. Está formulado para combatir una reconstrucción de las fibras musculares post-ejercicio. De esta manera colabora a evitar el catabolismo muscular y dar mejorante al rendimiento.'
    }
  ];

  const reviews = [
    {
      name: 'Rodrigo Torres',
      rating: 5,
      comment: 'Reppo es un Gel energético de "recuperación" específico, que combina la dextrosa y Palatinose® con aminoácidos de cadena ramificada (BCAA) y vitamina C. Está formulado para combatir una reconstrucción de las fibras musculares post-ejercicio. De esta manera colabora a evitar el catabolismo muscular y dar mejorante al rendimiento.'
    },
    {
      name: 'David Zepeda',
      rating: 4,
      comment: 'Reppo es un Gel energético de "recuperación" específico, que combina la dextrosa y Palatinose® con aminoácidos de cadena ramificada (BCAA) y vitamina C. Está formulado para combatir una reconstrucción de las fibras musculares post-ejercicio. De esta manera colabora a evitar el catabolismo muscular y dar mejorante al rendimiento.'
    },
    {
      name: 'Olga Flores',
      rating: 5,
      comment: 'Reppo es un Gel energético de "recuperación" específico, que combina la dextrosa y Palatinose® con aminoácidos de cadena ramificada (BCAA) y vitamina C. Está formulado para combatir una reconstrucción de las fibras musculares post-ejercicio. De esta manera colabora a evitar el catabolismo muscular y dar mejorante al rendimiento.'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  if (currentView === 'products') {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Nuestros Productos
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <div className="bg-gradient-to-br from-yellow-200 to-lime-300 rounded-lg p-4 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-24 h-32 mx-auto object-contain"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {product.name}
              </h3>
              
              <button 
                onClick={() => handleProductClick(product)}
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded transition-colors font-medium"
              >
                Ver Producto
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (currentView === 'product-detail' && selectedProduct) {
    return (
      <div className="max-w-6xl mx-auto p-6 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Product Image and Details */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-48 h-64 mx-auto object-contain"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">{selectedProduct.name}</h1>
              
              <div className="text-2xl font-bold text-gray-800">
                ${selectedProduct.price.toFixed(2)}
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sabor:</span>
                <span className="text-lg">{selectedFlavor}</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Cantidad:</span>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={decreaseQuantity}
                    className="w-8 h-8 bg-gray-200 rounded text-gray-700 hover:bg-gray-300 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="w-8 h-8 bg-gray-200 rounded text-gray-700 hover:bg-gray-300 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded font-medium transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Agregar Al Carrito</span>
                </button>
                
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded font-medium transition-colors">
                  Personalizar Producto
                </button>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>
          </div>
          
          {/* Right Column - Reviews */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Reseñas</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm border border-blue-600 px-3 py-1 rounded transition-colors">
                Agregar Reseña
              </button>
            </div>
            
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="bg-blue-900 text-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Back Button */}
        <div className="mt-8">
          <button 
            onClick={() => setCurrentView('products')}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded transition-colors"
          >
            ← Volver a Productos
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ProductScreens;