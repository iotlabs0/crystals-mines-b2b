"use client"; // ✅ This enables client-side rendering

import React, { useState } from 'react';
import Link from 'next/link'; // ✅ Use Next.js routing
import '../styles/header.css'; // You can also use CSS Modules instead

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <Link href="/">Crystal Mines</Link>
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}
