// 🧹 This works but it's a mess. Refactor it (see the exercise README).
// Keep the exported behavior identical so the tests stay green.

export function calculateTotal(o: any) {
  let t = 0;
  for (let i = 0; i < o.items.length; i++) {
    let it = o.items[i];
    let p = it.price * it.qty;
    // bulk discount
    if (it.qty >= 10) {
      p = p * 0.9;
    }
    t = t + p;
  }
  // membership discount
  if (o.customer && o.customer.tier == 'gold') {
    t = t * 0.85;
  } else if (o.customer && o.customer.tier == 'silver') {
    t = t * 0.95;
  }
  // shipping
  if (t < 50) {
    t = t + 7.5;
  }
  // tax
  t = t + t * 0.101;
  return Math.round(t * 100) / 100;
}
