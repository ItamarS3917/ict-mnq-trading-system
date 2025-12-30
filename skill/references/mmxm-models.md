# MMXM - Market Maker Models

## Overview

MMXM (Market Maker Models) consists of two primary models:
- **MMBM** - Market Maker Buy Model (bearish to bullish transition)
- **MMSM** - Market Maker Sell Model (bullish to bearish transition)

These models describe how institutional "smart money" manipulates price from one liquidity pool to another.

---

## The 5 Phases of MMXM

### Phase 1: Original Consolidation
- Price moves sideways in a range
- Liquidity builds on both sides (BSL above, SSL below)
- Institutions accumulate positions without moving price
- This becomes the ultimate target for the model's completion

### Phase 2: Price Run (Engineering Liquidity)
**For MMBM (before bullish move):**
- Price creates lower highs and lower lows
- Retail traders go short
- Sell-side liquidity (SSL) builds below swing lows
- Smart money uses this to accumulate longs

**For MMSM (before bearish move):**
- Price creates higher highs and higher lows
- Retail traders go long
- Buy-side liquidity (BSL) builds above swing highs
- Smart money uses this to accumulate shorts

### Phase 3: Smart Money Reversal (SMR)
This is the KEY turning point. It occurs in TWO ways:

**1. Liquidity Raid (Turtle Soup)**
- Price sweeps liquidity (stops)
- Immediately reverses with displacement
- Creates FVG in reversal direction

**2. Failure Swing**
- Price fails to make new high/low
- Market structure shifts
- No liquidity sweep, just failure to continue

**SMR Confirmations:**
- SMT Divergence (between correlated assets like ES/NQ)
- Market Structure Shift (MSS) / Change of Character (CHoCH)
- CISD (Change in State of Delivery)
- Displacement into FVG

### Phase 4: Accumulation/Distribution
**For MMBM (Buy Program):**
- Buy orders exceed sell orders
- Price creates FVGs and OBs for entries
- Re-accumulation legs with pullbacks
- Target: Buy-side liquidity above

**For MMSM (Sell Program):**
- Sell orders exceed buy orders
- Price creates FVGs and OBs for entries
- Re-distribution legs with pullbacks
- Target: Sell-side liquidity below

### Phase 5: Terminus (Completion)
- Price reaches the original consolidation zone
- Or reaches the HTF draw on liquidity
- Model completes
- New model may begin in opposite direction

---

## MMBM - Market Maker Buy Model

### Prerequisites (ALL required)
1. HTF market structure is bullish
2. Daily bias / Draw on Liquidity points higher
3. Lower timeframe shows sell program into HTF PD Array

### The 4 Components

```
┌─────────────────────────────────────────────────┐
│  ORIGINAL CONSOLIDATION                         │
│  (Ultimate target - where we return)            │
├─────────────────────────────────────────────────┤
│  ↓ ENGINEERING LIQUIDITY (Sell Program)         │
│  - Lower highs forming                          │
│  - SSL building below lows                      │
│  - Retail going short                           │
├─────────────────────────────────────────────────┤
│  ★ SMART MONEY REVERSAL ★                       │
│  - At HTF bullish PD Array                      │
│  - Liquidity raid OR failure swing              │
│  - MSS + SMT Divergence                         │
│  - Entry: FVG after MSS                         │
├─────────────────────────────────────────────────┤
│  ↑ BUY PROGRAM (Accumulation)                   │
│  - Higher highs, higher lows                    │
│  - Add on pullbacks to FVG/OB                   │
│  - Target: BSL above original consolidation     │
└─────────────────────────────────────────────────┘
```

### How to Trade MMBM

1. **Identify HTF bullish bias** (Daily/4H making HH/HL)
2. **Wait for sell program on LTF** (15m/5m making LL/LH)
3. **Mark HTF bullish PD Array** (OB, FVG, or BPR)
4. **Wait for price to reach PD Array**
5. **Look for SMR confirmation:**
   - Liquidity sweep (turtle soup)
   - SMT Divergence with ES
   - MSS/CHoCH
   - Bullish displacement + FVG
6. **Entry:** 50% of FVG after MSS
7. **SL:** Below SMR low
8. **TP:** Old highs → Original consolidation high → HTF BSL

---

## MMSM - Market Maker Sell Model

### Prerequisites (ALL required)
1. HTF market structure is bearish
2. Daily bias / Draw on Liquidity points lower
3. Lower timeframe shows buy program into HTF PD Array

