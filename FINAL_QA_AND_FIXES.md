# Trading OS — Final QA / Fixes

Applied fixes for: route preloading, open-trade closing, stable Tehran timestamps, screenshot re-upload/delete robustness, and LAN/Vite access.

## Mobile LAN
1. Keep phone and PC on the same Wi-Fi.
2. Run `npm run dev:lan`.
3. Open the `Network` URL shown by Vite on the phone, e.g. `http://192.168.1.20:5173`.
4. Do NOT use `localhost` on the phone.
5. If it still does not open, allow Node.js/Vite through Windows Firewall on the Private network.

## Screenshot storage
The app uses the private `trade-screenshots` bucket. Upload content type now matches the real file type; DB insert failures clean up orphaned files; delete awaits both Storage and DB operations and updates the UI immediately.

## Closing trades
Editing an open trade and entering an exit price or exit time automatically closes it on save. The Trade Detail page also has a dedicated `بستن معامله` action.

## Time
Trade timestamps are stored with the Tehran offset and displayed in the `Asia/Tehran` timezone so opening the same trade on different devices does not rewrite the displayed clock.
