import React from 'react';
import { Layers } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { categories } from '../data';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCategory = Number(searchParams.get('category')) || null;

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/?category=${categoryId}`);
  };

  return (
    <aside className="sidebar">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Layers className="mr-2" />
        Categories
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;