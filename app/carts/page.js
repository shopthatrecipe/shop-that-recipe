'use client';

export default function CartsPage() {
  const weeklyCarts = [
    { title: "Keto Week Cart 🥑", description: "All the essentials for a full week of keto meals!" },
    { title: "Vegan Starter Cart 🌱", description: "Plant-based groceries ready to go." },
    { title: "Family Meals Cart 🍽️", description: "Everything you need for a week of kid-friendly dinners." },
  ];

  const mealCarts = [
    { title: "Spaghetti Bolognese 🍝", description: "Classic Italian pasta dinner." },
    { title: "Chicken Alfredo 🐔", description: "Creamy pasta with chicken." },
    { title: "Vegan Buddha Bowl 🥗", description: "Healthy and colorful plant-based bowl." },
    { title: "Avocado Toast 🥑", description: "Quick and easy breakfast or lunch." },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Open Sans, sans-serif', backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '36px' }}>Choose Your Cart</h1>

      {/* Weekly Carts Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '1rem' }}>Weekly Grocery Carts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {weeklyCarts.map((cart, idx) => (
            <div key={idx} style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center', cursor: 'pointer' }}>
              <h3>{cart.title}</h3>
              <p>{cart.description}</p>
              <button 
                style={{ 
                  marginTop: '1rem', 
                  backgroundColor: '#1E3A8A', 
                  color: '#fff', 
                  padding: '10px 20px', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1A3276'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1E3A8A'}
                onClick={() => alert(`Start building cart for: ${cart.title}`)}
              >
                Shop This Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Single Meals Section */}
      <section>
        <h2 style={{ fontSize: '28px', marginBottom: '1rem' }}>Single Meal Carts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {mealCarts.map((meal, idx) => (
            <div key={idx} style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center', cursor: 'pointer' }}>
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
              <button 
                style={{ 
                  marginTop: '1rem', 
                  backgroundColor: '#1E3A8A', 
                  color: '#fff', 
                  padding: '10px 20px', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1A3276'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1E3A8A'}
                onClick={() => alert(`Start building cart for: ${meal.title}`)}
              >
                Shop This Meal
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



  