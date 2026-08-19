# راه‌اندازی AI Coach — فقط ۳ قدم

کد آماده و بدون نیاز به تغییر است. فقط این ۳ مرحله را انجام بده.

## قدم ۱ — دیتابیس (اگر قبلاً نزدی)

فایل `supabase/COMPLETE_DATABASE_SETUP.sql` را باز کن، کل محتوایش را کپی کن،
تو داشبورد Supabase برو به **SQL Editor → New query**، پیست کن و Run بزن.
(اجرای دوباره‌اش هم مشکلی ندارد، ایمن است.)

## قدم ۲ — گرفتن کلید Gemini (رایگان)

برو به **https://aistudio.google.com/apikey** → با اکانت گوگل وارد شو →
**Create API key** → کلید را کپی کن.

## قدم ۳ — قرار دادن کلید در Supabase (نه در کد!)

⚠️ کلید API را هرگز داخل فایل `.env` یا کد React قرار نده — چون این‌ها روی
مرورگر کاربر لود می‌شن و کلید لو می‌ره. کلید باید فقط سمت سرور (Edge Function)
باشه:

1. تو داشبورد Supabase پروژه‌ت برو به **Edge Functions**
2. اگر تابع `ai-coach` هنوز deploy نشده، با نصب [Supabase CLI](https://supabase.com/docs/guides/cli) این دستورها را از ریشه‌ی پروژه بزن:
   ```bash
   supabase login
   supabase link --project-ref <project-ref-خودت>
   supabase functions deploy ai-coach
   ```
   (`project-ref` را از URL داشبورد یا Settings → General پیدا می‌کنی.)
3. بعد، کلید را به‌عنوان Secret ست کن:
   ```bash
   supabase secrets set GEMINI_API_KEY=کلیدی-که-گرفتی
   ```
   یا از مسیر داشبورد: **Edge Functions → Secrets → Add new secret** →
   نام: `GEMINI_API_KEY`، مقدار: کلیدت.

همین. بعد از این ۳ قدم، مربی هوش مصنوعی تو کل اپ (داشبورد، فرم ثبت معامله،
جزئیات معامله، و صفحه‌ی «مربی هوش مصنوعی») فعاله — بدون هیچ تنظیم دیگه‌ای.

## مدل (اختیاری)

پیش‌فرض `gemini-2.5-flash` است (سریع و ارزان). اگر خواستی مدل قوی‌تر:
```bash
supabase secrets set GEMINI_MODEL=gemini-2.5-pro
```

## نکته‌ی امنیتی

اگر قبلاً یه کلید API را به اشتباه جایی commit یا در `.env` گذاشتی، همون کلید
را تو Google AI Studio باطل (Revoke) کن و یه کلید جدید بساز — کلید قدیمی را
دیگه هرگز استفاده نکن.
