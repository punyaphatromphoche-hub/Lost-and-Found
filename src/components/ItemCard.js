import { useState } from 'react';

export default function ItemCard({ item }) {
  const [imgError, setImgError] = useState(false);
  const isLost = item.type === 'lost';

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden transition-all duration-200 flex flex-col h-full group">
      {/* Image container */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden flex items-center justify-center">
        {item.imageUrl && !imgError ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center">
            <svg
              className="w-12 h-12 mb-2 stroke-current opacity-60"
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
            <span className="text-xs">ไม่มีรูปภาพ</span>
          </div>
        )}

        {/* Type Badge */}
        <span
          className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full shadow-sm ${
            isLost
              ? 'bg-rose-100 text-rose-700 border border-rose-200'
              : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
          }`}
        >
          {isLost ? '🔴 ของที่หาย' : '🟢 ของที่เก็บได้'}
        </span>

        {/* Category Tag */}
        {item.category && (
          <span className="absolute bottom-3 left-3 px-2 py-0.5 text-xs font-medium bg-slate-900/70 text-white rounded-md backdrop-blur-sm">
            {item.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-slate-800 text-lg mb-2 line-clamp-1 group-hover:text-blue-700 transition-colors">
            {item.title}
          </h3>

          {item.description && (
            <p className="text-slate-600 text-sm mb-3 line-clamp-2">
              {item.description}
            </p>
          )}

          <div className="space-y-1.5 text-xs text-slate-500">
            {/* Location */}
            <div className="flex items-center space-x-1.5">
              <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate">
                <strong className="font-medium text-slate-700">{isLost ? 'สถานที่หาย:' : 'สถานที่พบ:'}</strong> {item.location || 'ไม่ได้ระบุ'}
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center space-x-1.5">
              <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                <strong className="font-medium text-slate-700">วันที่:</strong> {item.date || 'ไม่ได้ระบุ'}
              </span>
            </div>
          </div>
        </div>

        {/* Card Footer / Contact info */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            ติดต่อ: <span className="font-medium text-slate-700">{item.contactName || 'ห้องกิจการนักเรียน'}</span>
          </span>
          <button
            type="button"
            onClick={() => alert(`ข้อมูลติดต่อ: ${item.contactName || 'ห้องกิจการนักเรียน'}\nเบอร์/ช่องทางติดต่อ: ${item.contactInfo || 'ติดต่อที่ห้อง 112'}\nรายละเอียด: ${item.description || '-'}`)}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded transition-colors"
          >
            ดูรายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
}
