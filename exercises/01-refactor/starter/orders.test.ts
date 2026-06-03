import { describe, it, expect } from 'vitest';
import { calculateTotal } from './orders';

// These are your safety net. Refactor orders.ts however you like, 
// just keep these green. Do NOT change this file in the refactor exercise.
describe('calculateTotal', () => {
  it('sums line items with tax and shipping for a small order', () => {
    const order = { items: [{ price: 10, qty: 2 }] };
    // 20 + 7.5 shipping = 27.5, +10.1% tax = 30.28
    expect(calculateTotal(order)).toBe(30.28);
  });

  it('applies a 10% bulk discount at qty >= 10', () => {
    const order = { items: [{ price: 10, qty: 10 }] };
    // 100 * 0.9 = 90, no shipping (>=50), +10.1% tax = 99.09
    expect(calculateTotal(order)).toBe(99.09);
  });

  it('applies gold membership discount', () => {
    const order = {
      items: [{ price: 100, qty: 1 }],
      customer: { tier: 'gold' },
    };
    // 100 * 0.85 = 85, no shipping, +10.1% tax = 93.59
    expect(calculateTotal(order)).toBe(93.59);
  });

  it('adds shipping under $50', () => {
    const order = { items: [{ price: 5, qty: 1 }] };
    // 5 + 7.5 = 12.5, +10.1% tax = 13.76
    expect(calculateTotal(order)).toBe(13.76);
  });
});
