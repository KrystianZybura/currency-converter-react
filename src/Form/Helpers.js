const currencies = [
  { name: "PLN", mark: "zł" },
  { name: "USD", mark: "$" },
  { name: "EUR", mark: "€" },
];

const exchangeRates = [
  {
    usdToPlnRate: 4.2,
    eurToPlnRate: 4.61,
    usdToEurRate: 0.91,
  },
];

const calculateResult = (
  amount,
  currencyPair,
  { eurToPlnRate, usdToEurRate, usdToPlnRate }
) => {
  switch (currencyPair) {
    case "PLN/EUR":
      return amount / eurToPlnRate;

    case "PLN/USD":
      return amount / usdToPlnRate;

    case "USD/PLN":
      return amount * usdToPlnRate;

    case "USD/EUR":
      return amount * usdToEurRate;

    case "EUR/USD":
      return amount / usdToEurRate;

    case "EUR/PLN":
      return amount * eurToPlnRate;

    default:
      return NaN;
  }
};

export { currencies, exchangeRates, calculateResult };
