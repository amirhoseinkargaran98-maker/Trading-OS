# Trading OS — Phase 18 Context Intelligence

## هدف
تبدیل Edge Lab از تحلیل تک‌بعدی Strategy/Setup به تحلیل زمینه‌ای ترکیبی، بدون وابستگی به AI و با محافظت در برابر sample کم.

## اضافه شد
- Context Intelligence Engine در `src/lib/contextIntelligence.ts`
- صفحه گرافیکی `src/pages/ContextIntelligence.tsx`
- Route: `/context-intelligence`
- آیتم منوی «هوش زمینه‌ای»
- تحلیل ترکیب‌های ۲ و ۳ بعدی از Strategy, Setup, Symbol, Session, Direction, Timeframe
- KPI: trades, win rate, avg R, expectancy, P&L, process score
- Confidence و status محافظه‌کارانه
- Top Context Cards و Evidence Strength bar
- بدون Migration جدید؛ داده از `trades` موجود خوانده می‌شود

## اصول محافظتی
- معاملات open حذف می‌شوند.
- حداقل نمونه پیش‌فرض ۵ معامله است؛ کمتر از آن «نمونه ناکافی» است.
- Confidence از `sampleConfidence` مرکزی استفاده می‌کند.
- هیچ نتیجه‌ای به عنوان تضمین Edge آینده ارائه نمی‌شود.
- محاسبات Context در Engine مرکزی است و UI فرمول اختصاصی ندارد.
- تعداد ترکیب‌های نمایشی به ۶۰ محدود شده تا UI و مرورگر تحت فشار قرار نگیرند.

## QA
- تغییرات Phase 18 از نظر ساختاری بررسی شد.
- `npm run typecheck` اجرا شد؛ در محیط ساخت، `node_modules` نصب نیست و خطاهای مربوط به نبودن React/Router/Lucide از قبل قابل مشاهده‌اند. این خطاها نتیجه نبود dependency محلی هستند، نه خطای قابل استنتاج از منطق Phase 18.
- قبل از ادعای Production Ready باید `npm ci`, `npm run typecheck`, `npm run lint`, `npm run build` در محیط پروژه اجرا شوند.
