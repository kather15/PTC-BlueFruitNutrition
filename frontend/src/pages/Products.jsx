import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Products.css';
import CardClothing from '../components/CardProducts/CardProducts';

const Products = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [collectionFilter, setCollectionFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [maxPrice, setMaxPrice] = useState(200);
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [colors, setColors] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/product', { credentials: 'include' })
      .then(res => res.ok ? res.json() : Promise.reject('Error fetching products'))
      .then(data => {
        setProducts(data);
        setCollections([...new Set(data.map(product => product.coleccion))]);
        setColors([...new Set(data.map(product => product.color))]);
        setCategories([...new Set(data.map(product => product.category))]);
      })
      .catch(err => console.error(err));
  }, []);

  const filteredClothes = products
    .filter(item => {
      const q = query.toLowerCase();
      const matchSearch =
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.coleccion && item.coleccion.toLowerCase().includes(q)) ||
        (item.color && item.color.toLowerCase().includes(q)) ||
        (item.category && item.category.toLowerCase().includes(q)) ||
        (!isNaN(query) && Math.abs(item.price - parseFloat(query)) < 5);

      const matchFilters =
        (collectionFilter ? item.coleccion?.toLowerCase() === collectionFilter.toLowerCase() : true) &&
        (colorFilter ? item.color?.toLowerCase() === colorFilter.toLowerCase() : true) &&
        (categoryFilter ? item.category?.toLowerCase() === categoryFilter.toLowerCase() : true) &&
        item.price <= maxPrice;

      return matchSearch && matchFilters;
    })
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : sortOrder === 'desc' ? b.price - a.price : 0));

  const clearFilters = () => {
    setCollectionFilter('');
    setColorFilter('');
    setCategoryFilter('');
    setMaxPrice(200);
  };

  return (
    <div className="products-container">
      <div className="header">
        <h1>{categoryFilter ? categoryFilter.toUpperCase() : 'ALL PRODUCTS'}</h1>
        <div className="d-flex justify-content-center align-items-center mb-4 gap-3">
          <input
            type="text"
            placeholder="Search for items..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button className="btn btnfilters" onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? 'Hide filters' : 'Show filters'}
          </button>
          <Link to="/addproduct" className="btn btn-addproducts">+ Add products</Link>
        </div>
      </div>

      {showFilters && (
        <div className="filters">
          <div className="filter-group">
            <label>Collection</label>
            <select value={collectionFilter} onChange={(e) => setCollectionFilter(e.target.value)}>
              <option value="">All</option>
              {collections.map((collection) => (
                <option key={collection} value={collection}>{collection}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Color</label>
            <select value={colorFilter} onChange={(e) => setColorFilter(e.target.value)}>
              <option value="">All</option>
              {colors.map((color) => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Category</label>
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Max Price</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              min="0"
            />
          </div>

          <div className="d-flex justify-content-end">
            <button className="btn btn-dark" onClick={clearFilters}>Clear Filters</button>
          </div>
        </div>
      )}

      {filteredClothes.length === 0 && (
        <div className="no-products">
          <h5>No products found with the selected filters or search.</h5>
        </div>
      )}

      <div className="product-cards">
        {filteredClothes.map((item) => (
          <div key={item._id} className="product-card">
            <CardClothing {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
