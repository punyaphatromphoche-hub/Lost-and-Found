import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ItemCard from '@/components/ItemCard';
import SearchBar from '@/components/SearchBar';
import { filterItems } from '@/utils/api';

export default function LostPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(filterItems({ type: 'lost' }));
  }, []);

  const handleSearch = ({ keyword, category }) => {
    setItems(filterItems({ type: 'lost', keyword, category }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Header Banner */}
        <div className="bg-rose-600 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-rose-700/70 text-rose-100 text-xs font-semibold mb-2">
              🔴 Lost Items
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              รายการสิ่งของที่หาย
            </h1>
            <p className="text-rose-100 text-sm mt-1 max-w-xl">
              รวมรายการสิ่งของที่นักเรียนและคุณครูแจ้งว่าสูญหายภายในโรงเรียนบรรหารแจ่มใสวิทยา 3 หากคุณพบเห็นสามารถติดต่อส่งคืนได้
            </p>
          </div>
          <Link
            href="/report?type=lost"
            className="whitespace-nowrap px-5 py-2.5 bg-white text-rose-700 hover:bg-rose-50 font-bold text-sm rounded-xl shadow transition-all hover:scale-105"
          >
            + แจ้งของหาย
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} placeholder="ค้นหาของที่หาย เช่น กระเป๋าเงิน, บัตรนักเรียน..." />
        </div>

        {/* Results Counter */}
        <div className="mb-4 text-sm text-slate-500 font-medium">
          พบของที่หายทั้งหมด: <span className="text-rose-600 font-bold">{items.length}</span> รายการ
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
            <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
              🔍
            </div>
            <h3 className="font-bold text-slate-700 text-lg mb-1">ไม่พบรายการของที่หาย</h3>
            <p className="text-slate-500 text-sm mb-4">
              ยังไม่มีการแจ้งของหายตามคำค้นหานี้ หรือคุณอาจลองเปลี่ยนคำค้นหา
            </p>
            <Link
              href="/report?type=lost"
              className="inline-block px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-semibold hover:bg-rose-700"
            >
              แจ้งของหายที่นี่
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
