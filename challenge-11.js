export default function shouldBuyFidelity(times) {
  const normalTicket = 12 * times;
  let cardFidelity = 250;
  let ticketWithDiscount = 12;
  while (times > 0) {
    ticketWithDiscount = ticketWithDiscount * (3 / 4);
    cardFidelity += ticketWithDiscount;
    times--;
  }
  return cardFidelity < normalTicket;
}

shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
