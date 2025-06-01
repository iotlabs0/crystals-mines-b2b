// components/Footer.jsx
"use client"; // Only needed if you're using client-side hooks, not strictly required here

import React from 'react';
import Link from 'next/link';
import '../styles/footer.css'; // Use CSS Modules if preferred

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Crystal Mines</h2>
          <p>Your trusted source for raw and refined minerals.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@crystalmines.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Crystal Mines. All rights reserved.</p>
      </div>
    </footer>
  );
}
