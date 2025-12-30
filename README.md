# ICT MNQ Trading System

🎯 **ICT-based MNQ futures trading system for MFFU $50K prop firm evaluation**

This repository contains a complete trading system based on Inner Circle Trader (ICT) concepts, including the Market Maker Models (MMXM).

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

### Skill File (`SKILL.md`)
Upload to Claude Settings → Features → Skills for persistent knowledge across all chats.

### Reference Files
- `references/mmxm-model.md` - Complete MMXM (Market Maker Buy/Sell Models)
- `references/ict-setups.md` - Standard ICT setups (Liquidity Sweep, OB+MSS, Silver Bullet, OTE)
- `references/bias-determination.md` - HTF bias rules and scoring
- `references/session-times.md` - Kill zones and session rules

### Assets
- `assets/trade-template.md` - Input template for trade analysis requests

## Setup Priority

1. **MMXM** - Full 5-phase Market Maker structure (highest probability)
2. **Liquidity Sweep + FVG** - Quick reversal entries
3. **Order Block + MSS** - Structure shift entries
4. **Silver Bullet** - Time-window specific (10:00-11:00, 14:00-15:00 ET)
5. **OTE** - Fibonacci retracement entries

## Trading Sessions (ET)

| Session | Time | Action |
|---------|------|--------|
| NY AM Kill Zone | 09:30-11:00 | ✅ PRIMARY |
| NY PM Kill Zone | 14:00-15:00 | ✅ Secondary |
| NY Lunch | 11:00-13:00 | ❌ AVOID |
| London | 02:00-05:00 | ⚠️ Selective |

## Quick Usage

In any Claude chat (with skill installed), send:

```
NY AM | 10:15 | Price: 21450
PDH: 21500 | PDL: 21350
Bias: Bullish (HH/HL 4H)
Swept: PDL at 09:35
FVG: 21380-21400 bullish
P&L: $0 | Trades: 0
Setup: Swept PDL, displacement, FVG left
```

Claude will respond with entry, SL, TP, and reasoning.

## Risk Rules

- Max 25 points SL per trade
- Stop trading if down $1,500/day
- Wait 30 min after any loss
- No trading 15 min around high-impact news
- Max 3-4 trades per day

## License

Personal use only. Not financial advice.
