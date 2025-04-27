'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomePage() {
  const [zipCode, setZipCode] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCode.trim().length === 5 && /^\d+$/.test(zipCode)) {
      localStorage.setItem('userZip', zipCode);
      router.push('/carts'); // changed from /templates to /carts
    } else {
      alert('Please enter a valid 5-digit ZIP code.');
    }
  };

  return (
    <div style={{ 
      fontFamily: 'Poppins, sans-serif', 
      backgroundColor: '#F7F8FA', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      
      {/* Header */}
      <header style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '20px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid #E0E0E0',
        boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative', width: '40px', height: '40px' }}>
            <Image
              src="/logo.png"
              alt="Shop That Recipe Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#333', fontFamily: 'Poppins, sans-serif' }}>
            Shop That Recipe
          </span>
        </div>

        <a 
          href="#zipcode" 
          style={{ 
            backgroundColor: '#1E3A8A', 
            color: '#fff', 
            padding: '12px 24px', 
            borderRadius: '8px', 
            fontWeight: 'bold', 
            textDecoration: 'none', 
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1A3276'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#1E3A8A'}
        >
          Start Shopping
        </a>
      </header>

      {/* Hero Section */}
      <section style={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '60px 20px' 
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          color: '#333333', 
          marginBottom: '20px' 
        }}>
          Shop Recipes Instantly
        </h1>
        <p style={{ 
          fontSize: '20px', 
          color: '#777777', 
          marginBottom: '40px', 
          maxWidth: '600px' 
        }}>
          From recipe to cart — shop your meals in seconds.
        </p>

        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '12px' 
        }}>
          <input
            id="zipcode"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter your ZIP code"
            style={{ 
              padding: '14px', 
              width: '250px', 
              fontSize: '16px', 
              borderRadius: '8px', 
              border: '1px solid #CCCCCC', 
              textAlign: 'center',
              backgroundColor: '#FFFFFF'
            }}
            maxLength="5"
          />
          <button 
            type="submit" 
            style={{ 
              backgroundColor: '#1E3A8A', 
              padding: '14px 28px', 
              border: 'none', 
              color: '#FFFFFF', 
              fontSize: '16px', 
              borderRadius: '8px', 
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s' 
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1A3276'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1E3A8A'}
          >
            Get Started
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#FFFFFF', 
        textAlign: 'center', 
        padding: '20px', 
        fontSize: '14px', 
        color: '#999999', 
        borderTop: '1px solid #E0E0E0'
      }}>
        &copy; 2024 ShopThatRecipe. Built for busy shoppers and creators.
      </footer>
    </div>
  );
}



















  