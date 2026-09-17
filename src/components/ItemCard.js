import { useState } from 'react';

export default function ItemCard({ item }) {
  const [imgError, setImgError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const isLost = item.type === 'lost';

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden transition-all duration-200 flex flex-col h-full group">
        {/* Image container */}
        <div className="relative h-44 sm:h-48 md:h-52 w-full bg-slate-100 overflow-hidden flex items-center justify-center">
          {item.imageUrl && !imgError ? (
            <img
              src={item.imageUrl}
              alt={item.title}
              onError={() => setImgError(true)}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center">
              <svg
                className="w-12 h-12 mb-2 stroke-current opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-medium">ไม่มีรูปภาพ</span>
            </div>
          )}

          {/* Type Badge */}
          <span
            className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full shadow-sm ${
              isLost
                ? 'bg-rose-500 text-white'
                : 'bg-emerald-500 text-white'
            }`}
          >
            {isLost ? '🔴 ของที่หาย' : '🟢 ของที่เก็บได้'}
          </span>

          {/* Category Tag */}
          {item.category && (
            <span className="absolute bottom-3 left-3 px-2.5 py-1 text-[11px] font-semibold bg-slate-900/80 text-white rounded-lg backdrop-blur-sm shadow">
              {item.category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-1.5 line-clamp-1 group-hover:text-blue-700 transition-colors">
              {item.title}
            </h3>

            {item.description && (
              <p className="text-slate-600 text-xs sm:text-sm mb-3 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            )}

            <div className="space-y-1.5 text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              {/* Location */}
              <div className="flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate">
                  <strong className="font-semibold text-slate-700">{isLost ? 'สถานที่หาย:' : 'สถานที่พบ:'}</strong> {item.location || 'ไม่ได้ระบุ'}
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                  <strong className="font-semibold text-slate-700">วันที่:</strong> {item.date || 'ไม่ได้ระบุ'}
                </span>
              </div>
            </div>
          </div>

          {/* Card Footer / View Details Button */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <span className="text-xs text-slate-500 truncate">
              โดย: <span className="font-medium text-slate-700">{item.contactName || 'ห้องกิจการนักเรียน'}</span>
            </span>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="min-h-[38px] px-3.5 py-1.5 text-xs font-bold text-blue-800 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 rounded-xl transition-all touch-active whitespace-nowrap shadow-xs"
            >
              ดูรายละเอียด
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & iPad Friendly Details Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => setShowModal(false)}
          />
          <div className="relative z-10 bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto p-5 sm:p-6 text-left">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-slate-100 mb-4">
              <div>
                <span
                  className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-full mb-1.5 ${
                    isLost ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  {isLost ? '🔴 รายการของหาย' : '🟢 รายการของที่เก็บได้'}
                </span>
                <h4 className="text-lg sm:text-xl font-black text-slate-800">
                  {item.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-2 -mr-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="ปิด"
              >
                ✕
              </button>
            </div>

            {/* Modal Image */}
            {item.imageUrl && !imgError && (
              <div className="mb-4 rounded-2xl overflow-hidden max-h-56 bg-slate-100">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Modal Details List */}
            <div className="space-y-3 text-sm text-slate-700 mb-6">
              {item.category && (
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">หมวดหมู่</span>
                  <span className="font-medium text-slate-800">{item.category}</span>
                </div>
              )}

              <div>
                <span className="text-xs text-slate-400 font-semibold block">
                  {isLost ? 'สถานที่ที่คาดว่าหาย' : 'สถานที่ที่พบ'}
                </span>
                <span className="font-medium text-slate-800">{item.location || 'ไม่ได้ระบุ'}</span>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-semibold block">วันที่</span>
                <span className="font-medium text-slate-800">{item.date || 'ไม่ได้ระบุ'}</span>
              </div>

              {item.description && (
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-semibold block mb-1">รายละเอียดเพิ่มเติม</span>
                  <p className="text-slate-800 leading-relaxed text-sm whitespace-pre-wrap">{item.description}</p>
                </div>
              )}

              <div className="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200">
                <span className="text-xs text-amber-900 font-bold block mb-1">ข้อมูลติดต่อผู้แจ้ง / จุดรับของ</span>
                <p className="font-semibold text-slate-800 text-sm">
                  ชื่อ: {item.contactName || 'ห้องกิจการนักเรียน โรงเรียน BJ3'}
                </p>
                <p className="text-slate-700 text-sm mt-0.5">
                  ช่องทาง: {item.contactInfo || 'ติดต่อได้ที่ห้อง 112 อาคาร 1'}
                </p>
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="space-y-2">
              {item.contactInfo && item.contactInfo.match(/0\d{8,9}/) && (
                <a
                  href={`tel:${item.contactInfo.match(/0\d{8,9}/)[0]}`}
                  className="w-full min-h-[46px] flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow transition-colors touch-active"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>โทรติดต่อทันที</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-full min-h-[46px] bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 font-semibold rounded-xl transition-colors touch-active"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
