'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomePage() {
  const [zipCode, setZipCode] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCode.trim().length === 5 && /^\d+$/.test(zipCode)) {
      localStorage.setItem('userZip', zipCode);
      router.push('/recipes');
    } else {
      alert('Please enter a valid 5-digit ZIP code.');
    }
  };

  return (
    <div style={{ fontFamily: 'Open Sans, sans-serif', backgroundColor: '#FAFAFA', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#FFF', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', height: '80px', position: 'relative' }}>
        <div style={{ position: 'relative', width: '140px', height: '50px' }}>
          <Image src="/logo.png" alt="Shop That Recipe Logo" fill style={{ objectFit: 'contain' }} priority />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div className="desktop-nav" style={{ display: menuOpen ? 'none' : 'flex', gap: '30px' }}>
            {['Recipes', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '16px', position: 'relative' }}
                onMouseEnter={(e) => {
                  e.target.style.textDecoration = 'underline';
                  e.target.style.textDecorationThickness = '2px';
                  e.target.style.textUnderlineOffset = '4px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textDecoration = 'none';
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', flexDirection: 'column', cursor: 'pointer', gap: '5px' }}
            className="mobile-menu"
          >
            <span style={{ width: '25px', height: '3px', backgroundColor: '#333' }} />
            <span style={{ width: '25px', height: '3px', backgroundColor: '#333' }} />
            <span style={{ width: '25px', height: '3px', backgroundColor: '#333' }} />
          </div>
        </div>

        {menuOpen && (
          <div style={{ position: 'absolute', top: '80px', right: '20px', backgroundColor: '#FFF', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {['Recipes', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}

        <a
          href="#zipcode"
          style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '30px',
            fontWeight: 'bold',
            textDecoration: 'none',
            transition: 'background-color 0.3s',
            marginLeft: '20px'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          Start Shopping
        </a>
      </header>

      <section style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '40px', marginBottom: '30px', color: '#333' }}>Shop Your Favorite Recipes Instantly</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px', gap: '10px' }}>
          <input
            id="zipcode"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter your Zipcode"
            style={{ padding: '12px', width: '250px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', textAlign: 'center' }}
            maxLength="5"
          />
          <button
            type="submit"
            style={{ backgroundColor: '#4CAF50', padding: '12px 24px', border: 'none', color: '#fff', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Get Started
          </button>
        </form>
      </section>

      <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', margin: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '200px' }}>
          <h3>Easy</h3>
          <p>Simple shopping experience</p>
        </div>
        <div style={{ maxWidth: '200px' }}>
          <h3>Fast</h3>
          <p>From recipe to cart in minutes</p>
        </div>
        <div style={{ maxWidth: '200px' }}>
          <h3>Convenient</h3>
          <p>Save time & shop smarter</p>
        </div>
      </section>

      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2>Popular Recipes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {['Spaghetti Bolognese', 'Chicken Alfredo', 'Vegan Buddha Bowl', 'Avocado Toast'].map((recipe, index) => (
            <div
              key={index}
              style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {recipe}
            </div>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: '80px', backgroundColor: '#f1f1f1', textAlign: 'center', padding: '20px', fontSize: '14px', color: '#666' }}>
        &copy; 2024 ShopThatRecipe. All rights reserved.
      </footer>
    </div>
  );
}














  