# Trading OS — Phase 17 Report

## Edge Lab / Strategy Lab / Setup Lab

### Goal
Turn existing strategy/setup data into a conservative, visual evidence lab without AI dependency.

### Added
- `src/lib/edgeEngine.ts`
  - Centralized Strategy/Setup edge calculations.
  - Win rate, P&L, Avg R, expectancy, profit factor, process score, average risk.
  - Best session, symbol and direction.
  - Sample-size confidence via existing `sampleConfidence` single source of truth.
  - Conservative status: Edge / Watch / Weak / Insufficient.
  - Composite evidence quality score, not a promise of future performance.
- `src/pages/EdgeLab.tsx`
  - Premium RTL dark UI.
  - Strategy / Setup tabs.
  - Visual KPI summary.
  - Per-edge evidence cards with quality bar, confidence, best context and metrics.
  - Explicit anti-overfitting guidance.
- Added `/edge-lab` route.
- Added `آزمایشگاه Edge` to sidebar navigation.

### Product decisions
- No AI is required.
- No edge is declared with fewer than 5 closed trades.
- 5–29 trades remain descriptive and confidence-limited.
- 30+ trades strengthen evidence but do not imply certainty.
- Process quality is displayed separately from financial outcome.
- Best session/symbol/direction are descriptive, not predictive guarantees.

### Verification
- Existing project was used as the base; no blind rewrite.
- Global TypeScript compiler was run. The repository could not complete a clean project typecheck because `node_modules` is absent in the execution environment; existing files report missing React/Lucide JSX types. No new EdgeLab-specific compiler error appeared before the dependency-related cascade.
- `npm ci --offline` could not install because the npm cache lacks `html2canvas`; network installation was not available in this environment.
- ZIP integrity is checked after packaging.
