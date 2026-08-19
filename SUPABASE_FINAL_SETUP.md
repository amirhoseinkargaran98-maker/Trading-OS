# Trading OS — Simple Supabase Setup

## فقط یک فایل SQL لازم است

1. در Supabase پروژه Trading OS را باز کنید.
2. از منوی چپ: **SQL Editor** → **New query**.
3. کل فایل `supabase/COMPLETE_DATABASE_SETUP.sql` را Copy کنید.
4. داخل Query Paste کنید.
5. روی **Run** بزنید.
6. اگر اجرا بدون خطا تمام شد، صفحه Trading OS را Refresh کنید.

این فایل Master همه جدول‌ها، ستون‌ها، RLS، Storage و توابع موردنیاز Trading OS را یکجا می‌سازد و برای کاربرهای قدیمی نیز bootstrap/repair دارد.

## تنظیم `.env`

در ریشه پروژه فایل `.env` بسازید و این دو مقدار را وارد کنید:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

مقدارها را از **Supabase → Project Settings → API** بردارید.

> کلید `service_role` را هرگز داخل `.env` سمت فرانت‌اند قرار ندهید.
