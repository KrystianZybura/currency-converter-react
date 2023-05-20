const currencies = [
  { name: "PLN", mark: "zł" },
  { name: "USD", mark: "$" },
  { name: "EUR", mark: "€" },
  { name: "GBP", mark: "£" },
];

const currencyPairsData = [
  { pair: "EUR/PLN", exchangeRate: 4.5381 },
  { pair: "USD/PLN", exchangeRate: 4.1982 },
  { pair: "EUR/USD", exchangeRate: 1.0809 },
  { pair: "GBP/PLN", exchangeRate: 5.2251 },
  { pair: "GBP/EUR", exchangeRate: 1.1513 },
  { pair: "GBP/USD", exchangeRate: 1.2446 },
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