### The 4 Components

```
┌─────────────────────────────────────────────────┐
│  ORIGINAL CONSOLIDATION                         │
│  (Ultimate target - where we return)            │
├─────────────────────────────────────────────────┤
│  ↑ ENGINEERING LIQUIDITY (Buy Program)          │
│  - Higher lows forming                          │
│  - BSL building above highs                     │
│  - Retail going long                            │
├─────────────────────────────────────────────────┤
│  ★ SMART MONEY REVERSAL ★                       │
│  - At HTF bearish PD Array                      │
│  - Liquidity raid OR failure swing              │
│  - MSS + SMT Divergence                         │
│  - Entry: FVG after MSS                         │
├─────────────────────────────────────────────────┤
│  ↓ SELL PROGRAM (Distribution)                  │
│  - Lower highs, lower lows                      │
│  - Add on pullbacks to FVG/OB                   │
│  - Target: SSL below original consolidation     │
└─────────────────────────────────────────────────┘
```

### How to Trade MMSM

1. **Identify HTF bearish bias** (Daily/4H making LH/LL)
2. **Wait for buy program on LTF** (15m/5m making HH/HL)
3. **Mark HTF bearish PD Array** (OB, FVG, or BPR)
4. **Wait for price to reach PD Array**
5. **Look for SMR confirmation:**
   - Liquidity sweep (turtle soup)
   - SMT Divergence with ES
   - MSS/CHoCH
   - Bearish displacement + FVG
6. **Entry:** 50% of FVG after MSS
7. **SL:** Above SMR high
8. **TP:** Old lows → Original consolidation low → HTF SSL

---

## SMT Divergence (Smart Money Technique)

SMT Divergence compares two correlated assets:
- **NQ vs ES** (Nasdaq vs S&P 500)
- When one makes a new high/low but the other doesn't = divergence

### Bullish SMT Divergence
- NQ makes lower low
- ES makes higher low (or equal low)
- Signal: Bullish reversal likely

### Bearish SMT Divergence
- NQ makes higher high
- ES makes lower high (or equal high)
- Signal: Bearish reversal likely

---

## Entry Models Within MMXM

### 1. Unicorn Model (Reversal Entry)
Used during Smart Money Reversal phase:
- Price sweeps liquidity
- Creates Breaker + FVG overlap
- Enter at FVG/Breaker intersection
- Tight SL beyond sweep

### 2. Doyle Exchange Model (Continuation Entry)
Used during Accumulation/Distribution phase:
- Price pulls back to supply/demand zone
- Enter on displacement from zone
- Target next liquidity pool

### 3. OTE within MMXM
- Draw fib from SMR low to MSS high (for longs)
- Enter at 62-79% retracement
- Must have FVG/OB confluence

---

## MMXM Fractal Nature

MMXM patterns are **fractal** - they occur on all timeframes:
- Monthly MMXM contains Weekly MMXM
- Weekly MMXM contains Daily MMXM
- Daily MMXM contains Hourly MMXM
- And so on...

**Key Levels to Watch:**
- Last 3 Monthly OHLC
- Last 3 Weekly OHLC
- Last 3 Daily OHLC

These levels often mark turning points in MMXM models.

---

## MMXM Checklist for NQ/MNQ

Before entering based on MMXM:

1. [ ] HTF bias determined (Daily/4H)
2. [ ] Draw on liquidity identified
3. [ ] LTF showing opposite program (engineering liquidity)
4. [ ] Price at HTF PD Array
5. [ ] Smart Money Reversal confirmed:
   - [ ] Liquidity swept OR failure swing
   - [ ] SMT Divergence with ES
   - [ ] MSS/CHoCH present
   - [ ] Displacement + FVG
6. [ ] Entry at FVG (50%)
7. [ ] SL beyond SMR extreme
8. [ ] TP at opposite liquidity

---

## Common MMXM Mistakes

1. **Trading before SMR confirmation** - Wait for the reversal signal
2. **Ignoring HTF bias** - LTF MMXM should align with HTF direction
3. **Missing SMT Divergence** - Always check ES correlation
4. **Entering too early** - Wait for FVG after MSS, not before
5. **Wrong TP** - Target liquidity, not random levels
6. **Forgetting fractal nature** - A 5m MMXM inside a 1H MMXM can fail if HTF goes opposite
