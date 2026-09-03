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
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-amber-400 text-blue-950 text-xs sm:text-sm font-semibold rounded-full mb-4 shadow">
            🏫 โรงเรียนบรรหารแจ่มใสวิทยา 3 (BJS3)
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            ระบบแจ้งของหายและค้นหาของที่พบ
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
            ศูนย์กลางช่วยเหลือตามหาสิ่งของที่สูญหาย และส่งคืนของที่เก็บได้ในบริเวณโรงเรียนบรรหารแจ่มใสวิทยา 3 สะดวกรวดเร็ว ปลอดภัย และเข้าถึงง่าย
          </p>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/report?type=lost"
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              📢 แจ้งของหาย
            </Link>
            <Link
              href="/report?type=found"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              🎁 แจ้งพบของ / ส่งคืน
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto pt-4 border-t border-blue-700/50">
            <div className="bg-blue-800/50 backdrop-blur rounded-lg p-3">
              <div className="text-2xl font-bold text-amber-300">{lostCount}</div>
              <div className="text-xs text-blue-200">รายการของที่หาย</div>
            </div>
            <div className="bg-blue-800/50 backdrop-blur rounded-lg p-3">
              <div className="text-2xl font-bold text-emerald-300">{foundCount}</div>
              <div className="text-xs text-blue-200">รายการที่เก็บได้</div>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-blue-800/50 backdrop-blur rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-200">100%</div>
              <div className="text-xs text-blue-200">เพื่อชาว บ.จ.๓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        {/* Search Bar Section */}
        <div className="mb-10 -mt-14 relative z-10 max-w-4xl mx-auto">
          <SearchBar onSearch={handleSearch} placeholder="พิมพ์ชื่อสิ่งของ หรือสถานที่ เช่น กระเป๋า, โรงอาหาร, อาคาร 2..." />
        </div>

        {/* Latest Items Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              รายการอัปเดตล่าสุด
            </h2>
            <p className="text-slate-500 text-sm">
              สิ่งของที่เพิ่งได้รับแจ้งหายและพบในโรงเรียนเร็วๆ นี้
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              href="/lost"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
            >
              ดูของหายทั้งหมด →
            </Link>
            <Link
              href="/found"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
            >
              ดูของที่เก็บได้ทั้งหมด →
            </Link>
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500">ไม่พบรายการที่ตรงกับคำค้นหา</p>
          </div>
        )}

        {/* School Lost & Found Guidance Notice */}
        <div className="mt-14 bg-amber-50 border border-amber-200 rounded-xl p-6 text-amber-900">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-bold text-base mb-1">คำแนะนำสำหรับนักเรียนและบุคลากร</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                หากนักเรียนพบของมีค่า (เช่น โทรศัพท์มือถือ เงินสด สร้อยคอ บัตรสำคัญ) ขอความกรุณานำส่งห้องกิจการนักเรียน (ห้อง 112 อาคาร 1) เพื่อความปลอดภัยในการส่งคืนเจ้าของ หรือหากของหาย สามารถแจ้งข้อมูลและมาตรวจสอบได้ที่ห้องกิจการนักเรียนในเวลาทำการ
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
