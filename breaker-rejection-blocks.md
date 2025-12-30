# Breaker Blocks & Rejection Blocks - Advanced Entry Refinement

## Overview
Breaker Blocks and Rejection Blocks provide more precise entries than standard Order Blocks, with better risk-to-reward ratios. These concepts represent failed institutional zones that signal reversals.

**Priority:** Use these AFTER standard ICT setups confirm, or when Order Blocks have already been tested.

**Best for:** NQ/MNQ futures during NY Kill Zones (9:30-11am, 2-3pm ET)

---

## Breaker Blocks (Failed Order Blocks)

### What is a Breaker Block?

A Breaker Block is an Order Block that has been broken by price, causing it to reverse its role:
- **Bullish Breaker**: Bearish Order Block broken to upside → now acts as support
- **Bearish Breaker**: Bullish Order Block broken to downside → now acts as resistance

Originally developed and tested on NASDAQ (NQ) and S&P 500 (ES) futures.

### Identification Criteria (ALL Required)

**For Bullish Breaker:**
1. Previous bearish Order Block exists (last down candle before bullish move)
2. Price breaks ABOVE the Order Block high
3. Market Structure Shift (MSS) confirmed to upside
4. Liquidity sweep occurred (optional but increases probability)

Pattern sequence: Low (L) → High (H) → Lower Low (LL) → Higher High (HH)

**For Bearish Breaker:**
1. Previous bullish Order Block exists (last up candle before bearish move)
2. Price breaks BELOW the Order Block low
3. Market Structure Shift (MSS) confirmed to downside
4. Liquidity sweep occurred (optional but increases probability)

Pattern sequence: High (H) → Low (L) → Higher High (HH) → Lower Low (LL)

### Entry Rules

**Bullish Breaker Entry:**
- Wait for price to break above bearish OB
- Price must retrace back into the broken OB zone
- Entry: 50% of the broken Order Block (now breaker)
- SL: Below breaker low + 3 points buffer
- SL must be ≤25 points, otherwise SKIP

**Bearish Breaker Entry:**
- Wait for price to break below bullish OB
- Price must retrace back into the broken OB zone
- Entry: 50% of the broken Order Block (now breaker)
- SL: Above breaker high + 3 points buffer
- SL must be ≤25 points, otherwise SKIP

### Target Rules

**Bullish Breaker Targets:**
- TP1: Next significant high / buy-side liquidity
- TP2: HTF draw on liquidity (PDH, PWH, equal highs)

**Bearish Breaker Targets:**
- TP1: Next significant low / sell-side liquidity
- TP2: HTF draw on liquidity (PDL, PWL, equal lows)

### 2024 Update

ICT now considers EVERY broken swing high/low as a potential breaker block, even if it doesn't meet strict OB criteria. Use Market Structure Shift as primary confirmation.

---

## Rejection Blocks (Wick-Based Reversals)

### What is a Rejection Block?

Rejection Blocks are the WICKS (not bodies) at swing highs/lows that represent the last potential reversal point for price. They form at deeper retracement levels (80-90% Fibonacci) compared to Order Blocks (50-70%).

**Key advantage:** LOWER RISK than Order Blocks - this is "the last hurdle for price"
**Key benefit:** BETTER RISK:REWARD ratios

### Identification Criteria

**Bullish Rejection Block:**
1. Long lower wick at swing low
2. Price sweeps old low liquidity
3. Aggressive rejection (large bullish candle after wick)
4. Forms at 80-90% Fibonacci retracement level
5. Market Structure Shift follows

**Bearish Rejection Block:**
1. Long upper wick at swing high
2. Price sweeps old high liquidity
3. Aggressive rejection (large bearish candle after wick)
4. Forms at 80-90% Fibonacci retracement level
5. Market Structure Shift follows

### Entry Rules

**Bullish Rejection Block Entry:**
- Entry: Bottom of the rejection wick (the extreme low)
- SL: 2-3 points below the wick low
- SL must be ≤25 points

**Bearish Rejection Block Entry:**
- Entry: Top of the rejection wick (the extreme high)
- SL: 2-3 points above the wick high
- SL must be ≤25 points

### Target Rules

Same as Breaker Blocks - target nearest liquidity, then HTF draw.

