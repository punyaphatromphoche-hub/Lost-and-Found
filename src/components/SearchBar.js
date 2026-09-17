import { useState } from 'react';

export default function SearchBar({ onSearch, placeholder = 'ค้นหาชื่อสิ่งของ, สถานที่...' }) {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'ทุกหมวดหมู่' },
    { value: 'อุปกรณ์การเรียน', label: 'อุปกรณ์การเรียน' },
    { value: 'อิเล็กทรอนิกส์', label: 'อิเล็กทรอนิกส์ (โทรศัพท์/หูฟัง)' },
    { value: 'กระเป๋า / กระเป๋าเงิน', label: 'กระเป๋า / กระเป๋าเงิน' },
    { value: 'เสื้อผ้า / เครื่องแต่งกาย', label: 'เสื้อผ้า / เครื่องแต่งกาย' },
    { value: 'บัตร / เอกสาร', label: 'บัตร / เอกสารสำคัญ' },
    { value: 'กุญแจ', label: 'กุญแจ' },
    { value: 'อื่นๆ', label: 'อื่นๆ' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ keyword, category });
    }
  };

  const handleClear = () => {
    setKeyword('');
    setCategory('all');
    if (onSearch) {
      onSearch({ keyword: '', category: 'all' });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-3.5 sm:p-4 rounded-2xl shadow-md border border-slate-200"
    >
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-11 pr-10 py-3 sm:py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs"
          />
          {keyword && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 text-xs font-semibold touch-active"
            >
              ล้าง
            </button>
          )}
        </div>

        {/* Category Select */}
        <div className="w-full sm:w-52 md:w-60">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm text-slate-700 shadow-xs"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full sm:w-auto min-h-[44px] px-6 py-3 sm:py-2.5 bg-blue-800 hover:bg-blue-900 active:bg-blue-950 text-white text-base sm:text-sm font-bold rounded-xl shadow transition-all touch-active flex items-center justify-center space-x-2"
        >
          <svg className="w-4 h-4 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>ค้นหา</span>
        </button>
      </div>
    </form>
  );
}
