export default function wrapGifts(gifts = []) {
  if (!gifts.length) return [];
  const wrappedGifts = gifts.map(gift => `*${gift}*`);
  wrappedGifts.unshift(`${'*'.repeat(wrappedGifts[0].length)}`);
  wrappedGifts.push(`${'*'.repeat(wrappedGifts[1].length)}`);
  return wrappedGifts;
}
