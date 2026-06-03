export type GiftCard = { code: string; balance: number };

export type RedemptionResult = {
  amountDue: number;
  amountApplied: number;
  remainingBalance: number;
};

const roundCents = (n: number): number => Math.round(n * 100) / 100;

export function redeemGiftCard(total: number, card: GiftCard): RedemptionResult {
  if (total < 0) throw new Error('total must not be negative');
  if (card.balance < 0) throw new Error('card balance must not be negative');

  const amountApplied = Math.min(total, card.balance);

  return {
    amountDue: roundCents(total - amountApplied),
    amountApplied: roundCents(amountApplied),
    remainingBalance: roundCents(card.balance - amountApplied),
  };
}
