# ICT MNQ Trading Playbook
## MFFU $50K Evaluation System
### With MMXM (Market Maker Models)

---

## Account Parameters

| Parameter | Value |
|-----------|-------|
| Account Size | $50,000 |
| Daily Loss Limit | $2,500 |
| Profit Target | $3,000 |
| Contracts | 5 MNQ |
| Point Value | $10 total ($2/contract) |
| Max SL | 25 points ($250) |
| Target/Trade | 30-50 points ($300-$500) |

---

## Risk Management Rules

### Per-Trade Rules
- Maximum stop loss: **25 points ($250)**
- Minimum R:R ratio: **1.5:1**
- Maximum trades per day: **3-4**

### Daily Rules
- If down **$1,500**: STOP trading for the day
- After any loss: Wait **30 minutes** before next trade
- No trading **15 min before/after** high-impact news

---

## MMXM - Market Maker Models (HIGHEST PROBABILITY)

### What is MMXM?
MMXM describes how "smart money" moves price from one liquidity pool to another through 5 phases.

### MMBM - Market Maker Buy Model (For Longs)
```
1. Original Consolidation (ultimate target)
        ↓
2. Engineering Liquidity (lower highs, SSL building)
        ↓
3. ★ SMART MONEY REVERSAL ★ (ENTRY ZONE)
   - Liquidity sweep + MSS + FVG
        ↓
4. Buy Program (HH/HL, add on pullbacks)
        ↓
5. Terminus (back to consolidation high)
```

**Entry:** FVG after MSS at HTF bullish PD Array
**SL:** Below SMR low
**TP:** Old highs → Original consolidation

### MMSM - Market Maker Sell Model (For Shorts)
```
1. Original Consolidation (ultimate target)
        ↓
2. Engineering Liquidity (higher lows, BSL building)
        ↓
3. ★ SMART MONEY REVERSAL ★ (ENTRY ZONE)
   - Liquidity sweep + MSS + FVG
        ↓
4. Sell Program (LH/LL, add on pullbacks)
        ↓
5. Terminus (back to consolidation low)
```

**Entry:** FVG after MSS at HTF bearish PD Array
**SL:** Above SMR high
**TP:** Old lows → Original consolidation

### SMR Confirmation Checklist
- [ ] Liquidity swept (turtle soup)
- [ ] SMT Divergence (NQ vs ES)
- [ ] MSS / CHoCH confirmed
- [ ] Displacement + FVG created

---

## Trading Sessions (Eastern Time)

### ✅ PRIMARY: NY AM Kill Zone (09:30-11:00 ET)
- Highest probability window
- Wait until 09:45 for initial volatility to settle
- Silver Bullet: 10:00-11:00

### ✅ SECONDARY: NY PM Kill Zone (14:00-15:00 ET)
- Second chance if AM missed
- Re-evaluate bias based on AM action
- Silver Bullet: 14:00-15:00

### ⚠️ SELECTIVE: London (02:00-05:00 ET)
- Creates manipulation (Judas swing)
- Trade only if well-rested

### ❌ AVOID: NY Lunch (11:00-13:00 ET)
- Low volume, choppy action
- Many false signals

---

## HTF Bias Determination

### Bullish Bias (need 2+ factors)
1. Daily/4H making higher highs & higher lows
2. Previous day closed above 50% of range
3. Price above PWL, targeting PWH
4. Bullish displacement with FVG
5. Buy-side liquidity above price

### Bearish Bias (need 2+ factors)
1. Daily/4H making lower highs & lower lows
2. Previous day closed below 50% of range
3. Price below PWH, targeting PWL
4. Bearish displacement with FVG
5. Sell-side liquidity below price

---

## MMXM - Market Maker Models (HIGHEST PRIORITY)

### The 5 Phases of MMXM

1. **Original Consolidation** - Range where liquidity builds
2. **Engineering Liquidity** - Price creates stops (lower highs for MMBM, higher lows for MMSM)
3. **Smart Money Reversal (SMR)** - Entry zone at HTF PD Array
4. **Accumulation/Distribution** - Retracement creates new entries
5. **Completion** - Price targets Original Consolidation

### MMBM (Market Maker Buy Model) - LONG

**Prerequisites:**
- HTF structure BULLISH
- DOL points HIGHER
- Sell program on LTF toward bullish PD Array

**Entry:**
1. Price sweeps sell-side liquidity
2. Reaches bullish HTF PD Array (OB, FVG)
3. MSS/CHoCH to upside
4. Entry: 50% of FVG formed AFTER MSS
5. SL: Below swept low (max 25 pts)
6. TP1: Old highs from Engineering phase
7. TP2: Original Consolidation high

### MMSM (Market Maker Sell Model) - SHORT

**Prerequisites:**
- HTF structure BEARISH
- DOL points LOWER
- Buy program on LTF toward bearish PD Array

