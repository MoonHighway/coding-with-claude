// One cleaned-up version. Yours may differ, what matters is that it's typed,
// readable, and the tests still pass.

export type CustomerTier = 'gold' | 'silver';

export interface LineItem {
  price: number;
  qty: number;
}

export interface Order {
  items: LineItem[];
  customer?: { tier?: CustomerTier };
}

const BULK_QTY = 10;
const BULK_DISCOUNT = 0.9;
const TIER_MULTIPLIER: Record<CustomerTier, number> = { gold: 0.85, silver: 0.95 };
const FREE_SHIPPING_THRESHOLD = 50;
const SHIPPING_FEE = 7.5;
const TAX_RATE = 0.101;

const lineItemTotal = ({ price, qty }: LineItem): number =>
  qty >= BULK_QTY ? price * qty * BULK_DISCOUNT : price * qty;

const applyMembership = (subtotal: number, tier?: CustomerTier): number =>
  tier ? subtotal * TIER_MULTIPLIER[tier] : subtotal;

const withShipping = (subtotal: number): number =>
  subtotal < FREE_SHIPPING_THRESHOLD ? subtotal + SHIPPING_FEE : subtotal;

const withTax = (amount: number): number => amount + amount * TAX_RATE;

const roundCents = (amount: number): number => Math.round(amount * 100) / 100;

export function calculateTotal(order: Order): number {
  const subtotal = order.items.reduce((sum, item) => sum + lineItemTotal(item), 0);
  const discounted = applyMembership(subtotal, order.customer?.tier);
  return roundCents(withTax(withShipping(discounted)));
}
