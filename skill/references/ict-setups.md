# ICT Setup Criteria

## Setup 1: Liquidity Sweep + FVG Entry

**Description**: Price sweeps liquidity (stops), creates displacement, leaves a Fair Value Gap for entry.

### Bullish Version (Buy)
**Trigger conditions (ALL required)**:
1. Sweep of sell-side liquidity (equal lows, PDL, session low, or obvious swing low)
2. Immediate bullish displacement (large bullish candle)
3. Fair Value Gap created during displacement
4. HTF bias is bullish or neutral

**Entry rules**:
- Entry: 50% (midpoint) of the FVG
- SL: Below the swing low that was swept + 2-3 points buffer
- SL must be ≤25 points, otherwise SKIP

**Target rules**:
- TP1: Nearest buy-side liquidity (equal highs, session high)
- TP2: PDH or next HTF level

### Bearish Version (Sell)
**Trigger conditions (ALL required)**:
1. Sweep of buy-side liquidity (equal highs, PDH, session high, or obvious swing high)
2. Immediate bearish displacement (large bearish candle)
3. Fair Value Gap created during displacement
4. HTF bias is bearish or neutral

**Entry rules**:
- Entry: 50% (midpoint) of the FVG
- SL: Above the swing high that was swept + 2-3 points buffer
- SL must be ≤25 points, otherwise SKIP

**Target rules**:
- TP1: Nearest sell-side liquidity (equal lows, session low)
- TP2: PDL or next HTF level

---

## Setup 2: Order Block + Market Structure Shift (MSS)

**Description**: After MSS, price retraces to order block for entry in new direction.

### Bullish Version (Buy)
**Trigger conditions (ALL required)**:
1. Previous bearish structure (lower highs, lower lows)
2. Break of most recent lower high (MSS confirmation)
3. Bullish order block identified (last down candle before up move)
4. Price retraces to OB zone

**Entry rules**:
- Entry: Top of bullish order block (last down close before displacement)
- SL: Below order block low + 2-3 points buffer
- SL must be ≤25 points

**Target rules**:
- TP1: High that confirmed MSS
- TP2: Next HTF liquidity target

### Bearish Version (Sell)
**Trigger conditions (ALL required)**:
1. Previous bullish structure (higher highs, higher lows)
2. Break of most recent higher low (MSS confirmation)
3. Bearish order block identified (last up candle before down move)
4. Price retraces to OB zone

**Entry rules**:
- Entry: Bottom of bearish order block (last up close before displacement)
- SL: Above order block high + 2-3 points buffer
- SL must be ≤25 points

**Target rules**:
- TP1: Low that confirmed MSS
- TP2: Next HTF liquidity target

---

## Setup 3: Silver Bullet

**Description**: Specific time-window FVG entries during high-probability periods.

### Time Windows (ET)
- **AM Silver Bullet**: 10:00 - 11:00 ET
- **PM Silver Bullet**: 14:00 - 15:00 ET

### Bullish Version (Buy)
**Trigger conditions (ALL required)**:
1. Within Silver Bullet time window
2. HTF bias bullish
3. FVG forms during the window
4. Price shows displacement in bias direction

**Entry rules**:
- Entry: 50% of the FVG formed during window
- SL: Below FVG low + 2 points
- SL must be ≤25 points

**Target rules**:
- TP1: High of day or session high
- TP2: PDH if not yet reached

### Bearish Version (Sell)
**Trigger conditions (ALL required)**:
1. Within Silver Bullet time window
2. HTF bias bearish
3. FVG forms during the window
4. Price shows displacement in bias direction

**Entry rules**:
- Entry: 50% of the FVG formed during window
- SL: Above FVG high + 2 points
- SL must be ≤25 points

**Target rules**:
- TP1: Low of day or session low
- TP2: PDL if not yet reached

---

## Setup 4: Optimal Trade Entry (OTE)

**Description**: Fibonacci retracement entry in premium/discount zones after displacement.

### Bullish Version (Buy)
**Trigger conditions (ALL required)**:
1. Bullish displacement move occurred
2. HTF bias bullish
3. Price retracing into discount zone (62-79% fib)
4. FVG or OB present in OTE zone

**Entry rules**:
- Draw fib from swing low to swing high
- Entry: 62-79% retracement level where FVG/OB aligns
- SL: Below 100% fib level (swing low) + 2 points
- SL must be ≤25 points

**Target rules**:
- TP1: -27% fib extension
- TP2: -62% fib extension

### Bearish Version (Sell)
**Trigger conditions (ALL required)**:
1. Bearish displacement move occurred
2. HTF bias bearish
3. Price retracing into premium zone (62-79% fib)
4. FVG or OB present in OTE zone

**Entry rules**:
- Draw fib from swing high to swing low
- Entry: 62-79% retracement level where FVG/OB aligns
- SL: Above 100% fib level (swing high) + 2 points
- SL must be ≤25 points

**Target rules**:
- TP1: -27% fib extension
- TP2: -62% fib extension

---

## Setup Priority Ranking

When multiple setups are present, prioritize:

1. **Liquidity Sweep + FVG** (highest probability when aligned with HTF bias)
2. **Silver Bullet** (time-specific, high probability during windows)
3. **Order Block + MSS** (good after confirmed structure change)
4. **OTE** (requires more confluence)

---

## Invalid Setup Conditions (DO NOT TRADE)

- FVG already filled/mitigated
- Order block already tested
- SL would exceed 25 points
- R:R below 1.5:1
- Against HTF bias without clear reversal signal
- During NY Lunch (11:00-13:00 ET)
- Within 15 min of high-impact news
- Multiple conflicting setups
