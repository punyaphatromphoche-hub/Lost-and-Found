import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ItemCard from '@/components/ItemCard';
import SearchBar from '@/components/SearchBar';
import { getItems, filterItems, subscribeItems } from '@/utils/api';

export default function LostPage() {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useState({ keyword: '', category: 'all' });

  // ฟังก์ชันโหลดข้อมูลของหายจาก localStorage
  const refreshData = useCallback((params = searchParams) => {
    const all = getItems();
    setItems(filterItems({ type: 'lost', keyword: params.keyword, category: params.category, items: all }));
  }, [searchParams]);

  useEffect(() => {
    refreshData();

    // ติดตามการอัปเดตแบบเรียลไทม์เมื่อมีการแจ้งของหายเพิ่ม
    const unsubscribe = subscribeItems(() => {
      refreshData();
    });

    return () => unsubscribe();
  }, [refreshData]);

  const handleSearch = ({ keyword, category }) => {
    const nextParams = { keyword, category };
    setSearchParams(nextParams);
    refreshData(nextParams);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 w-full">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-rose-800/80 text-rose-100 text-xs font-bold mb-2">
              🔴 Lost Items
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              รายการสิ่งของที่หาย
            </h1>
            <p className="text-rose-100 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
              รวมรายการสิ่งของที่นักเรียนและคุณครูแจ้งว่าสูญหายภายในโรงเรียน BJ3 หากคุณพบเห็นสามารถติดต่อส่งคืนได้
            </p>
          </div>
          <Link
            href="/report?type=lost"
            className="w-full sm:w-auto text-center min-h-[44px] px-5 py-2.5 bg-white text-rose-700 hover:bg-rose-50 active:bg-rose-100 font-bold text-sm rounded-xl shadow transition-all touch-active flex items-center justify-center"
          >
            + แจ้งของหาย
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-5 sm:mb-6">
          <SearchBar onSearch={handleSearch} placeholder="ค้นหาของที่หาย เช่น กระเป๋าเงิน, บัตรนักเรียน..." />
        </div>

        {/* Results Counter */}
        <div className="mb-4 text-xs sm:text-sm text-slate-500 font-medium">
          พบของที่หายทั้งหมด: <span className="text-rose-600 font-bold text-base">{items.length}</span> รายการ
        </div>

        {/* Items Grid */}
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
              🔍
            </div>
            <h3 className="font-bold text-slate-700 text-base sm:text-lg mb-1">ไม่พบรายการของที่หาย</h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-4">
              ยังไม่มีการแจ้งของหายตามคำค้นหานี้ หรือคุณอาจลองเปลี่ยนคำค้นหา
            </p>
            <Link
              href="/report?type=lost"
              className="inline-block px-5 py-2.5 bg-rose-600 text-white rounded-xl text-sm font-bold hover:bg-rose-700 touch-active"
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