**Entry:**
1. Price sweeps buy-side liquidity
2. Reaches bearish HTF PD Array (OB, FVG)
3. MSS/CHoCH to downside
4. Entry: 50% of FVG formed AFTER MSS
5. SL: Above swept high (max 25 pts)
6. TP1: Old lows from Engineering phase
7. TP2: Original Consolidation low

---

## Advanced Skills (Use for Higher Probability)

### Breaker & Rejection Blocks
See `breaker-rejection-blocks.md` for:
- Failed Order Block entries (Breakers)
- Wick-based reversal entries (Rejection Blocks)
- Better R:R than standard OBs

**When to use:** After OB has been tested or for precision entries at extremes

### Market Context Analysis
See `market-context-analysis.md` for:
- SMT Divergence (NQ vs ES correlation)
- Power of 3 (Accumulation → Manipulation → Distribution)
- Judas Swing (London manipulation detection)

**When to use:** EVERY DAY before trading - context determines direction

### Advanced Entry Refinement
See `advanced-entry-refinement.md` for:
- OTE (Optimal Trade Entry 62-79% fib)
- NWOG (New Week Opening Gap)
- NDOG (New Day Opening Gap)

**When to use:** To refine entry timing and reduce stop loss size

---

## Standard ICT Setups (Priority Order)

### 1. Liquidity Sweep + FVG (Highest Priority after MMXM)

**LONG Setup:**
- Price sweeps sell-side liquidity (equal lows, PDL, swing low)
- Bullish displacement creates FVG
- Entry: 50% of FVG
- SL: Below swept low + 2-3 points
- TP1: Nearest equal highs
- TP2: PDH

**SHORT Setup:**
- Price sweeps buy-side liquidity (equal highs, PDH, swing high)
- Bearish displacement creates FVG
- Entry: 50% of FVG
- SL: Above swept high + 2-3 points
- TP1: Nearest equal lows
- TP2: PDL

### 2. Silver Bullet (Time-Specific)

**Windows:** 10:00-11:00 ET or 14:00-15:00 ET

- Must be within window
- FVG forms in bias direction
- Entry: 50% of FVG
- SL: Beyond FVG extreme
- TP: Session high/low or PDH/PDL

### 3. Order Block + MSS

**LONG Setup:**
- Market structure shifts (breaks lower high)
- Price retraces to bullish OB
- Entry: Top of OB
- SL: Below OB
- TP: High that confirmed MSS

**SHORT Setup:**
- Market structure shifts (breaks higher low)
- Price retraces to bearish OB
- Entry: Bottom of OB
- SL: Above OB
- TP: Low that confirmed MSS

### 4. OTE (Optimal Trade Entry)

- Draw fib from swing low to high (longs) or high to low (shorts)
- Entry: 62-79% retracement zone
- Must have FVG or OB confluence
- SL: Beyond 100% fib
- TP1: -27% extension
- TP2: -62% extension

---

## NO TRADE Checklist

Do NOT trade if any apply:
- [ ] No clear HTF bias
- [ ] No valid ICT setup present
- [ ] R:R less than 1.5:1
- [ ] SL would exceed 25 points
- [ ] NY Lunch (11:00-13:00 ET)
- [ ] High-impact news within 15 min
- [ ] Already taken 3+ trades today
- [ ] Down $1,500+ for the day

---

## Pre-Trade Checklist

Before every trade:
1. [ ] HTF bias determined
2. [ ] In valid session window
3. [ ] Valid ICT setup present
4. [ ] Entry, SL, TP calculated
5. [ ] R:R is 1.5:1 or better
6. [ ] SL is ≤25 points
7. [ ] No conflicting news
8. [ ] Within daily loss budget

---

## Trade Input Template

```
SESSION: [London / NY AM / NY PM]
TIME (ET): 
CURRENT PRICE: 
PDH: 
PDL: 
ASIA HIGH: 
ASIA LOW: 
HTF BIAS: [Bullish / Bearish / Neutral]
BIAS REASON: 
LIQUIDITY TAKEN: 
FVG LEVELS: 
OB LEVELS: 
NEWS: 
DAILY P&L: $
TRADES TODAY: 

MMXM CONTEXT (optional):
ORIGINAL CONSOLIDATION: [price range]
ENGINEERING PHASE: [lower highs / higher lows]
CURRENT PHASE: [1-5]
MSS/CHoCH CONFIRMED: [Yes/No + price]
```

---

## Quick Reference

### Point Values
- 10 points = $100
- 25 points = $250 (max SL)
- 50 points = $500
- 100 points = $1,000

### Trades Needed for Target
- At 30 pts/trade: 10 winning trades
- At 50 pts/trade: 6 winning trades
- At 100 pts/trade: 3 winning trades

### Key Times (ET)
- 09:30 - Market open
- 09:45 - Initial volatility settles
- 10:00 - AM Silver Bullet starts
- 11:00 - Lunch starts (STOP)
- 14:00 - PM Silver Bullet starts
- 15:00 - PM ends
- 16:00 - Market close

---

*System designed for MFFU evaluation. Trade responsibly.*
