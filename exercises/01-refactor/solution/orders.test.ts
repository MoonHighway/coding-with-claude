import { describe, it, expect } from 'vitest';
import { calculateTotal } from './orders';

describe('calculateTotal (solution)', () => {
  it('sums line items with tax and shipping for a small order', () => {
    expect(calculateTotal({ items: [{ price: 10, qty: 2 }] })).toBe(30.28);
  });
  it('applies a 10% bulk discount at qty >= 10', () => {
    expect(calculateTotal({ items: [{ price: 10, qty: 10 }] })).toBe(99.09);
  });
  it('applies gold membership discount', () => {
    expect(
      calculateTotal({ items: [{ price: 100, qty: 1 }], customer: { tier: 'gold' } }),
    ).toBe(93.59);
  });
  it('adds shipping under $50', () => {
    expect(calculateTotal({ items: [{ price: 5, qty: 1 }] })).toBe(13.76);
  });
});
