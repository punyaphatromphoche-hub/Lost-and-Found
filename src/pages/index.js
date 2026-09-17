import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ItemCard from '@/components/ItemCard';
import SearchBar from '@/components/SearchBar';
import { filterItems } from '@/utils/api';

export default function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const data = filterItems({ type: 'all' });
    setItems(data);
    setFilteredItems(data.slice(0, 6)); // Show latest 6 on landing page
  }, []);

  const handleSearch = ({ keyword, category }) => {
    const results = filterItems({ type: 'all', keyword, category });
    setFilteredItems(results.slice(0, 6));
  };

  const lostCount = items.filter((i) => i.type === 'lost').length;
  const foundCount = items.filter((i) => i.type === 'found').length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Hero Welcome Banner */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-400/95 text-blue-950 text-xs sm:text-sm font-bold rounded-full mb-3.5 shadow-sm">
            <span>🏫</span>
            <span>โรงเรียน BJ3</span>
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 sm:mb-4 leading-tight">
            ระบบแจ้งของหายและค้นหาของที่พบ
          </h1>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 font-normal leading-relaxed px-2">
            ศูนย์กลางช่วยเหลือตามหาสิ่งของที่สูญหาย และส่งคืนของที่เก็บได้ในบริเวณโรงเรียน BJ3 สะดวกรวดเร็ว ปลอดภัย และใช้งานง่ายบนทุกอุปกรณ์
          </p>

          {/* Quick CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-sm sm:max-w-none mx-auto">
            <Link
              href="/report?type=lost"
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all touch-active flex items-center justify-center space-x-2"
            >
              <span>📢 แจ้งของหาย</span>
            </Link>
            <Link
              href="/report?type=found"
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all touch-active flex items-center justify-center space-x-2"
            >
              <span>🎁 แจ้งพบของ / ส่งคืน</span>
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md sm:max-w-lg mx-auto pt-4 border-t border-blue-800/80">
            <div className="bg-blue-800/60 backdrop-blur-sm rounded-xl p-2.5 sm:p-3.5 border border-blue-700/50">
              <div className="text-xl sm:text-3xl font-black text-amber-300">{lostCount}</div>
              <div className="text-[11px] sm:text-xs text-blue-200 mt-0.5">ของที่หาย</div>
            </div>
            <div className="bg-blue-800/60 backdrop-blur-sm rounded-xl p-2.5 sm:p-3.5 border border-blue-700/50">
              <div className="text-xl sm:text-3xl font-black text-emerald-300">{foundCount}</div>
              <div className="text-[11px] sm:text-xs text-blue-200 mt-0.5">ของที่เก็บได้</div>
            </div>
            <div className="bg-blue-800/60 backdrop-blur-sm rounded-xl p-2.5 sm:p-3.5 border border-blue-700/50">
              <div className="text-xl sm:text-3xl font-black text-blue-200">100%</div>
              <div className="text-[11px] sm:text-xs text-blue-200 mt-0.5">เพื่อชาว BJ3</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1 w-full">
        {/* Search Bar Section */}
        <div className="mb-8 -mt-10 sm:-mt-14 relative z-10 max-w-4xl mx-auto">
          <SearchBar onSearch={handleSearch} placeholder="ค้นหาชื่อสิ่งของ หรือสถานที่ในโรงเรียน เช่น โรงอาหาร, อาคาร 2..." />
        </div>

        {/* Latest Items Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 sm:mb-6 gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
              รายการอัปเดตล่าสุด
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
              สิ่งของที่เพิ่งได้รับแจ้งหายและพบในโรงเรียนเร็วๆ นี้
            </p>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-start">
            <Link
              href="/lost"
              className="text-xs font-bold px-3 py-2 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 active:bg-rose-200 transition-colors touch-active"
            >
              ของหายทั้งหมด →
            </Link>
            <Link
              href="/found"
              className="text-xs font-bold px-3 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 active:bg-emerald-200 transition-colors touch-active"
            >
              ของที่เก็บได้ทั้งหมด →
            </Link>
          </div>
        </div>

        {/* Items Grid (Optimized for Mobile, iPad, and Desktop) */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
            <p className="text-slate-500 text-sm">ไม่พบรายการที่ตรงกับคำค้นหา</p>
          </div>
        )}

        {/* School Lost & Found Guidance Notice */}
        <div className="mt-10 sm:mt-14 bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6 text-amber-900 shadow-xs">
          <div className="flex items-start space-x-3.5">
            <span className="text-2xl sm:text-3xl flex-shrink-0">💡</span>
            <div>
              <h3 className="font-bold text-sm sm:text-base mb-1">คำแนะนำสำหรับชาว BJ3</h3>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                หากนักเรียนพบของมีค่า (เช่น โทรศัพท์มือถือ เงินสด กระเป๋าสตางค์ หรือบัตรสำคัญ) ขอความกรุณานำส่งห้องกิจการนักเรียน (ห้อง 112 อาคาร 1) โรงเรียน BJ3 เพื่อความปลอดภัยในการส่งคืนเจ้าของ หรือหากของหาย สามารถแจ้งข้อมูลผ่านแอปนี้ได้ตลอดเวลาครับ
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
