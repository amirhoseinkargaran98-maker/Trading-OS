# PHASE 16 — Trading Diagnosis & Recurring Problems

## هدف
تبدیل داده‌های رفتاری و Process به یک تشخیص Rule-Based قابل پیگیری، بدون وابستگی به AI.

## تغییرات
- `src/lib/diagnosisEngine.ts`: موتور تشخیص مرکزی برای Strategy / Execution / Psychology و Primary Problem.
- تشخیص مشکلات: Revenge, FOMO, Overtrading, Premature Exit, Move SL, Risk Violation, Rule Violation, Fear, Greed, Hesitation و Process Drop.
- مقایسه نیمه اخیر داده با نیمه قبلی برای تشخیص trend: improving / worsening / stable.
- Sample-size confidence از `sampleConfidence()` موتور اصلی استفاده می‌کند.
- Recurring Problems فقط با حداقل 3 occurrence و سابقه در دوره قبلی برجسته می‌شوند.
- صفحه Improvement Center اکنون Primary Problem، سه امتیاز تشخیصی، مشکلات تکرارشونده، رفتارهای اصلی، هزینه خطاها و Actions را در یک چرخه نمایش می‌دهد.
- هیچ عدد ساختگی و هیچ نتیجه قطعی با نمونه کم تولید نمی‌شود.
- هیچ وابستگی جدیدی به AI اضافه نشده است.

## نکته تست
این فاز از نظر TypeScript/JSX با ابزارهای محلی قابل parse بررسی شده، اما اجرای `npm run build` نیازمند نصب کامل dependencyهاست. قبل از استفاده production، `npm ci && npm run typecheck && npm run build` اجرا شود.
