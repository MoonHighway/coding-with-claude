import { describe, it, expect } from 'vitest';
import { redeemGiftCard } from './giftcard';

describe('redeemGiftCard', () => {
  it('partial cover: applies the full balance', () => {
    expect(redeemGiftCard(100, { code: 'A', balance: 30 })).toEqual({
      amountDue: 70,
      amountApplied: 30,
      remainingBalance: 0,
    });
  });

  it('full cover with leftover: applies only what is needed', () => {
    expect(redeemGiftCard(20, { code: 'A', balance: 50 })).toEqual({
      amountDue: 0,
      amountApplied: 20,
      remainingBalance: 30,
    });
  });

  it('exact cover', () => {
    expect(redeemGiftCard(40, { code: 'A', balance: 40 })).toEqual({
      amountDue: 0,
      amountApplied: 40,
      remainingBalance: 0,
    });
  });

  it('zero-balance card applies nothing', () => {
    expect(redeemGiftCard(40, { code: 'A', balance: 0 })).toEqual({
      amountDue: 40,
      amountApplied: 0,
      remainingBalance: 0,
    });
  });

  it('throws on negative total', () => {
    expect(() => redeemGiftCard(-1, { code: 'A', balance: 10 })).toThrow();
  });

  it('throws on negative balance', () => {
    expect(() => redeemGiftCard(10, { code: 'A', balance: -5 })).toThrow();
  });
});
