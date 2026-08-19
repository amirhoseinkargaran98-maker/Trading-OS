# Trading OS Final QA v5

Base: Trading-OS-Final-QA-CloseFix-v4-Reports-Fixed

Fixed in this build:

1. Reports crash: `Row` was receiving a rendered JSX element and then trying to render that object as a component (`got: object`). It now accepts `ReactNode` and renders the node directly.
2. Trade History layout: replaced the HTML table body with a deterministic CSS grid using identical column definitions for header and rows. This prevents entry/exit/P&L/R:R values from collapsing into a single vertical column under narrow/RTL layouts. Horizontal scrolling is preserved.
3. News Guard: Edge Function failure no longer crashes or blocks the page. It now tries the deployed Edge Function, then a public calendar JSON fallback, then a safe local fallback state. The page always renders.
4. Prop Mode: added challenge-health score, conservative risk suggestion, remaining daily loss budget, drawdown buffer, loss-streak guard, target gap, next action, and a daily execution checklist. Existing Supabase schema is reused; no new SQL is required.
5. Prop risk defaults: if a per-account risk row is missing, the page uses safe defaults (0.5% risk, 2% daily loss, 3% daily target, 5 trades/day, 3 consecutive losses) rather than treating missing settings as zero and locking the account unexpectedly.

Validation performed:
- TypeScript/TSX syntax parsing completed for all `src` files with TypeScript transpile diagnostics: no syntax diagnostics.
- Full `npm ci` / production build could not be completed in this environment because package installation timed out; this is an environment/network limitation, not a reported application error.

Supabase SQL: no new SQL required for these changes.
