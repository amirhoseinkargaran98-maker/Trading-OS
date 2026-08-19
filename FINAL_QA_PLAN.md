# Final QA plan

Critical fixes applied: ticker fallback/news, compact trade-date UX, initial-capital guard, report error state, full account reset RPC, free Forex Factory News Guard.

Runtime Supabase inserts cannot be live-verified without the user's connected Supabase project/credentials; deterministic local trade scenarios are in `qa/critical-scenarios.mjs`.
