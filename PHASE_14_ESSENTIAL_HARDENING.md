# Trading OS — Phase 14 Essential Hardening

این نسخه قبل از Featureهای بزرگ بعدی روی مواردی تمرکز دارد که صحت داده و قابل‌اعتماد بودن تحلیل را حفظ می‌کنند.

## اصلاحات اصلی

1. **Process Score / Review Integrity**
   - `process_score` و `review_completed` هنگام Create/Edit ذخیره می‌شوند.
   - Process Score از `estimateProcessScore()` به‌عنوان Single Source of Truth استفاده می‌کند.
   - Review فقط وقتی کامل است که شرایط واقعی Review برقرار باشد.
   - Backfill دیتابیس deterministic است و داده ساختگی تولید نمی‌کند.
   - برای Process Score محدودیت 0 تا 100 در دیتابیس اضافه شده است.

2. **Date Safety**
   - Trade Date به‌عنوان DATE canonical باقی می‌ماند.
   - برای date-only از `new Date('YYYY-MM-DD')` استفاده نمی‌شود.
   - محاسبات روز/بازه روی DATE به صورت calendar-safe انجام می‌شوند.
   - Day/Hour Pattern Discovery از utility مرکزی استفاده می‌کند.

3. **Trade Time**
   - استخراج ساعت تحلیلی از timestamp با timezone مشخص (`Asia/Tehran`) انجام می‌شود.
   - از تبدیل ناخواسته DATE-only به UTC جلوگیری شده است.

4. **Analytics Integrity**
   - Process Score برابر 0 نیز یک Score معتبر محسوب می‌شود.
   - Review و Process دیگر با fallbackهای گمراه‌کننده تفسیر نمی‌شوند.
   - SmartTicker به جای `rr_ratio` از `r_multiple` برای Average R استفاده می‌کند.
   - Query اشتباه SmartTicker که ستون غیرموجود `strategy` را درخواست می‌کرد حذف شد.

5. **Data Quality**
   - در Trade Detail یک Data Quality Score مستقل اضافه شده است.
   - این Score با Process Score یا Outcome اشتباه گرفته نمی‌شود و موارد ناقص را دقیقاً نشان می‌دهد.

6. **Performance / UX**
   - Lazy loading موجود حفظ شده است.
   - Infinite ticker دو-track و بدون reset حفظ شده است.
   - تنظیم LAN برای باز کردن پروژه روی گوشی حفظ شده است.

## Verification

- تمام فایل‌های TS/TSX پروژه از نظر parse/transpile بررسی شدند؛ 51 فایل پردازش شد. `vite-env.d.ts` صرفاً فایل declaration است و transpile مستقیم آن توسط TypeScript مناسب نیست.
- فایل‌های تغییرکرده نیز به‌صورت جداگانه transpile شدند و خطای Syntax/JSX نداشتند.
- ZIP خروجی با `unzip -t` بررسی می‌شود.

> توجه: اجرای کامل `npm ci` و سپس `npm run build/typecheck` در محیط تولید فایل به علت نبود dependencyهای نصب‌شده و timeout شبکه قابل انجام نبود؛ بنابراین ادعای «Build صددرصد تأییدشده» عمداً داده نمی‌شود. برای اجرای محلی، ابتدا `npm ci` و سپس `npm run typecheck && npm run build` اجرا شود.
