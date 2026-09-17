import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ItemCard from '@/components/ItemCard';
import SearchBar from '@/components/SearchBar';
import { getItems, fetchItems, filterItems, subscribeItems } from '@/utils/api';

export default function FoundPage() {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useState({ keyword: '', category: 'all' });

  // ฟังก์ชันโหลดข้อมูลของที่เก็บได้จากแคช และดึงข้อมูลสดจาก Supabase Cloud
  const refreshData = useCallback(async (params = searchParams) => {
    // แสดงแคชก่อนทันที
    const cached = getItems();
    setItems(filterItems({ type: 'found', keyword: params.keyword, category: params.category, items: cached }));

    // ซิงค์ข้อมูลล่าสุดจาก Cloud Database
    const cloud = await fetchItems();
    if (cloud && cloud.length > 0) {
      setItems(filterItems({ type: 'found', keyword: params.keyword, category: params.category, items: cloud }));
    }
  }, [searchParams]);

  useEffect(() => {
    refreshData();

    // ติดตามการอัปเดตแบบเรียลไทม์ (เมื่อมีเครื่องอื่นแจ้งพบของ ข้อมูลจะขึ้นทันที)
    const unsubscribe = subscribeItems((updatedList) => {
      if (updatedList) {
        setItems(filterItems({ type: 'found', keyword: searchParams.keyword, category: searchParams.category, items: updatedList }));
      } else {
        refreshData();
      }
    });

    return () => unsubscribe();
  }, [refreshData, searchParams]);

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
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-100 text-xs font-bold mb-2">
              🟢 Found Items
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              รายการสิ่งของที่เก็บได้
            </h1>
            <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
              รวมรายการสิ่งของที่เก็บได้ในโรงเรียน BJ3 รอเจ้าของมาติดต่อขอรับคืน ข้อมูลออนไลน์ซิงค์ตรงกันทุกอุปกรณ์
            </p>
          </div>
          <Link
            href="/report?type=found"
            className="w-full sm:w-auto text-center min-h-[44px] px-5 py-2.5 bg-white text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100 font-bold text-sm rounded-xl shadow transition-all touch-active flex items-center justify-center"
          >
            + แจ้งพบของ
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-5 sm:mb-6">
          <SearchBar onSearch={handleSearch} placeholder="ค้นหาของที่เก็บได้ เช่น กุญแจ, หูฟัง, เสื้อกันหนาว..." />
        </div>

        {/* Results Counter */}
        <div className="mb-4 text-xs sm:text-sm text-slate-500 font-medium">
          พบของที่เก็บได้ทั้งหมด: <span className="text-emerald-600 font-bold text-base">{items.length}</span> รายการ
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
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
              📦
            </div>
            <h3 className="font-bold text-slate-700 text-base sm:text-lg mb-1">ไม่พบรายการของที่เก็บได้</h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-4">
              ยังไม่มีการแจ้งเก็บของได้ตามคำค้นหานี้
            </p>
            <Link
              href="/report?type=found"
              className="inline-block px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 touch-active"
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
