# ICT MNQ Trading System

**MFFU $50K Prop Firm Evaluation System**

A comprehensive ICT-based trading system for MNQ futures, featuring MMXM (Market Maker Models), FVG, Order Block, and Silver Bullet setups.

## Account Parameters

| Parameter | Value |
|-----------|-------|
| Account Size | $50,000 |
| Daily Loss Limit | $2,500 |
| Profit Target | $3,000 |
| Contracts | 5 MNQ |
| Point Value | $10 total |
| Max SL | 25 points ($250) |

## What's Included

### Skill File
- `ict-trading-system.skill` - Install in Claude Settings → Features → Skills for persistent knowledge

### Reference Documents
- `playbook/ICT-MNQ-Trading-Playbook.md` - Complete trading playbook
- `skill/references/mmxm-models.md` - MMXM (MMBM/MMSM) deep dive
- `skill/references/ict-setups.md` - All ICT setup criteria
- `skill/references/bias-determination.md` - HTF bias scoring
- `skill/references/session-times.md` - Kill zone timing

### Tools
- `tools/ICT-Trade-Analyzer.jsx` - React form for structured trade inputs

## Setup Priority

1. **MMXM** - Market Maker Models (highest probability)
2. **Liquidity Sweep + FVG** - Classic ICT entry
3. **Silver Bullet** - Time-window specific (10:00-11:00 / 14:00-15:00 ET)
4. **Order Block + MSS** - Structure-based entry
5. **OTE** - Fibonacci retracement entry

## MMXM Quick Reference

### MMBM (Market Maker Buy Model) - For Longs
```
1. Original Consolidation (target)
        ↓
2. Engineering Liquidity (lower highs, SSL building)
        ↓
3. ★ SMART MONEY REVERSAL ★ (ENTRY)
        ↓
4. Buy Program (accumulation)
        ↓
5. Terminus (completion)
```

### MMSM (Market Maker Sell Model) - For Shorts
```
1. Original Consolidation (target)
        ↓
2. Engineering Liquidity (higher lows, BSL building)
        ↓
3. ★ SMART MONEY REVERSAL ★ (ENTRY)
        ↓
4. Sell Program (distribution)
        ↓
5. Terminus (completion)
```

## Trading Sessions (ET)

| Session | Time | Action |
|---------|------|--------|
| NY AM Kill Zone | 09:30-11:00 | **PRIMARY** |
| NY PM Kill Zone | 14:00-15:00 | Secondary |
| NY Lunch | 11:00-13:00 | **AVOID** |
| London | 02:00-05:00 | Selective |

## Usage

### With Claude Skill Installed
Just provide your setup data:
```
NY AM | 10:15 | Price: 21450
PDH: 21500 | PDL: 21350
Bias: Bullish (HH/HL 4H)
Swept: PDL at 09:35
FVG: 21380-21400 bullish
P&L: $0 | Trades: 0
Setup: Swept PDL, displacement, FVG left
```

Claude will respond with entry, SL, TP, and ICT reasoning.

## License

Personal use only. Trade responsibly.
