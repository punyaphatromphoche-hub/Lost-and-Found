import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { addItem } from '@/utils/api';

export default function ReportPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    type: 'lost',
    title: '',
    category: 'อุปกรณ์การเรียน',
    location: '',
    date: new Date().toISOString().split('T')[0],
    imageUrl: '',
    description: '',
    contactName: '',
    contactInfo: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (router.query.type === 'found' || router.query.type === 'lost') {
      setFormData((prev) => ({ ...prev, type: router.query.type }));
    }
  }, [router.query.type]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.location) {
      alert('กรุณากรอกชื่อสิ่งของและสถานที่');
      return;
    }

    addItem(formData);
    setSubmitted(true);

    setTimeout(() => {
      if (formData.type === 'lost') {
        router.push('/lost');
      } else {
        router.push('/found');
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1 w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-full mb-2">
            🏫 โรงเรียน BJ3
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800">
            แบบฟอร์มแจ้งของหาย / พบของ
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-lg mx-auto">
            กรอกข้อมูลรายละเอียดสิ่งของเพื่อช่วยในการตามหา หรือส่งคืนเจ้าของตัวจริงในโรงเรียน BJ3
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center animate-fadeIn shadow-sm">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              ✓
            </div>
            <h2 className="text-xl font-bold text-emerald-800 mb-1">
              บันทึกข้อมูลเรียบร้อยแล้ว!
            </h2>
            <p className="text-emerald-700 text-sm">
              กำลังนำท่านไปยังหน้ารายการ...
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-md border border-slate-200 p-5 sm:p-8 space-y-5 sm:space-y-6"
          >
            {/* Type Selector Tabs */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2">
                ประเภทการแจ้ง <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'lost' })}
                  className={`min-h-[50px] py-3 px-3 sm:px-4 rounded-2xl border text-sm font-bold flex items-center justify-center space-x-1.5 transition-all touch-active ${
                    formData.type === 'lost'
                      ? 'border-rose-500 bg-rose-50 text-rose-700 ring-2 ring-rose-500 shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span>🔴 แจ้งของหาย</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'found' })}
                  className={`min-h-[50px] py-3 px-3 sm:px-4 rounded-2xl border text-sm font-bold flex items-center justify-center space-x-1.5 transition-all touch-active ${
                    formData.type === 'found'
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-500 shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span>🟢 แจ้งพบของ</span>
                </button>
              </div>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                ชื่อสิ่งของ <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="เช่น กระเป๋าสตางค์ใบสั้น, โทรศัพท์ iPhone, เสื้อกันหนาว"
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm shadow-xs"
              />
            </div>

            {/* Category & Date Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="category" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  หมวดหมู่ <span className="text-rose-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm shadow-xs"
                >
                  <option value="อุปกรณ์การเรียน">อุปกรณ์การเรียน</option>
                  <option value="อิเล็กทรอนิกส์">อิเล็กทรอนิกส์ (โทรศัพท์/หูฟัง)</option>
                  <option value="กระเป๋า / กระเป๋าเงิน">กระเป๋า / กระเป๋าเงิน</option>
                  <option value="เสื้อผ้า / เครื่องแต่งกาย">เสื้อผ้า / เครื่องแต่งกาย</option>
                  <option value="บัตร / เอกสาร">บัตร / เอกสารสำคัญ</option>
                  <option value="กุญแจ">กุญแจ</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  {formData.type === 'lost' ? 'วันที่หาย' : 'วันที่พบ'} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm shadow-xs"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                {formData.type === 'lost' ? 'สถานที่ที่คาดว่าหาย' : 'สถานที่ที่พบสิ่งของ'} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="เช่น โรงอาหาร, ห้อง 224 อาคาร 2, สนามฟุตบอล"
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm shadow-xs"
              />
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="imageUrl" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                ลิงก์รูปภาพสิ่งของ (URL)
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                inputMode="url"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg (ถ้ามี)"
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm shadow-xs"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                หากไม่มีลิงก์รูปภาพ ระบบจะใส่ภาพไอคอนทดแทนให้โดยอัตโนมัติ
              </p>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                รายละเอียดเพิ่มเติม / จุดสังเกต
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="ระบุสี, รอยตำหนิ, สติกเกอร์ หรือสิ่งของที่อยู่ด้านใน..."
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm shadow-xs"
              />
            </div>

            {/* Contact Information Section */}
            <div className="pt-4 border-t border-slate-200">
              <h3 className="font-bold text-slate-800 text-sm mb-3">
                ข้อมูลผู้แจ้ง / ช่องทางติดต่อ
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label htmlFor="contactName" className="block text-xs font-semibold text-slate-600 mb-1">
                    ชื่อ-นามสกุล / ชั้นเรียน
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="เช่น สมชาย ใจดี ม.3/1"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm shadow-xs"
                  />
                </div>
                <div>
                  <label htmlFor="contactInfo" className="block text-xs font-semibold text-slate-600 mb-1">
                    เบอร์โทรศัพท์ / LINE ID
                  </label>
                  <input
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    inputMode="tel"
                    value={formData.contactInfo}
                    onChange={handleChange}
                    placeholder="เช่น 081-xxx-xxxx, Line: @bj3"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm shadow-xs"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full min-h-[52px] py-3.5 px-4 rounded-2xl text-white font-bold text-base shadow-md transition-all touch-active flex items-center justify-center space-x-2 ${
                formData.type === 'lost'
                  ? 'bg-rose-600 hover:bg-rose-700 active:bg-rose-800 shadow-rose-200'
                  : 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-emerald-200'
              }`}
            >
              <span>{formData.type === 'lost' ? '📢 ส่งข้อมูลแจ้งของหาย' : '🟢 ส่งข้อมูลแจ้งพบของ'}</span>
            </button>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}
