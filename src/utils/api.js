import { supabase } from './supabase';

// Mock initial data for Lost & Found items (BJ3 School)
export const INITIAL_ITEMS = [
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

export const STORAGE_KEY = 'bj3_lost_and_found_items';

/**
 * แปลงฟิลด์จากรูปแบบฐานข้อมูล Supabase มาเป็น CamelCase ในแอป
 */
function mapFromDb(row) {
  return {
    id: row.id,
    type: row.type,
    title: row.title,
    category: row.category,
    location: row.location,
    date: row.date,
    imageUrl: row.image_url || row.imageUrl || '',
    description: row.description || '',
    contactName: row.contact_name || row.contactName || '',
    contactInfo: row.contact_info || row.contactInfo || '',
    status: row.status || (row.type === 'lost' ? 'searching' : 'found'),
    createdAt: row.created_at || row.createdAt || new Date().toISOString(),
  };
}

/**
 * แปลงฟิลด์จากแอปไปเป็นรูปแบบฐานข้อมูล Supabase
 */
function mapToDb(item) {
  return {
    id: item.id,
    type: item.type,
    title: item.title,
    category: item.category,
    location: item.location,
    date: item.date,
    image_url: item.imageUrl || '',
    description: item.description || '',
    contact_name: item.contactName || '',
    contact_info: item.contactInfo || '',
    status: item.status || (item.type === 'lost' ? 'searching' : 'found'),
    created_at: item.createdAt || new Date().toISOString(),
  };
}

/**
 * ดึงข้อมูลทันทีแบบ Synchronous จาก localStorage (ใช้สำหรับ Initial Render / Fallback)
 */
export function getItems() {
  if (typeof window === 'undefined') {
    return INITIAL_ITEMS;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null && stored !== undefined) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_ITEMS));
    return INITIAL_ITEMS;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return INITIAL_ITEMS;
  }
}

/**
 * ดึงข้อมูลสดจาก Supabase Cloud Database ข้ามทุกเครื่อง (Async)
 * พร้อมแคชลง localStorage เผื่อกรณีออฟไลน์
 */
export async function fetchItems() {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('items')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && Array.isArray(data)) {
        if (data.length > 0) {
          const mapped = data.map(mapFromDb);
          if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
          }
          return mapped;
        } else {
          // ถ้าตารางว่างเปล่าใน Supabase นำ initial items ขึ้นไปบันทึกครั้งแรก
          try {
            await supabase.from('items').insert(INITIAL_ITEMS.map(mapToDb));
          } catch (e) {
            console.warn('Could not seed initial items to Supabase:', e);
          }
          return INITIAL_ITEMS;
        }
      } else if (error) {
        console.warn('Supabase query warning (fallback to localStorage):', error.message);
      }
    } catch (err) {
      console.warn('Supabase connection error (fallback to localStorage):', err);
    }
  }

  return getItems();
}

/**
 * กรองข้อมูลตามเงื่อนไข (ประเภท, คำค้นหา, หมวดหมู่)
 */
export function filterItems({ type = 'all', keyword = '', category = 'all', items = null } = {}) {
  const sourceItems = items || getItems();
  return sourceItems.filter((item) => {
    if (type !== 'all' && item.type !== type) return false;
    if (category !== 'all' && item.category !== category) return false;

    if (keyword && keyword.trim()) {
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
 * เพิ่มรายการของหายหรือของที่พบใหม่
 * - บันทึกลง Supabase Cloud Database ทันที (เพื่อให้ทุกเครื่องเห็นข้อมูลตรงกัน)
 * - บันทึกลง LocalStorage
 * - ส่ง Event แจ้งเตือนทุกหน้าให้อัปเดต UI ทันที
 */
export async function addItem(itemData) {
  const newItem = {
    id: `item-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: itemData.type === 'lost' ? 'searching' : 'found',
    ...itemData,
  };

  // 1. บันทึกลง LocalStorage ก่อนทันทีเพื่อให้ UI ตอบสนองรวดเร็ว
  const current = getItems();
  const updated = [newItem, ...current.filter((i) => i.id !== newItem.id)];

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('bj3_items_updated', { detail: updated }));
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  }

  // 2. ส่งขึ้น Supabase Cloud Database เพื่อให้เครื่องอื่นๆ ทั่วโลกเห็นข้อมูลเดียวกัน
  if (supabase) {
    try {
      const dbRecord = mapToDb(newItem);
      const { error } = await supabase.from('items').insert([dbRecord]);
      if (error) {
        console.error('Error saving to Supabase:', error.message);
      }
    } catch (err) {
      console.error('Supabase insert exception:', err);
    }
  }

  return newItem;
}

/**
 * ติดตามการเปลี่ยนแปลงข้อมูลแบบเรียลไทม์ (Supabase Realtime + Local Events)
 * เมื่อเครื่องอื่นพิมพ์แจ้งของหาย ข้อมูลบนหน้านี้จะอัปเดตอัตโนมัติทันที
 */
export function subscribeItems(callback) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  // Local Event listener
  const localHandler = () => {
    callback(getItems());
  };

  window.addEventListener('bj3_items_updated', localHandler);
  window.addEventListener('storage', localHandler);

  // Supabase Realtime Channel
  let channel = null;
  if (supabase) {
    try {
      channel = supabase
        .channel('public:items')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'items' },
          async () => {
            const freshItems = await fetchItems();
            callback(freshItems);
          }
        )
        .subscribe();
    } catch (e) {
      console.warn('Realtime subscription error:', e);
    }
  }

  return () => {
    window.removeEventListener('bj3_items_updated', localHandler);
    window.removeEventListener('storage', localHandler);
    if (channel && supabase) {
      supabase.removeChannel(channel);
    }
  };
}
