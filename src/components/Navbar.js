import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'ของที่หาย', href: '/lost' },
    { name: 'ของที่เก็บได้', href: '/found' },
    { name: 'แจ้งของหาย / พบของ', href: '/report' },
  ];

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & School Branding */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-blue-900 font-bold text-xl shadow">
              B3
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                BJS3 Lost & Found
              </span>
              <p className="text-xs text-blue-200 hidden sm:block">
                โรงเรียนบรรหารแจ่มใสวิทยา 3
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const isReport = link.href === '/report';
              if (isReport) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold bg-amber-400 text-blue-950 hover:bg-amber-300 shadow transition-all hover:scale-105"
                  >
                    + {link.name}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? 'bg-blue-800 text-amber-300 font-semibold'
                      : 'text-blue-100 hover:bg-blue-800/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">เปิดเมนูหลัก</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-blue-800 bg-blue-950 px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-fadeIn">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const isReport = link.href === '/report';
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isReport
                    ? 'bg-amber-400 text-blue-950 font-bold text-center mt-2'
                    : active
                    ? 'bg-blue-800 text-amber-300'
                    : 'text-blue-100 hover:bg-blue-800/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
