import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto border-t border-slate-800 pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center space-x-2.5 mb-3">
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-blue-950 font-black text-xs shadow">
                BJ3
              </div>
              <span className="font-extrabold text-lg text-white">BJ3 Lost & Found</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              ระบบศูนย์กลางแจ้งของหายและส่งคืนของที่พบ สำหรับนักเรียน ครู และบุคลากร โรงเรียน BJ3
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-3">เมนูลัด</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  หน้าแรก (Home)
                </Link>
              </li>
              <li>
                <Link href="/lost" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  รายการของที่หาย (Lost Items)
                </Link>
              </li>
              <li>
                <Link href="/found" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  รายการของที่เก็บได้ (Found Items)
                </Link>
              </li>
              <li>
                <Link href="/report" className="hover:text-amber-400 transition-colors py-1 inline-block text-amber-400 font-semibold">
                  + แจ้งข้อมูลของหาย / พบของ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-3">ติดต่อห้องกิจการนักเรียน</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              โรงเรียน BJ3<br />
              หากพบสิ่งของมีค่า กรุณานำส่งที่ห้องกิจการนักเรียน อาคาร 1<br />
              โทรศัพท์: 035-XXXXXX
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BJ3 Lost & Found. โรงเรียน BJ3. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
