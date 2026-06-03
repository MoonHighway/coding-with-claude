# Spec: Gift-card redemption

## Why
Customers want to apply a gift card at checkout to reduce what they owe.

## What
A pure function `redeemGiftCard(total, card)` that applies a gift card's balance
against an order total.

```ts
redeemGiftCard(total: number, card: GiftCard): RedemptionResult
```

### Types
```ts
type GiftCard = { code: string; balance: number };
type RedemptionResult = {
  amountDue: number;       // what the customer still owes, never below 0
  amountApplied: number;   // how much of the card we used
  remainingBalance: number; // what's left on the card afterward
};
```

## Acceptance criteria
1. **Partial cover**: card balance < total: apply the full balance.
   `redeemGiftCard(100, { code: 'A', balance: 30 })` →
   `{ amountDue: 70, amountApplied: 30, remainingBalance: 0 }`
2. **Full cover with leftover**: card balance > total: apply only what's needed.
   `redeemGiftCard(20, { code: 'A', balance: 50 })` →
   `{ amountDue: 0, amountApplied: 20, remainingBalance: 30 }`
3. **Exact cover**: balance === total: amountDue 0, remainingBalance 0.
4. **Zero-balance card**: applies nothing, amountDue unchanged.
5. **Validation**: throws if `total` is negative or `card.balance` is negative.
6. Money is handled to **2 decimal places** (round half up).

## Out of scope
- Multiple gift cards at once
- Currency conversion
- Persisting the card balance anywhere

## Done
All six criteria covered by passing vitest cases.