### When to Use Rejection Blocks vs Order Blocks

- **Rejection Block**: When you see clear wick rejection at 80-90% fib levels
- **Order Block**: When price is at 50-70% fib levels
- **Breaker Block**: When previous OB has been broken and price returns

**Priority:** Rejection Block > Breaker Block > Order Block (in terms of R:R)

---

## Integration with MMXM Models

Breakers and Rejection Blocks work powerfully within Market Maker Models:

### Within MMBM (Bullish Model)

**Smart Money Reversal Phase:**
- Look for **Rejection Block** at the swept low (phase 3)
- If previous bearish OB gets broken = **Bullish Breaker** confirmation
- Entry at 50% of breaker/rejection zone after MSS

**Accumulation Phase (Phase 4):**
- Look for **Bullish Breakers** on pullbacks
- Each broken bearish OB becomes new entry zone

### Within MMSM (Bearish Model)

**Smart Money Reversal Phase:**
- Look for **Rejection Block** at the swept high (phase 3)
- If previous bullish OB gets broken = **Bearish Breaker** confirmation
- Entry at 50% of breaker/rejection zone after MSS

**Distribution Phase (Phase 4):**
- Look for **Bearish Breakers** on pullbacks
- Each broken bullish OB becomes new entry zone

---

## Breaker & Rejection Block Checklist

Before entering based on Breaker/Rejection:

- [ ] HTF bias determined (Daily/4H)
- [ ] In valid trading window (NY AM 9:30-11am or PM 2-3pm ET)
- [ ] Order Block identified OR wick rejection visible
- [ ] For Breaker: OB has been broken with MSS
- [ ] For Rejection: Clear wick at 80-90% fib level
- [ ] Price has returned to the zone
- [ ] Entry at 50% of zone (Breaker) or extreme (Rejection)
- [ ] SL ≤25 points
- [ ] R:R ≥1.5:1
- [ ] Target liquidity identified

---

## Common Mistakes

1. **Entering before MSS** - Always wait for Market Structure Shift confirmation
2. **Confusing mitigation with breaker** - Mitigation = failed to make new HH/LL; Breaker = fully broken then reversed
3. **Ignoring HTF context** - LTF breakers fail if HTF bias is opposite
4. **Wrong fib level** - Rejection blocks are 80-90%, not 50-70%
5. **Oversized stop** - If SL >25 points, skip the trade

---

## Examples

### Example 1: Bullish Breaker During MMBM

**Setup:**
- HTF: Bullish bias (Daily making HH/HL)
- MMXM Phase: Smart Money Reversal (Phase 3)
- Session: NY AM Kill Zone (10:15 ET)

**Execution:**
1. Bearish OB identified at 16,250-16,255 (last down candle before sweep)
2. Price sweeps sell-side liquidity at 16,240 (engineering liquidity)
3. Bullish displacement breaks ABOVE 16,255 (breaker activated)
4. MSS confirmed - broke previous lower high at 16,270
5. Price retraces to 16,252 (50% of breaker zone)

**Trade:**
- Entry: 16,252
- SL: 16,240 (below breaker low) = 12 points risk
- TP1: 16,285 (old high from engineering phase) = 33 points
- TP2: 16,310 (original consolidation high) = 58 points
- R:R: 2.75:1 (TP1) or 4.8:1 (TP2)

### Example 2: Bearish Rejection Block

**Setup:**
- HTF: Bearish bias (4H making LH/LL)
- Pattern: Wick rejection at previous week high
- Session: NY PM Kill Zone (14:30 ET)

**Execution:**
1. Price makes higher high to 16,420
2. Long upper wick forms - rejection from 16,420 to 16,405
3. 90% Fibonacci from swing low to swing high = 16,418 (wick is at exact level)
4. Bearish displacement candle closes at 16,395
5. MSS confirmed - broke previous higher low

**Trade:**
- Entry: 16,420 (top of rejection wick)
- SL: 16,423 (3 points above wick) = 3 points risk
- TP1: 16,380 (equal lows) = 40 points
- TP2: 16,350 (PDL) = 70 points
- R:R: 13.3:1 (TP1) or 23.3:1 (TP2)

**Note:** This is why Rejection Blocks offer superior R:R!

---
