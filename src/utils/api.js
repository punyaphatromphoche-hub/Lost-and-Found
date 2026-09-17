// Mock initial data for Lost & Found items (BJ3 School)
const INITIAL_ITEMS = [
  {
    id: 'item-1',
    type: 'lost',
    title: 'กระเป๋าสตางค์สีดำ ลายสปอร์ต',
    category: 'กระเป๋า / กระเป๋าเงิน',
    location: 'โรงอาหาร ชั้น 1 ใกล้ร้านน้ำ',
    date: '2026-09-02',
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60',
    description: 'กระเป๋าสตางค์ยี่ห้อ Converse ข้างในมีบัตรนักเรียน บัตรประชาชน และเงินสดจำนวนหนึ่ง',
    contactName: 'เด็กชายสมชาย ใจดี ม.3/1',
    contactInfo: 'โทร. 081-234-5678 หรือห้อง 224',
    status: 'searching',
    createdAt: '2026-09-02T10:30:00Z',
  },
  {
    id: 'item-2',
    type: 'found',
    title: 'หูฟังบลูทูธเคสสีขาว',
    category: 'อิเล็กทรอนิกส์',
    location: 'ห้องสมุด อาคาร 3 โต๊ะริมหน้าต่าง',
    date: '2026-09-03',
    imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60',
    description: 'พบหูฟังไร้สายเคสสีขาว มีสติกเกอร์รูปการ์ตูนแมวดำติดอยู่ที่เคส',
    contactName: 'ครูบรรณารักษ์ ห้องสมุด',
    contactInfo: 'ติดต่อรับได้ที่เคาน์เตอร์ยืม-คืน ห้องสมุด',
    status: 'found',
    createdAt: '2026-09-03T08:15:00Z',
  },
  {
    id: 'item-3',
    type: 'lost',
    title: 'ขวดน้ำเก็บความเย็นสีฟ้า ยี่ห้อ Stanley',
    category: 'อุปกรณ์การเรียน',
    location: 'สนามฟุตบอล ใต้อัฒจันทร์',
    date: '2026-09-01',
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60',
    description: 'ขวดน้ำสีฟ้าพาสเทล มีสติกเกอร์ชื่อ "Nicha" ติดอยู่ข้างขวด หายหลังคาบพละ',
    contactName: 'ณิชา ม.5/2',
    contactInfo: 'IG: nicha_bj3',
    status: 'searching',
    createdAt: '2026-09-01T15:40:00Z',
  },
  {
    id: 'item-4',
    type: 'found',
    title: 'พวงกุญแจตุ๊กตาหมีสีน้ำตาล พร้อมกุญแจ 2 ดอก',
    category: 'กุญแจ',
    location: 'ม้านั่งหน้าอาคารเรียน 2',
    date: '2026-09-03',
    imageUrl: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=500&auto=format&fit=crop&q=60',
    description: 'พวงกุญแจรูปหมี มีกุญแจมอเตอร์ไซค์ 1 ดอก และกุญแจบ้าน 1 ดอก นำฝากไว้ที่ห้องประชาสัมพันธ์แล้ว',
    contactName: 'ห้องประชาสัมพันธ์ โรงเรียน BJ3',
    contactInfo: 'อาคาร 1 ชั้น 1 โทร. 035-XXXXXX ต่อ 101',
    status: 'found',
    createdAt: '2026-09-03T07:45:00Z',
  },
  {
    id: 'item-5',
    type: 'lost',
    title: 'เครื่องคิดเลขวิทยาศาสตร์ Casio fx-991EX',
    category: 'อุปกรณ์การเรียน',
    location: 'ห้องปฏิบัติการวิทยาศาสตร์ อาคาร 4',
    date: '2026-08-31',
    imageUrl: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=500&auto=format&fit=crop&q=60',
    description: 'ด้านหลังเครื่องมีสลักชื่อ "K. Tanawat" ด้วยปากกาเมจิกสีดำ ลืมไว้หลังสอบย่อย',
    contactName: 'ธนวัฒน์ ม.6/4',
    contactInfo: 'โทร. 089-987-6543',
    status: 'searching',
    createdAt: '2026-08-31T16:00:00Z',
  },
  {
    id: 'item-6',
    type: 'found',
    title: 'เสื้อกันหนาวแขนยาวมีฮู้ด สีกรมท่า',
    category: 'เสื้อผ้า / เครื่องแต่งกาย',
    location: 'โรงยิมเนเซียม',
    date: '2026-09-02',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60',
    description: 'เสื้อวอร์มสีกรมท่า ปักตราโรงเรียน BJ3 ด้านหน้า ขนาด L พบตกอยู่บนอัฒจันทร์โรงยิม',
    contactName: 'ครูเวรประจำโรงยิม',
    contactInfo: 'ติดต่อห้องพักครูพลศึกษา',
    status: 'found',
    createdAt: '2026-09-02T17:10:00Z',
  },
];

const STORAGE_KEY = 'bj3_lost_and_found_items';

/**
 * Get all items from local storage or default dataset
 */
export function getItems() {
  if (typeof window === 'undefined') {
    return INITIAL_ITEMS;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_ITEMS));
    return INITIAL_ITEMS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return INITIAL_ITEMS;
  }
}

/**
 * Filter items by type ('lost', 'found', or 'all') and optional criteria
 */
export function filterItems({ type = 'all', keyword = '', category = 'all' } = {}) {
  const items = getItems();
  return items.filter((item) => {
    // Match type
    if (type !== 'all' && item.type !== type) return false;

    // Match category
    if (category !== 'all' && item.category !== category) return false;

    // Match keyword
    if (keyword.trim()) {
      const q = keyword.trim().toLowerCase();
      const matchTitle = item.title?.toLowerCase().includes(q);
      const matchLoc = item.location?.toLowerCase().includes(q);
      const matchDesc = item.description?.toLowerCase().includes(q);
      if (!matchTitle && !matchLoc && !matchDesc) return false;
    }

    return true;
  });
}

/**
 * Add a new lost or found item report
 */
export function addItem(itemData) {
  const current = getItems();
  const newItem = {
    id: `item-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: itemData.type === 'lost' ? 'searching' : 'found',
    ...itemData,
  };
  const updated = [newItem, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return newItem;
}
