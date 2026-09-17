# 🎒 BJ3 Lost & Found (ระบบแจ้งของหายและค้นหาของที่หาย โรงเรียน BJ3)

ระบบเว็บแอปพลิเคชันสำหรับศูนย์กลางแจ้งของหายและส่งคืนของที่พบภายใน **โรงเรียน BJ3 (บรรหารแจ่มใสวิทยา 3)** รองรับการใช้งานเต็มรูปแบบทั้งบน **สมาร์ตโฟน (Android & iOS/iPhone), แท็บเล็ต (iPad, iPad Air, iPad Pro, Android Tablets)** และคอมพิวเตอร์

---

## ✨ คุณสมบัติเด่น (Features)

1. **📱 ออกแบบเพื่อโทรศัพท์และไอแพด (Mobile & iPad First)**:
   - **รองรับทุกระบบปฏิบัติการ**: ใช้งานได้ลื่นไหลทั้ง Android และ iOS (iPhone, iPad)
   - **Mobile Bottom Navigation**: แถบนำทางด้านล่างหน้าจอ สะดวกต่อการใช้นิ้วโป้งกดบนมือถือ
   - **Safe Area Support**: รองรับรอยบาก (Notch) และแถบ Home Bar ของ iPhone/iPad อย่างสมบูรณ์
   - **รองรับการติดตั้งลงหน้าจอโฮม (PWA / Add to Home Screen)**: มีไฟล์ `manifest.json` และ Apple Web App Meta tags สามารถกด "เพิ่มไปยังหน้าจอโฮม" เพื่อใช้งานเหมือนแอปจริงได้ทันที
   - **Interactive Modal**: กดดูรายละเอียดสิ่งของจะเปิด Pop-up Modal สวยงาม พร้อมปุ่ม "โทรติดต่อทันที" สำหรับโทรศัพท์
2. **🏠 หน้าแรก (Landing Page)**: สรุปสถิติสิ่งของที่หายและเก็บได้ พร้อมแสดงรายการสิ่งของอัปเดตล่าสุด
3. **🔍 ค้นหาและคัดกรอง (Search & Filter)**: ค้นหาด้วยคำสำคัญ (เช่น ชื่อสิ่งของ หรือสถานที่) และคัดกรองตามหมวดหมู่ได้สะดวกรวดเร็ว
4. **🔴 หน้ารวมของที่หาย (Lost Items)**: รวบรวมรายการสิ่งของที่กำลังตามหา พร้อมวันที่และสถานที่คาดว่าหาย
5. **🟢 หน้ารวมของที่เก็บได้ (Found Items)**: รวบรวมสิ่งของที่พบและรอส่งคืนเจ้าของ พร้อมจุดติดต่อรับของ
6. **📝 แบบฟอร์มแจ้งของหาย / พบของ (Report Form)**: กรอกข้อมูลและบันทึกข้อมูลได้ง่าย ตัวอักษรขนาดมาตรฐาน ป้องกันปัญหากล้องซูมเข้าอัตโนมัติบน Safari iOS

---

## 🛠 เทคโนโลยีที่ใช้ (Tech Stack)

- **Framework**: [Next.js 14](https://nextjs.org/) (Pages Router)
- **Frontend Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Mobile Capabilities**: Progressive Web App (PWA) Manifest, Apple Mobile Web App Metas, CSS Viewport-fit & Env Safe-area

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
bjs3-lost-and-found/
├── public/
│   ├── images/
│   │   └── logo.svg          # โลโก้ตราสัญลักษณ์โรงเรียน BJ3
│   └── manifest.json         # Web App Manifest สำหรับติดตั้งบน Android / iOS
├── src/
│   ├── components/
│   │   ├── Navbar.js         # แถบนำทางด้านบน (Navigation Bar สำหรับ Desktop & iPad)
│   │   ├── BottomNav.js      # แถบนำทางด้านล่างสำหรับมือถือ (Mobile Bottom Tab Bar)
│   │   ├── Footer.js         # ส่วนท้ายเว็บไซต์ (Footer)
│   │   ├── ItemCard.js       # การ์ดแสดงสิ่งของ พร้อม Modal ดูรายละเอียดและปุ่มโทร
│   │   └── SearchBar.js      # ช่องค้นหาและตัวกรองหมวดหมู่ Touch-friendly
│   ├── pages/
│   │   ├── _app.js           # Next.js App Wrapper โหลด Global CSS, PWA, Meta Tags
│   │   ├── index.js          # หน้าแรกของเว็บ (Landing Page)
│   │   ├── lost.js           # หน้ารวมของที่หาย
│   │   ├── found.js          # หน้ารวมของที่เก็บได้
│   │   └── report.js         # หน้าฟอร์มแจ้งของหาย / พบของ
│   ├── styles/
│   │   └── globals.css       # สไตล์ส่วนกลาง, Safe Area และแก้ปัญหา iOS Safari Zoom
│   └── utils/
│       └── api.js            # Mock Data ตัวอย่าง และฟังก์ชันจัดการข้อมูลสิ่งของ
├── jsconfig.json             # กำหนด Path Alias (@/*)
├── package.json              # รายการ Dependencies และ Scripts
├── postcss.config.js         # การตั้งค่า PostCSS
├── tailwind.config.js        # การตั้งค่าสไตล์ Tailwind CSS
└── README.md                 # คู่มือและเอกสารประกอบโปรเจกต์
```

---

## 🚀 วิธีการติดตั้งและรันโปรเจกต์ (Getting Started)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รันในโหมด Development
```bash
npm run dev
```
เปิดเบราว์เซอร์แล้วเข้าไปที่: [http://localhost:3000](http://localhost:3000)

*(หากต้องการทดสอบบนมือถือหรือ iPad ที่เชื่อมต่อ Wi-Fi เดียวกัน ให้รัน `npm run dev -- -H 0.0.0.0` แล้วเข้าผ่าน IP เครื่องคอมพิวเตอร์ของคุณ เช่น `http://192.168.1.X:3000`)*

### 3. Build สำหรับ Production
```bash
npm run build
npm start
```

---

## 🏫 ติดต่อประสานงาน
- **หน่วยงาน**: งานกิจการนักเรียน โรงเรียน BJ3 (บรรหารแจ่มใสวิทยา 3)
- **สถานที่รับสิ่งของมีค่า**: ห้องกิจการนักเรียน อาคาร 1 (ห้อง 112)
