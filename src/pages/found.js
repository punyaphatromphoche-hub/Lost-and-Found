import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ItemCard from '@/components/ItemCard';
import SearchBar from '@/components/SearchBar';
import { filterItems } from '@/utils/api';

export default function FoundPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(filterItems({ type: 'found' }));
  }, []);

  const handleSearch = ({ keyword, category }) => {
    setItems(filterItems({ type: 'found', keyword, category }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Header Banner */}
        <div className="bg-emerald-600 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-700/70 text-emerald-100 text-xs font-semibold mb-2">
              🟢 Found Items
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              รายการสิ่งของที่เก็บได้
            </h1>
            <p className="text-emerald-100 text-sm mt-1 max-w-xl">
              รวมรายการสิ่งของที่เก็บได้ในโรงเรียนบรรหารแจ่มใสวิทยา 3 รอเจ้าของมาติดต่อขอรับคืน หากคิดว่าเป็นของคุณ กรุณาเตรียมหลักฐานยืนยันความเป็นเจ้าของ
            </p>
          </div>
          <Link
            href="/report?type=found"
            className="whitespace-nowrap px-5 py-2.5 bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-sm rounded-xl shadow transition-all hover:scale-105"
          >
            + แจ้งพบของ
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} placeholder="ค้นหาของที่เก็บได้ เช่น กุญแจ, หูฟัง, เสื้อกันหนาว..." />
        </div>

        {/* Results Counter */}
        <div className="mb-4 text-sm text-slate-500 font-medium">
          พบของที่เก็บได้ทั้งหมด: <span className="text-emerald-600 font-bold">{items.length}</span> รายการ
        </div>

        {/* Items Grid */}
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
              📦
            </div>
            <h3 className="font-bold text-slate-700 text-lg mb-1">ไม่พบรายการของที่เก็บได้</h3>
            <p className="text-slate-500 text-sm mb-4">
              ยังไม่มีการแจ้งเก็บของได้ตามคำค้นหานี้
            </p>
            <Link
              href="/report?type=found"
              className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700"
            >
              แจ้งพบของที่นี่
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
