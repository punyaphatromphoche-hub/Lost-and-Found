import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// สร้าง Supabase client เฉพาะฝั่งเบราว์เซอร์ (Client-side) เพื่อป้องกันปัญหา Node.js WebSocket ตอน SSR
export const supabase =
  typeof window !== 'undefined' && supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      })
    : null;
