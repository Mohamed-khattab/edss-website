#!/bin/bash
echo "=== Checking Next.js Server ==="
echo ""

# Kill any existing servers
pkill -f "next dev" 2>/dev/null
sleep 2

# Clear cache
echo "Clearing .next cache..."
rm -rf .next

# Check if port is in use
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "ERROR: Port 3000 is already in use!"
    echo "Killing process on port 3000..."
    lsof -ti:3000 | xargs kill -9 2>/dev/null
    sleep 2
fi

# Start server and capture output
echo "Starting dev server..."
echo "---"
npm run dev 2>&1 | tee /tmp/nextjs-full.log &
SERVER_PID=$!

# Wait a bit
sleep 10

# Check if process is still running
if ps -p $SERVER_PID > /dev/null; then
    echo "✓ Server is running (PID: $SERVER_PID)"
    echo "Check http://localhost:3000"
    echo ""
    echo "Last 20 lines of output:"
    tail -20 /tmp/nextjs-full.log
else
    echo "✗ Server crashed!"
    echo ""
    echo "Full error output:"
    cat /tmp/nextjs-full.log
fi
