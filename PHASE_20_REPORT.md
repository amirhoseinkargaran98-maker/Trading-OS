# Trading OS — Phase 20: Data / Import / Export / Search

## Delivered
- Central Data page for real trade data.
- CSV, XLSX/XLS and JSON import with preview and row validation.
- Duplicate detection against the current user's trades using date/symbol/direction/entry/exit identity.
- CSV and JSON export of filtered trade data.
- Global local search across symbol, notes, mistakes, lessons, session, result and direction.
- Saved filter storage with Supabase RLS.
- No fake data and no AI dependency.
- Import inserts only valid rows and never bypasses user ownership.

## Important
Run the new Supabase migration:
`supabase/migrations/20260815150000_saved_trade_filters.sql`

## QA note
The environment used to generate this archive may not contain all npm dependencies. Run:
`npm ci`
`npm run typecheck`
`npm run lint`
`npm run build`
