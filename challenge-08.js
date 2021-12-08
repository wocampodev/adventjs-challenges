export default function maxProfit(prices = []) {
  let maxProfit = 0;
  prices.forEach((price, index) => {
    const keysToCompare = Object.keys(prices).slice(index);
    keysToCompare.forEach(indexToCompare => {
      let newMaxProfit = - price + prices[indexToCompare];
      if (newMaxProfit > maxProfit) {
        maxProfit = newMaxProfit;
      }
    });
  });
  return maxProfit > 0 ? maxProfit : -1;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
console.log(maxProfit(pricesBtc));
