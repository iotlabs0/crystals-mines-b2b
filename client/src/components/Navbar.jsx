'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { PhoneIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import '../styles/header.css';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Our Crystals', href: '/crystals' },
  { name: 'Healing Stones', href: '/healing-stones' },
  { name: 'Gemstone Jewelry', href: '/jewelry' },
  { name: 'About Us', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-container">
      {/* Top Bar */}


    </header>
  );
}
