const currencies = [
  { name: "PLN", mark: "zł" },
  { name: "USD", mark: "$" },
  { name: "EUR", mark: "€" },
];

const currencyPairsData = [
  { pair: "EUR/PLN", exchangeRate: 4.61 },
  { pair: "USD/PLN", exchangeRate: 4.2 },
  { pair: "EUR/USD", exchangeRate: 1.09 },
];

const calculateResult = (amount, currencyPair, currencyExchange) => {
  if (!currencyExchange) {
    return NaN;
  }

  return currencyExchange.pair === currencyPair
    ? amount * currencyExchange.exchangeRate
    : amount / currencyExchange.exchangeRate;
};

export { currencies, currencyPairsData, calculateResult };
