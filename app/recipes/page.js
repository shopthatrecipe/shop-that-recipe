'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import recipesData from '../../data/recipes.json';

export default function RecipesPage() {
  const [zipCode, setZipCode] = useState(null);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedZip = localStorage.getItem('userZip');
    if (!storedZip) {
      router.push('/');
    } else {
      setZipCode(storedZip);
    }
  }, [router]);

  const handleRecipeSelect = (id) => {
    setSelectedRecipes((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((recipeId) => recipeId !== id)
        : [...prevSelected, id]
    );
  };

  const handleCreateCart = () => {
    const selectedIngredients = recipesData
      .filter((recipe) => selectedRecipes.includes(recipe.id))
      .flatMap((recipe) => recipe.ingredients);

    const uniqueIngredients = [...new Set(selectedIngredients)];

    const searchQuery = uniqueIngredients.join(' ');

    const walmartSearchURL = `https://www.walmart.com/search?q=${encodeURIComponent(searchQuery)}`;

    window.open(walmartSearchURL, '_blank');
  };

  if (!zipCode) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Select Your Recipes 🍽️</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {recipesData.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              background: selectedRecipes.includes(recipe.id) ? '#e0ffe0' : 'white',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s, background-color 0.2s',
              cursor: 'pointer',
            }}
            onClick={() => handleRecipeSelect(recipe.id)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
          >
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: '#555' }}>
              <input
                type="checkbox"
                checked={selectedRecipes.includes(recipe.id)}
                onChange={() => handleRecipeSelect(recipe.id)}
                style={{ marginRight: '0.5rem' }}
              />
              {recipe.title}
            </h2>
            <p><strong>Ingredients:</strong></p>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} style={{ marginBottom: '0.3rem' }}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selectedRecipes.length > 0 && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button
            onClick={handleCreateCart}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#4CAF50',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            🛒 Create Walmart Cart
          </button>
        </div>
      )}
    </div>
  );
}

