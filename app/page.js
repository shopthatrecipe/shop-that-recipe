'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [zipCode, setZipCode] = useState('');
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
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ marginBottom: '2rem', color: '#333' }}>Welcome to Shop That Recipe 🍴</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label htmlFor="zip" style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
          Enter your ZIP Code:
        </label>
        <input
          id="zip"
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          style={{ padding: '0.8rem', fontSize: '1rem', width: '200px', textAlign: 'center', marginBottom: '1.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          maxLength="5"
        />
        <button type="submit" style={{ padding: '0.8rem 2rem', fontSize: '1rem', borderRadius: '8px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}










  