'use client';

export default function ClientRecipesList({ recipes }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.03)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
        >
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: '#555' }}>{recipe.title}</h2>
          <p><strong>Ingredients:</strong></p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} style={{ marginBottom: '0.3rem' }}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

