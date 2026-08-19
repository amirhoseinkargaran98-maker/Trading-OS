# Trading OS — Phase 19
## Complete Review & Reporting

### هدف
ارتقای مرکز گزارش‌ها از KPIهای ساده به یک Review Center روزانه/هفتگی/ماهانه که Performance، Risk، Process، Execution، Psychology، Edge و Data Quality را در یک نمای قابل اقدام ترکیب می‌کند.

### تغییرات
- Daily / Weekly / Monthly reporting retained and enhanced.
- Daily performance series for P&L and average Process Score.
- Strategy / Setup / Session context surfaced in reports.
- Best and weakest observable Edge with minimum sample protection.
- Strategy / Execution / Psychology diagnostic scores shown independently.
- Primary attention axis surfaced as a guidance signal, not a deterministic verdict.
- Review coverage and Process Score coverage displayed as Data Quality indicators.
- Next Action surfaced from rule-based observations.
- Existing JSON report export preserved.
- No AI dependency added.

### Safety / integrity rules
- Closed trades only are included.
- `process_score = 0` is treated as a valid score.
- Review completion is based only on `review_completed === true`.
- Edge cards require at least 5 observations and are labelled as observable evidence, not guaranteed future performance.
- No synthetic trade data is created.

### Validation note
ZIP integrity was checked after packaging. A full dependency install/build could not be truthfully claimed in the current sandbox because the npm registry dependency `html2canvas` was not available in the offline cache. The package includes the unchanged lockfile and all source changes are isolated to the reporting layer plus the report engine types/metrics.
