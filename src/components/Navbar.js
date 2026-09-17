import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

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
          <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group touch-active">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-400 flex items-center justify-center text-blue-950 font-black text-sm sm:text-base shadow ring-2 ring-amber-300/60">
              BJ3
            </div>
            <div>
              <span className="font-black text-base sm:text-xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                BJ3 Lost & Found
              </span>
              <p className="text-[10px] sm:text-xs text-blue-200 leading-none mt-0.5">
                โรงเรียน BJ3
              </p>
            </div>
          </Link>

          {/* Desktop & iPad (Tablet) Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const isReport = link.href === '/report';
              if (isReport) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="ml-2 lg:ml-3 px-4 py-2 rounded-xl text-sm font-bold bg-amber-400 text-blue-950 hover:bg-amber-300 shadow transition-all hover:scale-105 active:scale-95"
                  >
                    + {link.name}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-blue-800 text-amber-300 font-bold'
                      : 'text-blue-100 hover:bg-blue-800/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-blue-200 hover:text-white hover:bg-blue-800 focus:outline-none touch-active"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="เมนูหลัก"
            >
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

      {/* Mobile Menu Backdrop & Drawer */}
      {isOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative z-50 border-t border-blue-800 bg-blue-950 px-4 pt-3 pb-5 space-y-2 shadow-2xl">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const isReport = link.href === '/report';
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium min-h-[48px] flex items-center ${
                    isReport
                      ? 'bg-amber-400 text-blue-950 font-bold justify-center mt-3 shadow'
                      : active
                      ? 'bg-blue-800 text-amber-300 font-bold'
                      : 'text-blue-100 hover:bg-blue-800/70 hover:text-white'
                  }`}
                >
                  {isReport ? `+ ${link.name}` : link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
