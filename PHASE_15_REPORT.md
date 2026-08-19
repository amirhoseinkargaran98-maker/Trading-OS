# Trading OS — Phase 15 Report

## هدف
این فاز بعد از Data Integrity روی حلقه واقعی «مشکل → اقدام → پیگیری → اندازه‌گیری» تمرکز می‌کند.

## تغییرات
- Improvement Engine مستقل و بدون AI اضافه شد.
- Cost of Mistakes به‌صورت شفاف از P&L معاملات دارای خطای ثبت‌شده محاسبه می‌شود؛ علت‌ومعلول قطعی ادعا نمی‌شود.
- Sample-size confidence از موتور مرکزی استفاده می‌کند.
- Improvement Actions با RLS، وضعیت، معیار موفقیت، تعداد معاملات هدف و پیشرفت ذخیره می‌شوند.
- صفحه «مرکز بهبود عملکرد» و Route جدید `/improvement` اضافه شد.
- لینک این بخش به Sidebar اضافه شد.
- هیچ داده نمونه یا جعلی وارد دیتابیس نمی‌شود.

## SQL لازم
فایل `supabase/PHASE_15_IMPROVEMENT_ENGINE.sql` باید در Supabase اجرا شود.

## QA
- فایل‌های جدید از نظر syntax بررسی می‌شوند.
- Build کامل فقط پس از نصب dependencyها قابل تأیید است؛ این محیط node_modules پروژه را ندارد.
