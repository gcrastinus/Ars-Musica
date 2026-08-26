#!/bin/bash
# Optional. Double-clicking index.html is enough; this is only if you want a local server.
cd "$(dirname "$0")" || exit 1
PORT=8766
echo "Musica — the liberal art"
echo "Open http://localhost:$PORT"
echo "Close this window to stop."
exec python3 -m http.server "$PORT"
