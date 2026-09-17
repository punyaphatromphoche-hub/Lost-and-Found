import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BottomNav() {
  const router = useRouter();

  const navItems = [
    {
      name: 'หน้าแรก',
      href: '/',
      icon: (active) => (
        <svg
          className={`w-6 h-6 transition-transform ${active ? 'scale-110' : ''}`}
          fill={active ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={active ? 2 : 1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: 'ของหาย',
      href: '/lost',
      badge: 'หาย',
      icon: (active) => (
        <svg
          className={`w-6 h-6 transition-transform ${active ? 'scale-110' : ''}`}
          fill={active ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={active ? 2 : 1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      name: 'เก็บได้',
      href: '/found',
      badge: 'พบ',
      icon: (active) => (
        <svg
          className={`w-6 h-6 transition-transform ${active ? 'scale-110' : ''}`}
          fill={active ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={active ? 2 : 1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      name: 'แจ้งข้อมูล',
      href: '/report',
      isAction: true,
      icon: (active) => (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg md:hidden"
      style={{
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 8px)',
      }}
    >
      <div className="flex items-center justify-around px-2 pt-2 pb-1">
        {navItems.map((item) => {
          const isActive = router.pathname === item.href;

          if (item.isAction) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center flex-1 py-1 group touch-active"
              >
                <div className="w-11 h-11 -mt-5 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 text-blue-950 flex items-center justify-center shadow-lg border-2 border-white transform active:scale-95 transition-all">
                  {item.icon(isActive)}
                </div>
                <span className="text-[11px] font-bold text-amber-600 mt-1">
                  {item.name}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-1 relative touch-active transition-colors ${
                isActive ? 'text-blue-900 font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="relative">
                {item.icon(isActive)}
                {item.badge && (
                  <span
                    className={`absolute -top-1 -right-2 text-[9px] px-1 py-0.2 rounded-full font-semibold ${
                      item.href === '/lost'
                        ? 'bg-rose-500 text-white'
                        : 'bg-emerald-500 text-white'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
