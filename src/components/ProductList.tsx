import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { products, categories } from '../data';

function ProductList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCategory = Number(searchParams.get('category')) || null;

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <ShoppingBag className="mr-2" />
        Product Showcase
      </h1>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">
                {categories.find((c) => c.id === product.category)?.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductList;