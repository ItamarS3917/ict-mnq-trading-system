# Advanced ICT Skills Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create three new advanced ICT trading skill documents based on 2024-2025 research: Breaker/Rejection Blocks, Market Context Analysis (SMT + Power of 3), and Advanced Entry Refinement (OTE + Opening Gaps).

**Architecture:** Build modular markdown skill files that integrate with existing ICT-MNQ trading system. Each skill follows same structure: clear criteria, entry rules, examples, and integration with MMXM models.

**Tech Stack:** Markdown documentation, ICT trading concepts (Breakers, Rejection Blocks, SMT Divergence, Power of 3, OTE, NWOG/NDOG, Judas Swing)

---

## Task 1: Create Breaker & Rejection Block Skill

**Files:**
- Create: `breaker-rejection-blocks.md`
- Reference: `ict-setups.md`, `mmxm-models.md`

**Step 1: Create file structure with header**

```markdown
# Breaker Blocks & Rejection Blocks - Advanced Entry Refinement

## Overview
Breaker Blocks and Rejection Blocks provide more precise entries than standard Order Blocks, with better risk-to-reward ratios. These concepts represent failed institutional zones that signal reversals.

**Priority:** Use these AFTER standard ICT setups confirm, or when Order Blocks have already been tested.

**Best for:** NQ/MNQ futures during NY Kill Zones (9:30-11am, 2-3pm ET)

---
```

**Step 2: Add Breaker Block section with precise criteria**

```markdown
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
```

**Step 3: Add Rejection Block section**

```markdown
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
```

**Step 4: Add integration with MMXM**

```markdown
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
```

**Step 5: Commit the file**

```bash
git add breaker-rejection-blocks.md
git commit -m "docs: add breaker and rejection blocks skill with 2024 criteria"
```

---

## Task 2: Create Market Context Analysis Skill

**Files:**
- Create: `market-context-analysis.md`
- Reference: `bias-determination.md`, `session-times.md`, `mmxm-models.md`

**Step 1: Create file structure with header**

```markdown
# Market Context Analysis - SMT Divergence + Power of 3

## Overview

Market Context Analysis helps determine WHEN to trade and WHAT direction. It combines:
1. **SMT Divergence** - Intermarket analysis between NQ and ES
2. **Power of 3** - Daily session phases (Accumulation → Manipulation → Distribution)
3. **Judas Swing** - London manipulation into NY reversal

These tools provide the "big picture" context for all ICT setups.

**Use this skill:** BEFORE analyzing individual setups. Context first, setup second.

---
```

**Step 2: Add SMT Divergence section**

```markdown
## SMT Divergence (Smart Money Technique)

### What is SMT Divergence?

SMT Divergence occurs when two positively correlated assets (NQ and ES) exhibit opposing structure at swing highs/lows. This signals institutional manipulation and potential reversals.

**History:** Introduced by ICT in 2022 specifically for NQ (Nasdaq 100) and ES (S&P 500) correlation.

**Key insight:** When smart money manipulates one asset but not the other, it reveals their true intent.

### Types of SMT Divergence

**Bullish SMT Divergence:**
- NQ makes a LOWER LOW
- ES makes a HIGHER LOW (or equal low)
- Signal: Bullish reversal likely - the lower low is manipulation

**Bearish SMT Divergence:**
- NQ makes a HIGHER HIGH
- ES makes a LOWER HIGH (or equal high)
- Signal: Bearish reversal likely - the higher high is manipulation

### Identification Rules

**Step 1:** Identify swing high/low on NQ
**Step 2:** Check corresponding swing on ES at same time
**Step 3:** Compare structure:
- If NQ makes new extreme but ES doesn't = DIVERGENCE
- If both make new extremes = NO DIVERGENCE (symmetrical)

**Best timeframes:** 1H or 4H charts (more weight than 15m/5m)

### Trading Rules

**Entry Confirmation:**
- Use SMT as CONFIRMATION when price taps HTF PD Array
- Do NOT trade SMT alone - combine with FVG, OB, or Breaker

**Stop Loss:**
- Bullish: Below the SMT low (the manipulated low)
- Bearish: Above the SMT high (the manipulated high)

**Take Profit:**
- TP1: 50% of the impulse move (minimum)
- TP2: Opposite liquidity pool

**Additional Confluence:**
- Stronger correlation = more reliable SMT
- Combine with Order Blocks, FVGs, or liquidity sweeps
- Look for Market Structure Shift after SMT forms

### SMT Scoring System

| Factor | Points | Description |
|--------|--------|-------------|
| 1H or 4H divergence | +3 | Higher timeframe = more reliable |
| 15m divergence | +1 | Lower timeframe = less reliable |
| At HTF PD Array | +2 | Price at institutional zone |
| MSS confirmed | +2 | Market structure shifted |
| Liquidity sweep | +1 | Stops taken before reversal |
| FVG present | +1 | Entry zone available |

**Score interpretation:**
- 7-9 points: HIGH probability SMT reversal
- 5-6 points: MEDIUM probability
- 0-4 points: LOW probability - wait for more confluence

### Integration with MMXM

**Smart Money Reversal (Phase 3):**
- SMT Divergence is KEY confirmation for SMR entry
- NQ sweeps low but ES doesn't = Bullish MMBM setup
- NQ sweeps high but ES doesn't = Bearish MMSM setup

Always check for SMT when entering MMXM Smart Money Reversal phase.

---
```

**Step 3: Add Power of 3 section**

```markdown
## Power of 3 (Accumulation, Manipulation, Distribution)

### What is Power of 3?

Power of 3 (also called AMD - Accumulation, Manipulation, Distribution) describes how each trading day unfolds in three distinct phases following institutional order flow.

**Key insight:** Retail traders lose money in phases 1 & 2. Smart money wins in phase 3.

### The Three Phases

**Phase 1: Accumulation (Asia Session)**
- **Time:** 7:00 PM - 1:00 AM ET (New York time)
- **Character:** Narrow range, low volume, small candlesticks
- **What happens:** Institutions quietly accumulate positions
- **Price action:** Range-bound between support/resistance
- **Retail behavior:** Minimal participation

**Phase 2: Manipulation (London Session)**
- **Time:** 1:00 AM - 7:00 AM ET (London open at 3:00 AM)
- **Character:** False breakouts, stop hunts, liquidity traps
- **What happens:** Smart money deliberately triggers retail stops
- **Price action:**
  - Bullish scenario: Dip BELOW accumulation range (sweep sell-side liquidity)
  - Bearish scenario: Spike ABOVE accumulation range (sweep buy-side liquidity)
- **Retail behavior:** Enter in wrong direction, get stopped out

**Phase 3: Distribution (New York Session)**
- **Time:** 7:00 AM - 1:00 PM ET (market open 9:30 AM)
- **Character:** Directional move, high volume, large candles
- **What happens:** Institutions distribute positions, real move occurs
- **Price action:** Strong trend in opposite direction of manipulation
- **Retail behavior:** Late entries, chasing price

### Trading Strategy

**DO NOT trade Phase 1 (Accumulation):**
- Mark the Asia high and low
- These become key reference levels
- Wait patiently

**WATCH Phase 2 (Manipulation):**
- Look for liquidity sweep (Asia high or low taken)
- Note the direction of the fake move
- Expect REVERSAL in Phase 3

**TRADE Phase 3 (Distribution):**
- Enter AFTER manipulation phase completes
- Entry: FVG or OB in opposite direction of manipulation
- Target: Opposite side of accumulation range, then beyond

### Power of 3 Entry Rules

**Bullish Setup (after bearish manipulation):**
1. Asia range identified (Phase 1)
2. London sweeps Asia LOW (Phase 2 manipulation)
3. Price reverses with MSS + FVG (entering Phase 3)
4. Entry: 50% of bullish FVG
5. SL: Below manipulation low
6. TP: Asia high → then HTF liquidity

**Bearish Setup (after bullish manipulation):**
1. Asia range identified (Phase 1)
2. London sweeps Asia HIGH (Phase 2 manipulation)
3. Price reverses with MSS + FVG (entering Phase 3)
4. Entry: 50% of bearish FVG
5. SL: Above manipulation high
6. TP: Asia low → then HTF liquidity

### Session-Specific Windows

**Primary Distribution Window:** NY AM Kill Zone (9:30-11:00 AM ET)
- Highest probability
- Wait until 9:45 for initial volatility to settle
- Silver Bullet: 10:00-11:00

**Secondary Distribution Window:** NY PM Kill Zone (2:00-3:00 PM ET)
- Second chance after AM
- Re-evaluate based on AM price action

**AVOID:** NY Lunch (11:00 AM - 1:00 PM ET)
- Choppy, low volume
- Many false signals

---
```

**Step 4: Add Judas Swing section**

```markdown
## Judas Swing (London Manipulation)

### What is the Judas Swing?

The Judas Swing is a deceptive price movement during London session that "betrays" retail traders by moving in one direction, then aggressively reversing for the New York session.

**Biblical reference:** Like Judas betraying Jesus, the market betrays retail traders.

### Timing

**Formation window:** New York Midnight (12:00 AM) to 5:00 AM ET
- London opens at 3:00 AM ET
- Most Judas Swings occur 3:00-5:00 AM

**Reversal window:** New York session (9:30 AM - 11:00 AM ET)
- Real move happens during NY AM Kill Zone

### Identification Criteria (ALL Required)

**For Bullish Judas Swing:**
1. False downward move below opening price (midnight to 5am)
2. Liquidity sweep of old low (clear wick below swing low)
3. Aggressive reversal with bullish displacement
4. Market Structure Shift to upside
5. Price closes above opening price

**For Bearish Judas Swing:**
1. False upward move above opening price (midnight to 5am)
2. Liquidity sweep of old high (clear wick above swing high)
3. Aggressive reversal with bearish displacement
4. Market Structure Shift to downside
5. Price closes below opening price

### Trading Rules

**Setup Recognition:**
- Mark NY midnight opening price (12:00 AM ET)
- Watch for liquidity sweep during London (3:00-5:00 AM)
- Wait for aggressive reversal + MSS

**Entry:**
- Wait for NY session open (9:30 AM)
- Enter on first FVG pullback in reversal direction
- Entry: 50% of FVG

**Stop Loss:**
- Bullish: Below the Judas low (manipulated low)
- Bearish: Above the Judas high (manipulated high)

**Take Profit:**
- TP1: Opposite side of overnight range
- TP2: Previous day high/low (PDH/PDL)

### Best Timeframes

- **15-minute chart:** Ideal for Judas Swing identification
- **1-hour chart:** Confirms the manipulation structure
- **5-minute chart:** For precise FVG entry timing

### Optimal Pairs/Instruments

Works best on:
- NQ/MNQ (Nasdaq futures)
- ES/MES (S&P 500 futures)
- EUR/USD, GBP/USD (forex majors)

### Integration with Power of 3

Judas Swing IS the Manipulation Phase (Phase 2) of Power of 3:
- Accumulation: Asia session builds range
- Manipulation: London creates Judas Swing (fake move)
- Distribution: NY session trades the real move

---
```

**Step 5: Add practical workflow**

```markdown
## Daily Market Context Workflow

Use this sequence EVERY trading day before analyzing setups:

### Pre-Market Analysis (Before 9:30 AM ET)

**Step 1: Check SMT Divergence**
- Open NQ and ES charts side-by-side
- Compare overnight highs/lows
- Note any divergence for reversal bias

**Step 2: Identify Power of 3 Phases**
- Mark Asia high/low (Phase 1: 7pm-1am)
- Check for London manipulation (Phase 2: 1am-7am)
- Identify which liquidity was swept
- Anticipate Phase 3 direction (opposite of manipulation)

**Step 3: Detect Judas Swing**
- Did London sweep Asia high or low?
- Was there aggressive reversal + MSS?
- If yes, expect continuation in NY session

**Step 4: Determine Distribution Bias**
- If manipulation was bearish → expect bullish distribution
- If manipulation was bullish → expect bearish distribution

### Intraday Execution (9:30 AM - 3:00 PM ET)

**9:30-9:45 AM:** Initial volatility - DO NOT TRADE
- Let dust settle
- Watch for opening range formation

**9:45-11:00 AM:** NY AM Kill Zone - PRIMARY WINDOW
- Execute Distribution Phase trades
- Enter FVGs/OBs in bias direction
- Use SMT as confirmation

**11:00 AM-2:00 PM:** Lunch - AVOID
- Choppy price action
- Trail existing winners only

**2:00-3:00 PM:** NY PM Kill Zone - SECONDARY WINDOW
- Re-assess bias based on AM action
- Look for fresh setups

### Market Context Checklist

Before every trade, confirm:
- [ ] SMT Divergence checked (NQ vs ES)
- [ ] Power of 3 phase identified
- [ ] Manipulation phase complete (if present)
- [ ] Trading during Distribution phase (NY Kill Zone)
- [ ] Judas Swing detected (if applicable)
- [ ] Bias aligns with context (not counter-trend)

---

## Examples

### Example 1: Bullish SMT + Power of 3

**Date:** Typical Tuesday
**Pre-Market Context:**

**Asia Session (7pm-1am):**
- NQ: Range 16,200-16,230 (30 point range)
- ES: Range 5,100-5,110 (10 point range)
- Phase 1 complete: Accumulation confirmed

**London Session (3am-5am):**
- 3:15 AM: NQ sweeps Asia low to 16,195 (below 16,200)
- 3:15 AM: ES makes HIGHER LOW at 5,102 (above 5,100 low)
- **SMT Divergence detected:** Bullish (NQ lower low, ES higher low)
- 4:00 AM: NQ reverses with bullish displacement to 16,225
- MSS confirmed - broke previous lower high
- Phase 2 complete: Manipulation (bearish fake)

**Trading Plan:**
- Bias: BULLISH (SMT + manipulation was bearish = expect bullish distribution)
- Target entry: First FVG pullback after 9:45 AM
- TP: Asia high 16,230 → PDH 16,280

**NY Session Execution:**
- 9:52 AM: Bullish FVG forms at 16,218-16,222 during pullback
- Entry: 16,220 (50% of FVG)
- SL: 16,195 (below manipulation low) = 25 points
- TP1: 16,230 (Asia high) = 10 points
- TP2: 16,280 (PDH) = 60 points

**Result:**
- Phase 3 Distribution unfolds
- TP1 hit at 10:15 AM
- TP2 hit at 10:45 AM
- R:R: 2.4:1 (TP2)

### Example 2: Bearish Judas Swing

**Date:** Wednesday
**Pre-Market Context:**

**Asia Session:**
- Range: 16,300-16,320

**London Session:**
- 2:45 AM: Price spikes to 16,335 (sweeps Asia high + PDH at 16,330)
- 3:30 AM: Aggressive bearish reversal - large bearish candle
- 4:15 AM: MSS confirmed - breaks previous higher low at 16,315
- Bearish FVG created at 16,325-16,330
- **Judas Swing identified:** Bullish fake → bearish reversal

**Trading Plan:**
- Bias: BEARISH (Judas reversal confirmed)
- Wait for NY session pullback into FVG
- Target: Asia low 16,300 → PWL 16,250

**NY Session Execution:**
- 9:55 AM: Price pulls back to FVG at 16,327
- Entry: 16,327 (50% of FVG zone)
- SL: 16,335 (above Judas high) = 8 points
- TP1: 16,300 (Asia low) = 27 points
- TP2: 16,250 (PWL) = 77 points

**Result:**
- Distribution phase drives price down
- TP1 hit at 10:30 AM (R:R 3.4:1)
- TP2 hit at 2:15 PM (R:R 9.6:1)

---

## Common Mistakes

1. **Trading before Distribution Phase** - Never trade during Accumulation or Manipulation
2. **Ignoring SMT Divergence** - Always check NQ vs ES correlation
3. **Counter-trend trades** - Don't fight the Power of 3 distribution direction
4. **Wrong timeframe** - Use 1H/4H for SMT, 15m for Judas Swing
5. **Missing the manipulation** - If no manipulation occurred, reduce position size

---
```

**Step 6: Commit the file**

```bash
git add market-context-analysis.md
git commit -m "docs: add market context analysis skill (SMT, Power of 3, Judas Swing)"
```

---

## Task 3: Create Advanced Entry Refinement Skill

**Files:**
- Create: `advanced-entry-refinement.md`
- Reference: `ict-setups.md`

**Step 1: Create file structure with header**

```markdown
# Advanced Entry Refinement - OTE + Opening Gaps

## Overview

Advanced Entry Refinement focuses on PRECISE entry timing using:
1. **Optimal Trade Entry (OTE)** - 62-79% Fibonacci retracements with confluence
2. **NWOG (New Week Opening Gap)** - Weekly gap trading Friday close to Sunday open
3. **NDOG (New Day Opening Gap)** - Daily gap trading 5pm-6pm Monday-Thursday

These techniques improve entry precision and reduce stop loss size.

**Best for:** Adding to existing MMXM or standard ICT setups for optimal entry timing.

---
```

**Step 2: Add OTE section with 2024 updates**

```markdown
## Optimal Trade Entry (OTE) - Fibonacci Precision

### What is OTE?

OTE is the range between 62% and 79% Fibonacci retracement where price offers optimal risk-to-reward for entries during retracements within established trends.

**Key insight:** This zone is where "risk is neither too little nor too high" for best returns.

### Precise OTE Levels

| Level | Description | Use |
|-------|-------------|-----|
| 62% | Upper boundary of OTE | Conservative entry (less deep retracement) |
| 70.5% | **PRECISE optimal level** | Best probability entry |
| 79% | Lower boundary of OTE | Aggressive entry (deeper retracement) |

**2024 Best Practice:** Any entry between 62-79% is valid, but 70.5% is the "sweet spot"

### OTE Zone Application

**For BULLISH setups (buying the dip):**
- Draw Fibonacci from swing LOW to swing HIGH
- OTE zone = 62-79% retracement (discount zone)
- Entry when price retraces into this zone
- Must be below 50% (discount pricing)

**For BEARISH setups (selling the rally):**
- Draw Fibonacci from swing HIGH to swing LOW
- OTE zone = 62-79% retracement (premium zone)
- Entry when price retraces into this zone
- Must be above 50% (premium pricing)

### Fibonacci Drawing Rules (2024)

**IMPORTANT:** Plot Fibonacci body-to-body, ignore wicks
- Start: Close of swing low candle (for longs)
- End: Close of swing high candle (for longs)
- Reverse for shorts

**Why:** Bodies represent institutional order flow; wicks are retail manipulation

### OTE Confluence Requirements

OTE alone is NOT enough. Combine with:

**Required (at least 2 of these):**
- [ ] Fair Value Gap (FVG) in the OTE zone
- [ ] Order Block in the OTE zone
- [ ] Breaker Block in the OTE zone
- [ ] HTF PD Array alignment
- [ ] Market Structure Shift confirmation

**Example:** OTE at 70.5% + FVG at 70% + Bullish OB at 68% = HIGH probability

### Entry Rules

**Step 1:** Identify trend and draw Fibonacci
- Bullish: Low to high
- Bearish: High to low

**Step 2:** Mark OTE zone (62-79% levels)

**Step 3:** Wait for price to enter OTE zone

**Step 4:** Look for confluence (FVG, OB, Breaker)

**Step 5:** Enter at confluence point within OTE

**Step 6:** Set stops and targets

**Stop Loss:**
- Bullish: Below 100% fib level (swing low) + 2 points
- Bearish: Above 100% fib level (swing high) + 2 points
- Must be ≤25 points

**Take Profit:**
- TP1: -27% fib extension (1.27 beyond swing high/low)
- TP2: -62% fib extension (1.62 beyond swing high/low)

### OTE within MMXM

**Smart Money Reversal (Phase 3):**
- After liquidity sweep, draw fib from swept low to MSS high (for longs)
- OTE retracement = ideal MMBM entry
- Combine with FVG for precision

**Accumulation/Distribution (Phase 4):**
- Each pullback during buy/sell program
- Draw fib from last swing
- Enter on OTE retracement

---
```

**Step 3: Add NWOG section**

```markdown
## NWOG (New Week Opening Gap)

### What is NWOG?

The New Week Opening Gap is the price difference between:
- **Friday close:** 5:00 PM ET (4:59 PM)
- **Sunday open:** 6:00 PM ET (Monday morning for some platforms)

**Why it occurs:** Forex/futures markets close over weekend, but global events continue affecting sentiment. Markets re-price when reopening.

**Originally developed for:** Forex, now used effectively on NQ/ES futures

### Identification Steps

**Step 1:** Mark Friday 4:59 PM close price
**Step 2:** Mark Sunday 6:00 PM open price (or Monday morning open)
**Step 3:** Draw box between these two prices = NWOG
**Step 4:** Mark 50% level (Consequent Encroachment)

### Trading Rules

**If gap is >20 pips (for NQ: >20 points):**
- Mark the 50% level
- Trade the 50% level as support/resistance

**If gap is <20 pips (for NQ: <20 points):**
- Skip marking 50% level
- Gap too small to trade effectively

### Bullish NWOG Setup

**Scenario:** Price is ABOVE the NWOG

**Entry conditions:**
1. Price retraces INTO the gap
2. Price shows bullish reversal on lower timeframe (5m/15m)
3. Market Structure Shift to upside
4. Entry: 50% of NWOG or at FVG within gap

**Stop Loss:** Below NWOG low

**Take Profit:** Next liquidity pool above

### Bearish NWOG Setup

**Scenario:** Price is BELOW the NWOG

**Entry conditions:**
1. Price retraces INTO the gap
2. Price shows bearish reversal on lower timeframe (5m/15m)
3. Market Structure Shift to downside
4. Entry: 50% of NWOG or at FVG within gap

**Stop Loss:** Above NWOG high

**Take Profit:** Next liquidity pool below

### NWOG as Magnet

**Key concept:** Price is drawn to fill gaps (seeking fair value)

If gap remains unfilled:
- Price often returns to "fill the gap" within the week
- 50% level acts as strong support/resistance
- Use as draw on liquidity for weekly bias

### Weekly Trading Plan with NWOG

**Sunday evening (6pm ET):**
- Mark NWOG immediately
- Determine if price opened above or below Friday close
- Set bias for Monday based on gap direction

**Monday-Friday:**
- Watch for price to return to NWOG
- First touch of 50% level = highest probability
- Multiple touches reduce probability

---
```

**Step 4: Add NDOG section**

```markdown
## NDOG (New Day Opening Gap)

### What is NDOG?

The New Day Opening Gap is the price difference between:
- **Daily close:** 5:00 PM ET
- **Daily open:** 6:00 PM ET (Monday through Thursday)

**Why it occurs:** One-hour market pause creates liquidity void - no trading between 5-6pm ET

**Key difference from NWOG:** Occurs DAILY (except Friday), smaller gaps, shorter timeframe

### Identification Steps (2024 Mentorship Method)

**Step 1:** Mark 5:00 PM close price
**Step 2:** Mark 6:00 PM open price
**Step 3:** Calculate gap size

**If gap >20 points:**
- Mark NDOG high and low
- Mark 50% Consequent Encroachment

**If gap <20 points:**
- Mark NDOG high and low only
- Skip 50% level (gap too small)

### Trading Rules (2024 Framework)

**DO NOT trade immediately after 6:00 PM open**
- Wait for price to "give a clue"
- Watch until 7:00 PM for direction

**Step 1: Mark liquidity (after 6pm open)**
- Nearest buy-side liquidity (swing high above)
- Nearest sell-side liquidity (swing low below)

**Step 2: Wait for 7:00 PM**
- Observe which direction price moves
- Look for close above or below NDOG

### Bullish NDOG Setup

**Conditions (after 7:00 PM):**
1. Price closes ABOVE the NDOG
2. Price shows bullish structure
3. Look for OTE pullback into NDOG zone

**Entry:**
- Wait for retracement to NDOG or OTE level
- Enter using ICT Optimal Trade Entry pattern
- Confirmation: FVG or OB in the zone

**Stop Loss:** Below low formed after 7:00 PM

**Take Profit:**
- TP1: Initial buy-side liquidity (nearest swing high)
- TP2: Larger liquidity pool above

### Bearish NDOG Setup

**Conditions (after 7:00 PM):**
1. Price closes BELOW the NDOG
2. Price shows bearish structure
3. Look for OTE pullback into NDOG zone

**Entry:**
- Wait for retracement to NDOG or OTE level
- Enter using ICT Optimal Trade Entry pattern
- Confirmation: FVG or OB in the zone

**Stop Loss:** Above high formed after 7:00 PM

**Take Profit:**
- TP1: Initial sell-side liquidity (nearest swing low)
- TP2: Larger liquidity pool below

### NDOG as Fair Value Magnet

Similar to NWOG, NDOG creates liquidity void that price seeks to fill:
- Unfilled gaps often get revisited during NY session
- 50% level (if marked) acts as intraday support/resistance
- Use as draw on liquidity for daily bias

### Integration with Power of 3

**NDOG timing (6:00 PM) = START of Asia Accumulation Phase**

Daily workflow:
- 6:00 PM: NDOG forms → Asia Accumulation begins (Phase 1)
- 1:00 AM: London opens → Manipulation begins (Phase 2)
- 9:30 AM: NY opens → Distribution begins (Phase 3)

Use NDOG to set initial bias before Manipulation phase.

---
```

**Step 5: Add practical integration**

```markdown
## Combining OTE + Opening Gaps + MMXM

### Scenario 1: NWOG + MMBM Entry

**Setup:**
- HTF: Bullish bias (MMBM model active)
- NWOG: 20-point gap below current price
- Current phase: Smart Money Reversal expected

**Execution:**
1. Price sweeps liquidity into NWOG zone (manipulation)
2. MSS confirmed with bullish displacement
3. Draw Fibonacci from swept low to MSS high
4. OTE zone (62-79%) aligns with NWOG 50% level
5. Bullish FVG forms in the confluence zone

**Entry:** 50% FVG + OTE 70.5% + NWOG 50% = TRIPLE CONFLUENCE
**Result:** Highest probability entry

### Scenario 2: NDOG + Silver Bullet

**Setup:**
- NDOG: 15-point gap (too small to mark 50%, but still relevant)
- Time: 9:45 AM (approaching Silver Bullet window)
- Bias: Bearish (price closed below NDOG at 7pm)

**Execution:**
1. Price retraces toward NDOG high during 9:30-10:00
2. 10:05 AM: Bearish FVG forms at NDOG resistance
3. Silver Bullet window active (10:00-11:00)
4. Draw fib from morning high to current low
5. OTE retracement coincides with NDOG + FVG

**Entry:** NDOG resistance + OTE + Silver Bullet timing + FVG
**Result:** Four-way confluence = exceptional setup

### Scenario 3: OTE + Breaker Block

**Setup:**
- Standard bullish setup (not full MMXM)
- Previous bearish OB broken
- Price displaced upward

**Execution:**
1. Identify breaker block zone
2. Draw fib from breakout low to current high
3. 70.5% OTE level lands inside breaker block
4. Wait for retracement

**Entry:** Breaker block 50% + OTE 70.5% = DUAL CONFLUENCE
**Result:** Precise low-risk entry

---

## Advanced Entry Checklist

Before entering with OTE/Gap confluence:

- [ ] HTF bias determined
- [ ] Fibonacci drawn correctly (body to body)
- [ ] OTE zone identified (62-79%)
- [ ] Opening gap marked (NWOG or NDOG if applicable)
- [ ] Confluence present (FVG, OB, Breaker, or Gap)
- [ ] At least 2 confluence factors align
- [ ] SL ≤25 points
- [ ] R:R ≥1.5:1
- [ ] In valid trading window (not lunch)

---

## Examples

### Example 1: Perfect OTE + FVG Entry

**Setup:**
- HTF: Bullish (Daily making HH/HL)
- Session: NY AM Kill Zone (10:20 AM)

**Execution:**
1. Bullish impulse from 16,200 to 16,280 (80-point move)
2. Draw fib: 16,200 (low) to 16,280 (high)
3. Calculate OTE:
   - 62% = 16,230
   - 70.5% = 16,224
   - 79% = 16,217
4. Price retraces to 16,225
5. Bullish FVG forms at 16,222-16,228 (overlaps OTE perfectly)

**Trade:**
- Entry: 16,225 (50% of FVG + inside OTE zone)
- SL: 16,200 (100% fib = swing low) = 25 points risk
- TP1: 16,302 (-27% extension) = 77 points
- TP2: 16,330 (-62% extension) = 105 points
- R:R: 3.1:1 (TP1) or 4.2:1 (TP2)

**Result:** Price respects OTE zone, hits TP1 at 11:15 AM

### Example 2: NWOG 50% Rejection

**Setup:**
- Friday close: 16,300
- Sunday open: 16,320
- Gap: 20 points (mark 50% at 16,310)
- Monday 9:00 AM: Price at 16,350

**Execution:**
1. Monday morning rallies to 16,360
2. 10:00 AM: Price retraces to NWOG
3. Price tags 16,310 (50% level) at 10:15 AM
4. Bullish FVG forms at 16,308-16,312 (at 50% level)
5. MSS confirmed - broke previous lower high

**Trade:**
- Entry: 16,310 (NWOG 50% + FVG confluence)
- SL: 16,300 (below NWOG low) = 10 points
- TP1: 16,360 (session high) = 50 points
- TP2: 16,400 (PDH) = 90 points
- R:R: 5:1 (TP1) or 9:1 (TP2)

**Result:** NWOG 50% held perfectly, TP2 hit by 2:00 PM

### Example 3: NDOG + OTE Confluence

**Setup:**
- Tuesday 5pm close: 16,280
- Tuesday 6pm open: 16,295
- Gap: 15 points (too small for 50%, but still mark gap)
- 7:15 PM: Price closes at 16,305 (above NDOG)

**Execution:**
1. Wednesday 2:00 AM: Price at 16,320
2. Draw fib from 7pm low (16,295) to 2am high (16,320)
3. OTE 70.5% = 16,302
4. 9:50 AM: Price retraces to 16,303
5. Bullish FVG forms at 16,300-16,304
6. FVG overlaps with NDOG zone AND OTE level

**Trade:**
- Entry: 16,302 (OTE + NDOG + FVG triple confluence)
- SL: 16,295 (below NDOG/7pm low) = 7 points
- TP1: 16,320 (overnight high) = 18 points
- TP2: 16,350 (PDH) = 48 points
- R:R: 2.6:1 (TP1) or 6.9:1 (TP2)

**Result:** Tight stop, high probability, excellent R:R

---

## Common Mistakes

1. **Drawing fib wick-to-wick** - Always use body-to-body for institutional accuracy
2. **Trading OTE without confluence** - OTE alone is not enough; need FVG/OB/Breaker
3. **Wrong fib direction** - Bullish = low to high; Bearish = high to low
4. **Ignoring gap size** - Gaps <20 points don't warrant 50% marking
5. **Trading NDOG immediately at 6pm** - Wait until 7pm for direction clue
6. **Forgetting 100% fib = stop level** - Your SL should be just beyond swing point

---
```

**Step 6: Commit the file**

```bash
git add advanced-entry-refinement.md
git commit -m "docs: add advanced entry refinement (OTE, NWOG, NDOG) with 2024 updates"
```

---

## Task 4: Update Main ICT Playbook with New Skills

**Files:**
- Modify: `ICT-MNQ-Trading-Playbook.md`
- Modify: `SKILL.md`

**Step 1: Update playbook to reference new skills**

Open `ICT-MNQ-Trading-Playbook.md` and add new section after MMXM:

```markdown
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
```

**Step 2: Update SKILL.md description**

Add to skill triggers:

```markdown
description: ICT-based MNQ futures trading analysis system for MFFU prop firm evaluation. Use when user provides market data (PDH, PDL, FVG levels, liquidity sweeps) and asks for trade analysis, entry/exit points, or bias confirmation. Also handles advanced concepts: breaker blocks, rejection blocks, SMT divergence, Power of 3, Judas Swing, OTE, NWOG, NDOG. Triggers on keywords like "trade setup", "NQ analysis", "entry", "SL", "TP", "bias", "liquidity sweep", "FVG", "order block", "ICT", "MMXM", "MMBM", "MMSM", "market maker model", "smart money reversal", "SMR", "breaker", "rejection block", "SMT", "Power of 3", "Judas swing", "OTE", "opening gap", "NWOG", "NDOG".
```

**Step 3: Add advanced analysis steps to workflow**

In SKILL.md, update Step 0:

```markdown
### Step 0: Enhanced Context Check

**Check for Market Context (NEW):**
Read `market-context-analysis.md` for:
1. SMT Divergence between NQ and ES
2. Power of 3 phase identification
3. Judas Swing detection

**Check for MMXM Structure:**
Read `mmxm-models.md` for Market Maker Model framework.

**Check for Advanced Entry Zones (NEW):**
Read `advanced-entry-refinement.md` for:
1. OTE confluence opportunities
2. NWOG/NDOG gap alignment
Read `breaker-rejection-blocks.md` for:
1. Failed OB (Breaker) setups
2. Wick rejection opportunities
```

**Step 4: Commit changes**

```bash
git add ICT-MNQ-Trading-Playbook.md SKILL.md
git commit -m "docs: integrate advanced skills into main playbook and skill description"
```

---

## Task 5: Create Quick Reference Cheat Sheet

**Files:**
- Create: `advanced-concepts-cheatsheet.md`

**Step 1: Create comprehensive cheat sheet**

```markdown
# Advanced ICT Concepts - Quick Reference

## Breaker Blocks

| Type | Formation | Entry | Stop |
|------|-----------|-------|------|
| Bullish Breaker | Bearish OB broken up + MSS | 50% of broken OB zone | Below breaker low |
| Bearish Breaker | Bullish OB broken down + MSS | 50% of broken OB zone | Above breaker high |

**Key:** Every broken swing high/low is potential breaker (2024 update)

## Rejection Blocks

| Type | Formation | Entry | Stop |
|------|-----------|-------|------|
| Bullish Rejection | Long lower wick at 80-90% fib | Bottom of wick | 2-3 pts below wick |
| Bearish Rejection | Long upper wick at 80-90% fib | Top of wick | 2-3 pts above wick |

**Advantage:** Better R:R than OB (last reversal point)

## SMT Divergence

| Type | Signal | Action |
|------|--------|--------|
| Bullish SMT | NQ lower low, ES higher low | Expect bullish reversal |
| Bearish SMT | NQ higher high, ES lower high | Expect bearish reversal |

**Best TF:** 1H or 4H (more reliable than 15m)

## Power of 3 Phases

| Phase | Time (ET) | Character | Action |
|-------|-----------|-----------|--------|
| 1. Accumulation | 7pm-1am (Asia) | Range building | Mark Asia H/L |
| 2. Manipulation | 1am-7am (London) | False breakouts | Identify sweep direction |
| 3. Distribution | 9:30am-1pm (NY) | Real move | TRADE opposite of manipulation |

## Judas Swing

| Element | Criteria |
|---------|----------|
| Time | 12am-5am ET (London session) |
| Setup | Liquidity sweep + aggressive reversal |
| Confirmation | MSS + close opposite of fake move |
| Entry | First FVG in NY session (9:30-11am) |

## OTE (Optimal Trade Entry)

| Level | Description |
|-------|-------------|
| 62% | Upper OTE boundary |
| 70.5% | **Precise optimal level** |
| 79% | Lower OTE boundary |

**Requirements:** At least 2 confluence factors (FVG, OB, Breaker, Gap)
**Fib Rule:** Draw body-to-body, ignore wicks

## NWOG (New Week Opening Gap)

| Element | Value |
|---------|-------|
| Formation | Friday 5pm close → Sunday 6pm open |
| Trade if | Gap >20 points |
| Key level | 50% Consequent Encroachment |
| Use as | Support/Resistance + liquidity draw |

## NDOG (New Day Opening Gap)

| Element | Value |
|---------|-------|
| Formation | Daily 5pm close → 6pm open (Mon-Thu) |
| Trade if | Gap >20 points (mark 50%) |
| Wait until | 7:00 PM for direction |
| Entry | OTE pullback into NDOG zone |

## Confluence Priority

**Best setups combine 3+ factors:**

1. HTF bias alignment
2. Market context (SMT/Power of 3/Judas)
3. MMXM phase confirmation
4. Setup type (Breaker/Rejection/Standard)
5. Entry refinement (OTE/Gap)
6. Session timing (Kill Zone)

**Example:** Bullish MMBM + SMT Divergence + Breaker Block + OTE + NWOG 50% + AM Kill Zone = 6-way confluence

---

## Trading Windows Priority

| Window | Time (ET) | Priority | Notes |
|--------|-----------|----------|-------|
| NY AM Kill Zone | 9:30-11:00 | **HIGHEST** | Wait until 9:45 |
| Silver Bullet AM | 10:00-11:00 | **HIGHEST** | Within AM Kill Zone |
| NY PM Kill Zone | 14:00-15:00 | **MEDIUM** | Secondary setups |
| Silver Bullet PM | 14:00-15:00 | **MEDIUM** | Within PM Kill Zone |
| London | 02:00-05:00 | **LOW** | Selective only |
| NY Lunch | 11:00-13:00 | **AVOID** | Choppy action |

---

## R:R by Setup Type

| Setup Type | Typical R:R | Notes |
|------------|-------------|-------|
| Rejection Block | 5:1 - 15:1 | Tightest stops |
| Breaker Block | 2:1 - 5:1 | Better than standard OB |
| OTE + Confluence | 3:1 - 7:1 | Depends on confluence |
| Standard FVG | 1.5:1 - 3:1 | Basic setup |
| NWOG/NDOG | 4:1 - 10:1 | Gap magnets powerful |

---

## Daily Workflow

**Pre-Market (before 9:30am):**
1. Check NWOG (Sunday) or NDOG (Mon-Thu)
2. Identify SMT Divergence (NQ vs ES)
3. Map Power of 3 phases (Asia → London → NY)
4. Detect Judas Swing (if present)
5. Determine HTF bias + MMXM phase

**NY Session (9:30am-3pm):**
1. Wait until 9:45am (dust settles)
2. Trade Distribution Phase (Phase 3)
3. Enter on OTE + confluence
4. Use Breaker/Rejection for precision
5. Exit at liquidity targets

**Post-Market:**
1. Journal what worked
2. Note SMT occurrences
3. Track NWOG/NDOG effectiveness

---
```

**Step 2: Commit cheat sheet**

```bash
git add advanced-concepts-cheatsheet.md
git commit -m "docs: add advanced concepts quick reference cheat sheet"
```

---

## Task 6: Final Integration Test Document

**Files:**
- Create: `docs/plans/integration-test-scenarios.md`

**Step 1: Create test scenarios**

```markdown
# Integration Test Scenarios for Advanced ICT Skills

## Purpose
Verify all new skills work together and integrate with existing MMXM/ICT framework.

---

## Test Scenario 1: Full MMBM with All Advanced Concepts

**Market Setup:**
- Date: Hypothetical Wednesday
- NQ Current: 16,250
- ES Current: 5,105
- HTF Bias: Bullish (Daily HH/HL)

**Context (Tuesday night - Wednesday morning):**
1. **NDOG:** Tuesday 5pm close 16,240 → 6pm open 16,260 (20-point gap, mark 50% at 16,250)
2. **Asia Session:** Range 16,255-16,270
3. **London Manipulation:** 3:30am sweep to 16,245 (below Asia low + NDOG)
4. **SMT Check:** NQ makes low at 16,245, ES makes higher low at 5,103 → **Bullish SMT Divergence**
5. **Judas Swing:** 4:15am aggressive bullish reversal, MSS at 16,265

**MMXM Analysis:**
- Phase 1 (Original Consolidation): 16,220-16,240 (previous day range)
- Phase 2 (Engineering Liquidity): Lower lows to 16,245
- Phase 3 (Smart Money Reversal): Occurring now at NDOG + SMT
- Expected Phase 4: Bullish accumulation
- Expected Phase 5: Target original consolidation high 16,240, then PDH 16,290

**Advanced Analysis:**
1. **Power of 3:** Distribution Phase begins 9:30am (bearish manipulation complete)
2. **Previous OB:** Bearish OB at 16,248-16,252 was broken → **Bullish Breaker**
3. **Fibonacci:** From swept low 16,245 to MSS high 16,275
   - OTE 70.5% = 16,254
4. **Confluence:** Breaker zone + OTE + NDOG 50% + SMT = all at 16,250-16,254

**Expected Trade (NY Session):**
- 9:55am: Price retraces to 16,252
- Bullish FVG forms at 16,250-16,254
- Entry: 16,252 (50% FVG + OTE + Breaker + NDOG 50%)
- SL: 16,245 (below manipulation low) = 7 points
- TP1: 16,270 (Asia high) = 18 points (R:R 2.6:1)
- TP2: 16,290 (PDH / original consolidation completion) = 38 points (R:R 5.4:1)

**Confidence:** HIGHEST (6-way confluence)

**Verification Checklist:**
- [ ] NDOG identified correctly
- [ ] SMT Divergence detected
- [ ] Power of 3 phase mapped
- [ ] Judas Swing recognized
- [ ] MMXM phases identified
- [ ] Breaker Block activated
- [ ] OTE calculated correctly
- [ ] All confluence aligned
- [ ] Entry/SL/TP logical
- [ ] R:R >1.5:1

---

## Test Scenario 2: MMSM with Rejection Block + NWOG

**Market Setup:**
- Date: Monday following gap weekend
- NQ Current: 16,380
- ES Current: 5,130
- HTF Bias: Bearish (Daily LH/LL)

**Context:**
1. **NWOG:** Friday close 16,400 → Sunday open 16,370 (30-point gap, mark 50% at 16,385)
2. **Asia Session:** Range 16,365-16,375
3. **London Manipulation:** 4:00am sweep to 16,390 (above NWOG high + Asia high)
4. **SMT Check:** NQ makes high at 16,390, ES makes lower high at 5,128 → **Bearish SMT Divergence**
5. **Rejection:** Long upper wick at 16,390, rejection to 16,375

**MMXM Analysis:**
- Phase 1: Original consolidation 16,400-16,420
- Phase 2: Engineering liquidity (higher lows building BSL)
- Phase 3: Smart Money Reversal at NWOG + SMT
- Expected Phase 4: Bearish distribution
- Expected Phase 5: Target 16,400 (original low), then PWL 16,340

**Advanced Analysis:**
1. **Power of 3:** Manipulation complete (bullish fake), expect bearish distribution
2. **Rejection Block:** Upper wick 16,385-16,390 at 90% fib
3. **Fibonacci:** From manipulation high 16,390 to current low 16,365
   - 90% = 16,387 (rejection block level)
4. **Confluence:** Rejection Block + NWOG 50% (16,385) + SMT + Judas reversal

**Expected Trade:**
- 10:05am: Price rallies to 16,387 (rejection block test)
- Bearish FVG forms at 16,385-16,389
- Entry: 16,387 (rejection block top + NWOG 50%)
- SL: 16,390 (above rejection high) = 3 points
- TP1: 16,365 (manipulation low) = 22 points (R:R 7.3:1)
- TP2: 16,340 (PWL) = 47 points (R:R 15.7:1)

**Confidence:** HIGHEST (rejection block provides exceptional R:R)

**Verification Checklist:**
- [ ] NWOG identified and 50% marked
- [ ] SMT Divergence detected (bearish)
- [ ] Power of 3 distribution phase active
- [ ] Rejection Block identified (90% fib)
- [ ] MMSM phases mapped
- [ ] Confluence aligned
- [ ] Exceptional R:R due to tight rejection stop

---

## Test Scenario 3: Standard Setup Enhanced with OTE + NDOG

**Market Setup:**
- Date: Thursday
- NQ Current: 16,300
- Simple bullish setup (not full MMXM)

**Context:**
1. **NDOG:** Wednesday 5pm close 16,290 → 6pm open 16,305 (15-point gap, too small for 50%)
2. **7pm Check:** Price at 16,310 (closed above NDOG)
3. **Overnight:** High at 16,325
4. **NY Open:** 9:30am at 16,320

**Standard Setup:**
- Liquidity sweep at 16,285 (took PDL)
- Bullish displacement to 16,320
- FVG created at 16,295-16,300
- MSS confirmed

**Advanced Refinement:**
1. **Fibonacci:** From swept low 16,285 to displacement high 16,325
   - OTE 70.5% = 16,297
2. **FVG:** 16,295-16,300 overlaps OTE zone
3. **NDOG:** Gap zone 16,290-16,305 provides support context

**Entry Comparison:**

**Without OTE/NDOG:**
- Entry: 16,297 (50% FVG)
- SL: 16,285 (below sweep) = 12 points
- TP: 16,325 (session high) = 28 points
- R:R: 2.3:1

**With OTE/NDOG Refinement:**
- Entry: 16,297 (OTE 70.5% + FVG 50% + above NDOG)
- SL: 16,290 (NDOG low, tighter stop) = 7 points
- TP: 16,325 (session high) = 28 points
- R:R: 4:1

**Improvement:** Same entry, but NDOG context allows tighter stop = better R:R

**Verification Checklist:**
- [ ] OTE calculated correctly
- [ ] NDOG context improves stop placement
- [ ] FVG + OTE confluence identified
- [ ] R:R improved from 2.3:1 to 4:1

---

## Integration Success Criteria

All three skills integrate correctly if:

1. **Breaker/Rejection Blocks:**
   - Identified after OB break or at wick extremes
   - Provide tighter stops than standard OB
   - Integrate into MMXM Smart Money Reversal phase

2. **Market Context:**
   - SMT Divergence detects reversal bias
   - Power of 3 maps daily session phases
   - Judas Swing identifies manipulation
   - Context applied BEFORE setup selection

3. **Advanced Entry:**
   - OTE provides precise fib retracement levels
   - NWOG/NDOG offer gap-based confluence
   - Confluence improves R:R ratios
   - Integrates with all other concepts

**Final Test:** Can combine all concepts in a single trade for 5+ way confluence

---
```

**Step 2: Commit test document**

```bash
git add docs/plans/integration-test-scenarios.md
git commit -m "docs: add integration test scenarios for advanced ICT skills"
```

---

## Task 7: Create Final Summary Document

**Files:**
- Create: `README-ADVANCED-SKILLS.md` in root directory

**Step 1: Create summary README**

```markdown
# Advanced ICT Skills for MNQ Trading

This directory contains advanced Inner Circle Trader concepts researched from 2024-2025 teachings, optimized for MNQ futures trading during MFFU prop firm evaluation.

## New Skills Added

### 1. Breaker & Rejection Blocks (`breaker-rejection-blocks.md`)
**Purpose:** Precision entry techniques with superior risk-to-reward

**Concepts:**
- Breaker Blocks: Failed Order Blocks that reverse role
- Rejection Blocks: Wick-based reversals at 80-90% fib levels
- 2024 Update: Every broken swing is potential breaker

**When to use:** After standard OB tested, or for extreme reversal entries

**Advantage:** R:R of 5:1 to 15:1 (vs 2:1 to 3:1 for standard setups)

### 2. Market Context Analysis (`market-context-analysis.md`)
**Purpose:** Determine WHEN to trade and WHAT direction before analyzing setups

**Concepts:**
- SMT Divergence: NQ vs ES correlation for reversal signals
- Power of 3: Daily phases (Accumulation → Manipulation → Distribution)
- Judas Swing: London manipulation into NY reversal

**When to use:** EVERY DAY before trading - context first, setup second

**Advantage:** Filters out counter-trend trades, increases win rate

### 3. Advanced Entry Refinement (`advanced-entry-refinement.md`)
**Purpose:** Precise entry timing to reduce stop loss and increase R:R

**Concepts:**
- OTE (Optimal Trade Entry): 62-79% fib retracements with confluence
- NWOG (New Week Opening Gap): Friday-Sunday gap trading
- NDOG (New Day Opening Gap): Daily 5pm-6pm gap trading
- 2024 Updates: Body-to-body fib drawing, 70.5% precise level

**When to use:** To refine existing setups and achieve confluence

**Advantage:** Tighter stops (often 5-10 points vs 20-25), better entries

## Integration with Existing System

These skills **enhance** (not replace) your core system:

```
HTF Bias (existing)
    ↓
Market Context (NEW: SMT, Power of 3, Judas)
    ↓
MMXM Framework (existing: MMBM/MMSM)
    ↓
Setup Type (existing + NEW: Breakers, Rejection Blocks)
    ↓
Entry Refinement (NEW: OTE, NWOG, NDOG)
    ↓
Execute Trade
```

## Quick Start

**Daily Workflow:**

1. **Pre-Market** (before 9:30am):
   - Check `market-context-analysis.md` for SMT/Power of 3/Judas
   - Check `advanced-entry-refinement.md` for NWOG/NDOG gaps
   - Determine distribution bias

2. **Setup Analysis:**
   - Follow existing MMXM/ICT setup identification
   - Check `breaker-rejection-blocks.md` for failed OB opportunities

3. **Entry Execution:**
   - Use OTE fibonacci for precise entry
   - Look for confluence (3+ factors)
   - Tighten stops using gap context

## File Structure

```
/ict-mnq-trading-system/
├── ICT-MNQ-Trading-Playbook.md (updated with advanced skills)
├── SKILL.md (updated triggers)
├── breaker-rejection-blocks.md (NEW)
├── market-context-analysis.md (NEW)
├── advanced-entry-refinement.md (NEW)
├── advanced-concepts-cheatsheet.md (NEW)
├── bias-determination.md (existing)
├── ict-setups.md (existing)
├── mmxm-models.md (existing)
├── session-times.md (existing)
└── docs/
    └── plans/
        ├── 2025-12-30-advanced-ict-skills.md (this implementation plan)
        └── integration-test-scenarios.md (test cases)
```

## Confluence Examples

**6-Way Confluence (HIGHEST probability):**
- Bullish MMBM (MMXM phase 3)
- SMT Divergence (NQ low, ES higher low)
- Power of 3 Distribution Phase (9:30-11am)
- Bullish Breaker Block
- OTE 70.5% fib level
- NWOG 50% level
- Entry during Silver Bullet (10:00-11:00am)

**Expected R:R:** 5:1 to 10:1

## References

All concepts sourced from 2024-2025 ICT teachings:
- innercircletrader.net official tutorials
- 2024 ICT Mentorship lectures
- Latest SMT, Power of 3, OTE, and Gap methodologies

## Next Steps

1. Read all three new skill files thoroughly
2. Review integration test scenarios
3. Practice identifying setups on replay/sim
4. Start with 2-3 way confluence, build to 5+ way
5. Track R:R improvements in trading journal

---

*These advanced skills are designed to increase your MFFU evaluation success rate by improving entry precision, reducing risk, and filtering low-probability setups.*
```

**Step 2: Commit README**

```bash
git add README-ADVANCED-SKILLS.md
git commit -m "docs: add comprehensive README for advanced ICT skills"
```

---

## Task 8: Final Validation and Cleanup

**Files:**
- Review all created files
- Run validation checks

**Step 1: Verify all files created**

```bash
ls -la /Users/itamarmacbook/Desktop/ict-mnq-trading-system/
```

Expected new files:
- breaker-rejection-blocks.md
- market-context-analysis.md
- advanced-entry-refinement.md
- advanced-concepts-cheatsheet.md
- README-ADVANCED-SKILLS.md
- docs/plans/2025-12-30-advanced-ict-skills.md
- docs/plans/integration-test-scenarios.md

**Step 2: Verify all files have proper markdown formatting**

```bash
# Check for proper headers in each file
grep -n "^#" breaker-rejection-blocks.md | head -5
grep -n "^#" market-context-analysis.md | head -5
grep -n "^#" advanced-entry-refinement.md | head -5
```

**Step 3: Final commit**

```bash
git add .
git commit -m "feat: complete advanced ICT skills implementation

- Add Breaker & Rejection Blocks skill
- Add Market Context Analysis skill (SMT, Power of 3, Judas)
- Add Advanced Entry Refinement skill (OTE, NWOG, NDOG)
- Add integration tests and cheat sheet
- Update main playbook and SKILL.md
- Add comprehensive README

All skills integrate with existing MMXM framework and improve R:R ratios."
```

**Step 4: Create summary of changes**

```bash
git log --oneline -8
git diff HEAD~8 --stat
```

---

## Completion Checklist

- [ ] Task 1: Breaker & Rejection Blocks skill created
- [ ] Task 2: Market Context Analysis skill created
- [ ] Task 3: Advanced Entry Refinement skill created
- [ ] Task 4: Main playbook updated with new skills
- [ ] Task 5: Cheat sheet created for quick reference
- [ ] Task 6: Integration tests documented
- [ ] Task 7: README created
- [ ] Task 8: All files validated and committed

---

## Execution Time Estimate

- Task 1: 15-20 minutes (detailed skill writing)
- Task 2: 20-25 minutes (complex multi-concept skill)
- Task 3: 20-25 minutes (detailed with 2024 updates)
- Task 4: 10 minutes (updates to existing files)
- Task 5: 10 minutes (cheat sheet compilation)
- Task 6: 15 minutes (test scenarios)
- Task 7: 10 minutes (README writing)
- Task 8: 5 minutes (validation)

**Total:** ~2 hours for complete implementation
